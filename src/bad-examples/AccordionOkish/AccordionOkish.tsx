"use client";
import React, { useState } from "react";
import { ArrowIcon } from "../ArrowIcon";

export const AccordionOkish = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col">
      <div>
        <h3 className="font-bold">
          <button
            className="flex flex-row"
            tabIndex={0}
            onClick={() => toggleAccordion(0)}
          >
            Section 1
            <ArrowIcon isOpen={openIndex === 0} />
          </button>
        </h3>
        {openIndex === 0 && <div>Content for section 1</div>}
      </div>
      <div>
        <h3 className="font-bold">
          <button
            className="flex flex-row"
            tabIndex={0}
            onClick={() => toggleAccordion(1)}
          >
            Section 2
            <ArrowIcon isOpen={openIndex === 1} />
          </button>
        </h3>
        {openIndex === 1 && <div>Content for section 2</div>}
      </div>
      <div>
        <h3 className="font-bold">
          <button
            className="flex flex-row"
            tabIndex={0}
            onClick={() => toggleAccordion(2)}
          >
            Section 3
            <ArrowIcon isOpen={openIndex === 2} />
          </button>
        </h3>
        {openIndex === 2 && <div>Content for section 3</div>}
      </div>
    </div>
  );
};
