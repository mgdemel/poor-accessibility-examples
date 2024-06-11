"use client";
import React from "react";
import * as RadixAccordion from "@radix-ui/react-accordion";
import { IconButton, ChevronDownIcon } from "@radix-ui/themes";

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
        <RadixAccordion.Header className="py-2">
          <RadixAccordion.Trigger className="flex">
            <IconButton className="mr-2">
              <ChevronDownIcon aria-hidden />
            </IconButton>
            {trigger}
          </RadixAccordion.Trigger>
        </RadixAccordion.Header>
        <RadixAccordion.Content className="py-2 overflow-hidden transition-all duration-300 ease-in-out">
          {content}
        </RadixAccordion.Content>
      </RadixAccordion.Item>
    </RadixAccordion.Root>
  );
};
