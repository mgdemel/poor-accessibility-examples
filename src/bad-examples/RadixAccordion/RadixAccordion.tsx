"use client";
import { Accordion } from "@/modules";
import * as RAccordion from "@radix-ui/react-accordion";

export const RadixAccordion = () => {
  return (
    <div>
      <RAccordion.Root className="" type="single" collapsible>
        <Accordion
          id="item-1"
          trigger={<h3 className="font-bold">Section 1</h3>}
          content={<p>Content for section 1</p>}
        />
        <Accordion
          id="item-2"
          trigger={<h3 className="font-bold">Section 2</h3>}
          content={<p>Content for section 2</p>}
        />
        <Accordion
          id="item-3"
          trigger={<h3 className="font-bold">Section 3</h3>}
          content={<p>Content for section 3</p>}
        />
      </RAccordion.Root>
    </div>
  );
};
