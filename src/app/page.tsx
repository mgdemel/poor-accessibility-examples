// import { AccordionWorst } from "@/bad-examples";
// import { AccordionWorst, AccordionOkish } from "@/bad-examples";
import { AccordionWorst, AccordionOkish, AccordionPass } from "@/bad-examples";
import { Paragraph, Title } from "@/components";
import { Accordion } from "@/modules";

export default function Home() {
  return (
    <main className="grid grid-flow-col justify-stretch p-12 content-start">
      <Accordion
        trigger={<Title text="Our services" />}
        content={<Paragraph text="They always come with a smile! :)" />}
      />
      <AccordionWorst />
      <AccordionOkish />
      <AccordionPass />
    </main>
  );
}
