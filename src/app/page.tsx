// import { AccordionWorst } from "@/bad-examples";
// import { AccordionWorst, AccordionOkish } from "@/bad-examples";
import { AccordionWorst, AccordionOkish, AccordionPass } from "@/bad-examples";
import { Accordion } from "@/modules";

export default function Home() {
  return (
    <main className="grid grid-flow-col justify-stretch p-12 content-start">
      <Accordion
        trigger={<h3>Section 1</h3>}
        content={<p>Content for section 1</p>}
      />
      <AccordionWorst />
      <AccordionOkish />
      <AccordionPass />
    </main>
  );
}
