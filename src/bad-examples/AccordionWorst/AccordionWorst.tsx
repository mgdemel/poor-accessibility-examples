"use client";
import React, { useState } from "react";
import { ArrowIcon } from "../Icon";

export const AccordionWorst = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col">
      <div onClick={() => toggleAccordion(0)}>
        <div className="flex flex-row">
          <h3>Section 1</h3>
          <ArrowIcon isOpen={openIndex === 0} />
        </div>
        {openIndex === 0 && <div>Content for section 1</div>}
      </div>
      <div onClick={() => toggleAccordion(1)}>
        <div className="flex flex-row">
          <h3>Section 2</h3>
          <ArrowIcon isOpen={openIndex === 1} />
        </div>
        {openIndex === 1 && <div>Content for section 2</div>}
      </div>
      <div onClick={() => toggleAccordion(2)}>
        <div className="flex flex-row">
          <h3>Section 3</h3>
          <ArrowIcon isOpen={openIndex === 2} />
        </div>
        {openIndex === 2 && <div>Content for section 3</div>}
      </div>
    </div>
  );
};
