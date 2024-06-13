"use client";
import React, { useState } from "react";
import { ArrowIcon } from "../Icon";

export const AccordionPass = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleAccordion(index);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="">
        <button
          aria-controls="section1-content"
          aria-expanded={openIndex === 0 ? "true" : "false"}
          className="flex flex-row"
          onClick={() => toggleAccordion(0)}
          onKeyDown={(e) => handleKeyDown(e, 0)}
        >
          <h3 className="font-bold">Section 1</h3>
          <ArrowIcon isOpen={openIndex === 0} />
        </button>
        {openIndex === 0 && (
          <div id="section1-content">
            <p>Content for section 1</p>
          </div>
        )}
      </div>
      <div className="">
        <button
          aria-controls="section2-content"
          aria-expanded={openIndex === 1 ? "true" : "false"}
          className="flex flex-row"
          onClick={() => toggleAccordion(1)}
          onKeyDown={(e) => handleKeyDown(e, 1)}
        >
          <h3 className="font-bold">Section 2</h3>
          <ArrowIcon isOpen={openIndex === 1} />
        </button>
        {openIndex === 1 && (
          <div id="section2-content">
            <p>Content for section 2</p>
          </div>
        )}
      </div>
      <div className="">
        <button
          aria-controls="section3-content"
          aria-expanded={openIndex === 2 ? "true" : "false"}
          className="flex flex-row"
          onClick={() => toggleAccordion(2)}
          onKeyDown={(e) => handleKeyDown(e, 2)}
        >
          <h3 className="font-bold">Section 3</h3>
          <ArrowIcon isOpen={openIndex === 2} />
        </button>
        {openIndex === 2 && (
          <div id="section3-content">
            <p>Content for section 3</p>
          </div>
        )}
      </div>
    </div>
  );
};
