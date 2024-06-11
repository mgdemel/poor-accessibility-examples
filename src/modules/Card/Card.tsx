import {
  Paragraph,
  PrimaryButton,
  TextInput,
  Title,
  ToggleButton
} from "@/components";
import {
  ArrowBottomRightIcon,
  ArrowDownIcon,
  ArrowTopLeftIcon,
  ArrowUpIcon
} from "@radix-ui/react-icons";
import { Card } from "@radix-ui/themes";

export const ContentCard = () => {
  return (
    <Card variant="classic" className="w-96 p-10">
      <Title text="Card title" customStyles="font-bold" />
      <Paragraph text="Test 2" customStyles="mt-2" />
      <div>
        <ToggleButton>
          <ArrowUpIcon />
        </ToggleButton>
        <ToggleButton>
          <ArrowTopLeftIcon />
        </ToggleButton>
        <ToggleButton>
          <ArrowBottomRightIcon />
        </ToggleButton>
        <ToggleButton>
          <ArrowDownIcon />
        </ToggleButton>
      </div>
      <div className="p-4">
        <TextInput placeholder="tell us a bit more..." />
      </div>
      <div className="flex flex-row p-4">
        <div>
          <PrimaryButton text="submit" />
        </div>
      </div>
    </Card>
  );
};
