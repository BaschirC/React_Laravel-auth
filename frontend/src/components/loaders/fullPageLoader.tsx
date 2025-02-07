"use client";

import React from "react";
import TailLoader from "./tailLoader";

function FullPageLoader() {
  return (
    <div className='grid w-screen h-screen overflow-hidden place-content-center'>
      <TailLoader size={40} />
    </div>
  );
}

export default FullPageLoader;
