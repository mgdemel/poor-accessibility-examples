"use client";
import React, { useState } from "react";

export const AccordionWorst = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col">
      <div onClick={() => toggleAccordion(0)}>
        <h3>Section 1</h3>
        {openIndex === 0 && <div>Content for section 1</div>}
      </div>
      <div onClick={() => toggleAccordion(1)}>
        <h3>Section 2</h3>
        {openIndex === 1 && <div>Content for section 2</div>}
      </div>
      <div onClick={() => toggleAccordion(2)}>
        <h3>Section 3</h3>
        {openIndex === 2 && <div>Content for section 3</div>}
      </div>
    </div>
  );
};
