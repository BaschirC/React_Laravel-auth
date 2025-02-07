import { RelationType } from "@/types/defaults";
import { clsx, type ClassValue } from "clsx";
import { toast } from "react-hot-toast";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function copyToClipboard(text: string): void {
  navigator.clipboard.writeText(text).then(
    () => {
      toast.success("Copied to clipboard");
    },
    (err) => {
      toast.error("Failed to copy text");
      console.error("Failed to copy text: ", err);
    }
  );
}

export const extractInitials = (name: string): string => {
  const words = name.split(" ");
  const initials = words.map((word) => word[0].toUpperCase()).join("");
  return initials;
};

export const formatDuration = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  return hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
};

export const formatDistance = (distance: number) => {
  return `${(distance / 1000).toFixed(2)} km`;
};

export const jwt = {
  decode: (token: string | undefined) => {
    if (!token) return;

    return JSON.parse(Buffer.from(token?.split(".")[1], "base64").toString());
  },
};

export const magicRename = (string: string) => {
  const normalizedString = string
    .replace(/([a-z0-9])([A-Z])/g, "$1_$2")
    .toLowerCase();

  return normalizedString
    .split("_")
    .map((word, index) =>
      index === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word
    )
    .join(" ");
};

export const normalizeDate = (date: Date) => {
  return `${date.toLocaleString("default", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  })} ${date.toLocaleString("default", {
    hour: "2-digit",
    minute: "2-digit",
  })}`;
};

export function getRelationFields<T>(obj: T): RelationType<T>[] {
  return Object.entries(obj as any)
    .filter(([, value]) => {
      return (
        Array.isArray(value) || (typeof value === "object" && value !== null)
      );
    })
    .map(([key]) => key) as RelationType<T>[];
}

export const calculateTimeDifference = (
  {
    departureTime,
    arrivalTime,
  }: {
    departureTime: string;
    arrivalTime: string;
  },
  cb: (time: string) => void
) => {
  const arrivalDate: any = new Date();
  const departureDate: any = new Date();

  const [departureHours, departureMinutes] = departureTime.split(":");
  const [arrivalHours, arrivalMinutes] = arrivalTime.split(":");

  if (arrivalHours > departureHours) {
    arrivalDate.setDate(arrivalDate.getDate() - 1);
  }

  arrivalDate.setHours(
    parseInt(arrivalHours ?? (0 as any)),
    parseInt(arrivalMinutes ?? (0 as any)),
    0,
    0
  );
  departureDate.setHours(
    parseInt(departureHours ?? (0 as any)),
    parseInt(departureMinutes ?? (0 as any)),
    0,
    0
  );

  const diffHours = Math.floor(
    ((departureDate - arrivalDate) as number) / (1000 * 60 * 60)
  );
  const diffMinutes = Math.floor(
    ((departureDate - arrivalDate) % (1000 * 60 * 60)) / (1000 * 60)
  );

  if (diffMinutes === 0) {
    return cb(`${diffHours}h`);
  }

  if (diffHours === 0) {
    return cb(`${diffMinutes}min`);
  }

  if (isNaN(diffHours) || isNaN(diffMinutes)) {
    return;
  }

  cb(`${diffHours}h & ${diffMinutes}min`);
};

export const capitalize = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export function formatDurationMs(duration: number): string {
  // Define time units
  const msInSecond = 1000;
  const msInMinute = msInSecond * 60;
  const msInHour = msInMinute * 60;

  // Handle extremely small durations: display as "<1s" if less than 1 second
  if (duration < msInSecond) {
    return "< 1s";
  }

  // Calculate the number of hours, minutes, and seconds
  const hours = Math.floor(duration / msInHour);
  const minutes = Math.floor((duration % msInHour) / msInMinute);
  const seconds = Math.floor((duration % msInMinute) / msInSecond);

  // Build the readable string
  let result = "";

  if (hours > 0) result += `${hours}h `;
  if (minutes > 0 || hours > 0) result += `${minutes}m `;
  if (seconds > 0 || minutes > 0 || hours > 0) result += `${seconds}s`;

  return result.trim();
}

export const getBadgeColorBasedOnLevel = (level: string) => {
  switch (level) {
    case "ERROR":
      return "red";
    case "WARNING":
      return "yellow";
    case "INFO":
      return "sky";
    case "DEBUG":
      return "gray";
    default:
      return "white";
  }
};

export const getFirstLanguageValue = (
  record: Record<string, string> | undefined
): string => {
  if (!record) return "";
  const firstKey = Object.keys(record)[0];
  return record[firstKey] || "";
};
