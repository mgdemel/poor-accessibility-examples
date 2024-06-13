import React, { useState, useEffect, useRef } from "react";
import * as RadixAccordion from "@radix-ui/react-accordion";
import { ArrowIcon } from "@/bad-examples";

type Props = {
  id: string;
  trigger: React.ReactNode;
  content: React.ReactNode;
};

export const Accordion = ({ id, trigger, content }: Props) => {
  const item = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (item.current !== null) {
      console.log(item.current);
      item.current.getAttribute("data-state") === "open"
        ? setIsOpen(true)
        : setIsOpen(false);
    }
  }, [isOpen]);

  return (
    <RadixAccordion.Item className="py-2 w-full" value={id} ref={item}>
      <RadixAccordion.Trigger
        className="flex"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {trigger}
        <ArrowIcon isOpen={isOpen} />
      </RadixAccordion.Trigger>
      <RadixAccordion.Content className="py-2 overflow-hidden transition-all duration-300 ease-in-out">
        {content}
      </RadixAccordion.Content>
    </RadixAccordion.Item>
  );
};
