import { Paragraph, Title } from "@/components";
import { Accordion} from "@/modules";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 w-full">
      <div className="my-12 w-full">
        <Accordion
          trigger={<Title text="Our services" />}
          content={<Paragraph text="They always come with a smile! :)" />}
        />
      </div>
    </main>
  );
}
