"use client";

import React, { useEffect, useState } from "react";
import WithTooltip from "../withTooltip";

const CmdCtrlButton = ({ message }: { message?: string }) => {
  const [modifierKey, setModifierKey] = useState("ctrl");

  useEffect(() => {
    const isMac = navigator.userAgent.toLowerCase().includes("mac");
    setModifierKey(isMac ? "cmd" : "ctrl");
  }, []);

  return (
    <div className='flex items-center gap-4'>
      <WithTooltip
        message={`Press ${modifierKey} + Enter ${message ?? "to submit"}`}
        trigger={
          <span className='flex items-center gap-2 cursor-default'>
            {modifierKey === "cmd" ? "⌘" : "^"}
            <span className='text-xs'>Enter</span>
          </span>
        }
      />
    </div>
  );
};

export default CmdCtrlButton;
