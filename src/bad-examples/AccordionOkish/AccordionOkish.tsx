"use client";
import React, { useState } from "react";
import { ArrowIcon } from "../Icon";

export const AccordionOkish = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.code === "Enter" || e.code === "Space") {
      e.preventDefault();
      toggleAccordion(index);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="">
        <button
          className="flex flex-row"
          tabIndex={0}
          onClick={() => toggleAccordion(0)}
          onKeyDown={(e) => handleKeyDown(e, 0)}
        >
          <h3>Section 1</h3>
          <ArrowIcon isOpen={openIndex === 0} />
        </button>
        {openIndex === 0 && <div>Content for section 1</div>}
      </div>
      <div className="">
        <button
          className="flex flex-row"
          tabIndex={0}
          onClick={() => toggleAccordion(1)}
          onKeyDown={(e) => handleKeyDown(e, 1)}
        >
          <h3>Section 2</h3>
          <ArrowIcon isOpen={openIndex === 1} />
        </button>
        {openIndex === 1 && <div>Content for section 2</div>}
      </div>
      <div className="">
        <button
          className="flex flex-row"
          tabIndex={0}
          onClick={() => toggleAccordion(2)}
          onKeyDown={(e) => handleKeyDown(e, 2)}
        >
          <h3>Section 3</h3>
          <ArrowIcon isOpen={openIndex === 2} />
        </button>
        {openIndex === 2 && <div>Content for section 3</div>}
      </div>
    </div>
  );
};
