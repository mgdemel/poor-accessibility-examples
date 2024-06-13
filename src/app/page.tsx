import {
  AccordionWorst,
  AccordionOkish,
  AccordionPass,
  RadixAccordion
} from "@/bad-examples";

export default function Home() {
  return (
    <main className="grid grid-flow-col justify-stretch p-12 content-start">
      <div>
      <h2 className="pb-2">Accordion example 1</h2>
      <AccordionWorst />
      </div>
      <div>
      <h2 className="pb-2">Accordion example 2</h2>
      <AccordionOkish />
      </div>
      <div>
      <h2 className="pb-2">Accordion example 2</h2>
      <AccordionPass />
      </div>

      <div>
        <h2 className="pb-2">Radix Accordion example</h2>
      <RadixAccordion />
      </div>
    </main>
  );
}
