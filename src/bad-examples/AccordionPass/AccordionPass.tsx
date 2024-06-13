"use client";
import React, { useState } from "react";
import { ArrowIcon } from "../ArrowIcon";

export const AccordionPass = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col">
      <div>
        <h3 className="font-bold">
          <button
            aria-controls="section1-content"
            aria-expanded={openIndex === 0 ? "true" : "false"}
            className="flex flex-row"
            onClick={() => toggleAccordion(0)}
          >
            Section 1
            <ArrowIcon isOpen={openIndex === 0} />
          </button>
        </h3>
        {openIndex === 0 && (
          <div id="section1-content">
            <p>Content for section 1</p>
          </div>
        )}
      </div>
      <div>
        <h3 className="font-bold">
          <button
            aria-controls="section2-content"
            aria-expanded={openIndex === 1 ? "true" : "false"}
            className="flex flex-row"
            onClick={() => toggleAccordion(1)}
          >
            Section 2
            <ArrowIcon isOpen={openIndex === 1} />
          </button>
        </h3>
        {openIndex === 1 && (
          <div id="section2-content">
            <p>Content for section 2</p>
          </div>
        )}
      </div>
      <div>
        <h3 className="font-bold">
          <button
            aria-controls="section3-content"
            aria-expanded={openIndex === 2 ? "true" : "false"}
            className="flex flex-row"
            onClick={() => toggleAccordion(2)}
          >
            Section 3
            <ArrowIcon isOpen={openIndex === 2} />
          </button>
        </h3>
        {openIndex === 2 && (
          <div id="section3-content">
            <p>Content for section 3</p>
          </div>
        )}
      </div>
    </div>
  );
};
