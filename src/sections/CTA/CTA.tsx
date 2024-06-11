import { Paragraph, PrimaryButton, Title } from "@/components";

export const CTA = () => {
  return (
    <section className="p-10 w-full">
      <div className="mx-auto flex-col flex items-center justify-center gap-1">
        <Title text="CTA title" />
        <Paragraph text="CTA paragraph" />
        <PrimaryButton text="CTA button" />
      </div>
    </section>
  );
};
