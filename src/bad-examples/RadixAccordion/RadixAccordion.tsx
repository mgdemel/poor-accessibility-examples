import { Accordion } from "@/modules";

export const RadixAccordion = () => {
  return (
    <div>
      <Accordion
        isOpen={true}
        trigger={<h3>Section 1</h3>}
        content={<p>Content for section 1</p>}
      />
      <Accordion
        isOpen={true}
        trigger={<h3>Section 2</h3>}
        content={<p>Content for section 2</p>}
      />
      <Accordion
        isOpen={true}
        trigger={<h3>Section 3</h3>}
        content={<p>Content for section 3</p>}
      />
    </div>
  );
};