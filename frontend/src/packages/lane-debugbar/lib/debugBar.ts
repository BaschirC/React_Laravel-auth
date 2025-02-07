interface IDebugLog {
  label: string;
  message: string;
  data?: Record<string, any>;
}

interface LogData {
  timestamp: string;
  level: "info" | "error" | "warn" | "debug";
  message: string;
  data: Record<string, any> | null;
}

function parseLogLine(logLine: string): LogData {
  const timestampLevelRegex = /\[([\d:]+)\] LOG\.(\w+):/;
  const timestampLevelMatch = logLine.match(timestampLevelRegex);

  if (!timestampLevelMatch) {
    throw new Error("Invalid log format");
  }

  const [, timestamp, level] = timestampLevelMatch;

  if (!isValidLogLevel(level)) {
    throw new Error(`Invalid log level: ${level}`);
  }

  const remainingContent = logLine.replace(timestampLevelRegex, "").trim();
  const jsonStartIndex = remainingContent.indexOf("{");

  if (jsonStartIndex === -1) {
    return {
      timestamp,
      level: level as LogData["level"],
      message: remainingContent,
      data: null,
    };
  }

  const message = remainingContent.substring(0, jsonStartIndex).trim();
  let jsonStr = remainingContent.substring(jsonStartIndex);

  try {
    const closingIndex = findClosingBrace(jsonStr);
    if (closingIndex === -1) {
      throw new Error("Invalid JSON: missing closing brace");
    }

    jsonStr = jsonStr.substring(0, closingIndex + 1);
    const jsonData = JSON.parse(jsonStr) as Record<string, any>;

    return {
      timestamp,
      level: level as LogData["level"],
      message,
      data: jsonData,
    };
  } catch (e) {
    throw new Error(
      `Failed to parse JSON data: ${
        e instanceof Error ? e.message : "Unknown error"
      }`
    );
  }
}

function findClosingBrace(str: string): number {
  let braceCount = 1;
  for (let i = 1; i < str.length; i++) {
    if (str[i] === "{") braceCount++;
    if (str[i] === "}") braceCount--;
    if (braceCount === 0) return i;
  }
  return -1;
}

function isValidLogLevel(level: string): level is LogData["level"] {
  return ["info", "error", "warn", "debug"].includes(level);
}

export const handleDebugBarLogs = (messages: IDebugLog[]) => {
  const logStyles: Record<string, string> = {
    info: "color: #007BFF; padding: 4px 8px; border-radius: 4px;",
    error:
      "color: white; background: #DC3545; padding: 4px 8px; border-radius: 4px;",
    debug:
      "color: white; background: #6C757D; padding: 4px 8px; border-radius: 4px;",
    default:
      "color: white; background: #28A745; padding: 4px 8px; border-radius: 4px;",
  };

  messages.forEach((message) => {
    try {
      const parsedLog = parseLogLine(message.message);
      const style = logStyles[parsedLog.level] || logStyles.default;

      // Start a collapsed group with the styled log level and message
      console.groupCollapsed(
        `%c${parsedLog.level.toUpperCase()}: ${parsedLog.message}`,
        style
      );

      // Log timestamp
      console.log("Timestamp:", parsedLog.timestamp);

      // Log the parsed JSON data if available
      if (parsedLog.data) {
        console.log("Data:", parsedLog.data);
      } else {
        console.log("No additional data available.");
      }

      console.groupEnd();
    } catch (error) {
      // Fallback to original message if parsing fails
      const style = logStyles[message.label] || logStyles.default;
      console.groupCollapsed(
        `%c${message.label.toUpperCase()}: ${message.message}`,
        style
      );

      if (message.data) {
        console.log("Data:", message.data);
      } else {
        console.log("No additional data available.");
      }

      console.groupEnd();

      // Log the parsing error separately
      console.error("Log parsing error:", error);
    }
  });
};
