"use client";

import React from "react";

interface TailLoaderProps {
  size?: number;
  color?: string;
  speed?: number;
}

const TailLoader: React.FC<TailLoaderProps> = ({
  size = 20,
  color = "gray",
  speed = 1.7,
}) => {
  const dotSize = size * 0.17;

  return (
    <div className='container'>
      {[...Array(6)].map((_, index) => (
        <div key={index} className='dot'></div>
      ))}
      <style>{`
                .container {
                    --uib-size: ${size}px;
                    --uib-color: ${color};
                    --uib-speed: ${speed}s;
                    --dot-size: ${dotSize}px;
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    height: var(--uib-size);
                    width: var(--uib-size);
                    animation: smoothRotate calc(var(--uib-speed) * 1.8) linear infinite;
                }

                .dot {
                    position: absolute;
                    top: 0;
                    left: 0;
                    display: flex;
                    align-items: flex-start;
                    justify-content: center;
                    height: 100%;
                    width: 100%;
                    animation: rotate var(--uib-speed) ease-in-out infinite;
                }

                .dot::before {
                    content: '';
                    height: var(--dot-size);
                    width: var(--dot-size);
                    border-radius: 50%;
                    background-color: var(--uib-color);
                    transition: background-color 0.3s ease;
                }

                .dot:nth-child(2),
                .dot:nth-child(2)::before {
                    animation-delay: calc(var(--uib-speed) * -0.835 * 0.5);
                }

                .dot:nth-child(3),
                .dot:nth-child(3)::before {
                    animation-delay: calc(var(--uib-speed) * -0.668 * 0.5);
                }

                .dot:nth-child(4),
                .dot:nth-child(4)::before {
                    animation-delay: calc(var(--uib-speed) * -0.501 * 0.5);
                }

                .dot:nth-child(5),
                .dot:nth-child(5)::before {
                    animation-delay: calc(var(--uib-speed) * -0.334 * 0.5);
                }

                .dot:nth-child(6),
                .dot:nth-child(6)::before {
                    animation-delay: calc(var(--uib-speed) * -0.167 * 0.5);
                }

                @keyframes rotate {
                    0% {
                        transform: rotate(0deg);
                    }
                    65%,
                    100% {
                        transform: rotate(360deg);
                    }
                }

                @keyframes smoothRotate {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }
            `}</style>
    </div>
  );
};

export default TailLoader;
