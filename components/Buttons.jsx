"use client";

import { Paragraph } from "./typography";
import { CopyIcon } from "./icons";
import { useState } from "react";

// Utilities
import copyText from "@/utils/copyText";

function Button({ children, className, type, onClick }) {
  return (
    <button type={type} onClick={onClick} className={`btn ${className}`}>
      {children}
    </button>
  );
}

export function PrimaryButton({ children, className, type, onClick }) {
  return (
    <Button
      type={type}
      className={`primary-btn ${className}`}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

export function SecondaryButton({ children, className, onClick }) {
  return (
    <Button className={`secondary-btn ${className}`} onClick={onClick}>
      {children}
    </Button>
  );
}

export function PrimaryCopyButton({ children, className, type }) {
  const [isClick, setIsClick] = useState(false);

  return (
    <Button
      type={type}
      className={`primary-btn flex w-[250px] gap-2 overflow-hidden ${className}`}
      onClick={(e) => {
        setIsClick(true);
        copyText(children);

        setTimeout(() => {
          setIsClick(false);
        }, 2000);
      }}
    >
      <div
        className={`flex justify-center items-center gap-2
           transition-all duration-[400ms] w-[250px] capitalize ${
             isClick ? "ml-0" : "-ml-[260px]"
           }`}
      >
        <div className="w-3.5 h-3.5">
          <CopyIcon className="stroke-black stroke-1" />
        </div>
        <Paragraph>Copied</Paragraph>
      </div>

      <div
        className={`flex justify-center items-center gap-2 transition-all
           duration-[400ms] w-[250px] ${isClick ? "-mr-[260px]" : "ml-0"}`}
      >
        <div className="w-3.5 h-3.5">
          <CopyIcon className="stroke-black stroke-1" />
        </div>
        <Paragraph>{children}</Paragraph>
      </div>
    </Button>
  );
}
