"use client";
import { SecondaryButton } from "./Buttons";
import { PlusIcon } from "./icons";
import { Paragraph } from "./typography";
import { useState } from "react";

export default function QuestionCard({ question, answer }) {
  const [isClick, setIsClick] = useState(false);

  return (
    <SecondaryButton
      className="!w-full !normal-case !text-base"
      onClick={(e) => setIsClick(!isClick)}
    >
      {/* Question */}
      <div className="flex justify-between items-center gap-2">
        <div className="w-full">
          <Paragraph>{question}</Paragraph>
        </div>
        <div
          className={`w-3 h-3 transition-[rotate] duration-[400ms] ${
            isClick ? "-rotate-45" : ""
          }`}
        >
          <PlusIcon />
        </div>
      </div>

      {/* Answer */}
      <div
        className={`overflow-hidden text-tertiary transition-[max-height] 
                duration-[400ms] ${isClick ? "max-h-[500px]" : "max-h-0"}`}
      >
        <div className="pt-2.5">
          <Paragraph>{answer}</Paragraph>
        </div>
      </div>
    </SecondaryButton>
  );
}
