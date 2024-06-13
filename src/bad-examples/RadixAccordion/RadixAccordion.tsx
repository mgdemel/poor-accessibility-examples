"use client";
import React, { useState } from "react";
import * as RAccordion from "@radix-ui/react-accordion";
import { ArrowIcon } from "../ArrowIcon";

export const RadixAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <RAccordion.Root type="single" collapsible>
        <RAccordion.Item className="py-2 w-full" value="item-1">
          <RAccordion.Header className="font-bold">
            <RAccordion.Trigger
              className="flex"
              onClick={() => toggleAccordion(0)}
            >
              Section 1
              <ArrowIcon isOpen={openIndex === 0} />
            </RAccordion.Trigger>
          </RAccordion.Header>
          <RAccordion.Content className="py-2 overflow-hidden transition-all duration-300 ease-in-out">
            <p>Content for section 1</p>
          </RAccordion.Content>
        </RAccordion.Item>
        <RAccordion.Item className="py-2 w-full" value="item-2">
          <RAccordion.Header className="font-bold">
            <RAccordion.Trigger
              className="flex"
              onClick={() => toggleAccordion(1)}
            >
              Section 2
              <ArrowIcon isOpen={openIndex === 1} />
            </RAccordion.Trigger>
          </RAccordion.Header>
          <RAccordion.Content className="py-2 overflow-hidden transition-all duration-300 ease-in-out">
            <p>Content for section 2</p>
          </RAccordion.Content>
        </RAccordion.Item>
        <RAccordion.Item className="py-2 w-full" value="item-3">
          <RAccordion.Header className="font-bold">
            <RAccordion.Trigger
              className="flex"
              onClick={() => toggleAccordion(2)}
            >
              Section 3
              <ArrowIcon isOpen={openIndex === 2} />
            </RAccordion.Trigger>
          </RAccordion.Header>
          <RAccordion.Content className="py-2 overflow-hidden transition-all duration-300 ease-in-out">
            <p>Content for section 3</p>
          </RAccordion.Content>
        </RAccordion.Item>
      </RAccordion.Root>
    </div>
  );
};
