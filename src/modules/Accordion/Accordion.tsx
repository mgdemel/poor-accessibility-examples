"use client";
import React from "react";
import * as RadixAccordion from "@radix-ui/react-accordion";

type Props = {
  trigger: React.ReactNode;
  content: React.ReactNode;
};

export const Accordion = ({ trigger, content }: Props) => {
  return (
    <RadixAccordion.Root
      className=""
      type="single"
      defaultValue="item-1"
      collapsible
    >
      <RadixAccordion.Item className="py-2 w-full" value="item-1">
        <RadixAccordion.Trigger className="flex">
          {trigger}
          <svg
            className="m-1"
            width="24"
            height="24"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </RadixAccordion.Trigger>
        <RadixAccordion.Content className="py-2 overflow-hidden transition-all duration-300 ease-in-out">
          {content}
        </RadixAccordion.Content>
      </RadixAccordion.Item>
    </RadixAccordion.Root>
  );
};
