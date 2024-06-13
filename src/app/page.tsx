import {
  AccordionWorst,
  AccordionOkish,
  AccordionPass,
  RadixAccordion
} from "@/bad-examples";

export default function Home() {
  return (
    <main className="grid grid-flow-col justify-stretch p-12 content-start">
      <RadixAccordion />
      <AccordionWorst />
      <AccordionOkish />
      <AccordionPass />
    </main>
  );
}
