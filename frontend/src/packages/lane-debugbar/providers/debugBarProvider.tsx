"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { IDebugBar } from "../types/debugBar";
import humanize from "humanize-duration";

type ResponseContextType = {
  responses:
    | {
        path: string;
        responses: IDebugBar[];
        totalTime_str: string;
        totalTime: number;
      }
    | undefined;
  addResponse: (response: IDebugBar) => void;
};

const ResponseContext = createContext<ResponseContextType | undefined>(
  undefined
);

export const DebugBarProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [path, setPath] = useState(() =>
    typeof window !== "undefined" ? window.location.pathname : "/"
  );

  const [responses, setResponses] = useState<
    | {
        path: string;
        responses: IDebugBar[];
        totalTime: number;
        totalTime_str: string;
      }
    | undefined
  >(undefined);

  const addResponse = (response: IDebugBar) => {
    setResponses((prev) => {
      const newResponses: IDebugBar[] = prev
        ? [...prev.responses, response]
        : [response];

      const totalTime = newResponses.reduce((acc, cur) => {
        return acc + cur.time.duration;
      }, 0);

      const duration = humanize(totalTime, {
        round: true,
        units: ["ms"],
      });

      return {
        path,
        responses: newResponses,
        totalTime_str: duration,
        totalTime: totalTime,
      };
    });
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Function to check and update path
    const checkPath = () => {
      const currentPath = window.location.pathname;
      if (currentPath !== path) {
        setPath(currentPath);
        setResponses(undefined);
      }
    };

    // Initial check
    checkPath();

    // Set up MutationObserver to watch for DOM changes
    const observer = new MutationObserver(() => {
      checkPath();
    });

    // Watch for changes in the document body
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Also listen to native history events as backup
    const handlePathChange = () => {
      checkPath();
    };

    window.addEventListener("popstate", handlePathChange);

    // Optional: Monitor URL changes using requestAnimationFrame
    let previousUrl = window.location.href;
    const urlCheckInterval = () => {
      const currentUrl = window.location.href;
      if (currentUrl !== previousUrl) {
        previousUrl = currentUrl;
        checkPath();
      }
      requestAnimationFrame(urlCheckInterval);
    };
    const frameId = requestAnimationFrame(urlCheckInterval);

    return () => {
      observer.disconnect();
      window.removeEventListener("popstate", handlePathChange);
      cancelAnimationFrame(frameId);
    };
  }, [path]);

  return (
    <ResponseContext.Provider
      value={{
        responses,
        addResponse,
      }}
    >
      {children}
    </ResponseContext.Provider>
  );
};

export const useDebugBar = () => {
  const context = useContext(ResponseContext);
  if (!context) {
    throw new Error("useDebugBar must be used within a DebugBarProvider");
  }
  return context;
};
