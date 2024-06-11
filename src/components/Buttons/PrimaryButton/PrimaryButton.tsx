import { Button } from "@radix-ui/themes";

type Props = {
  text: string;
  customStyles?: string;
};

export const PrimaryButton = ({ text, customStyles }: Props) => {
  const baseStyles =
    "py-2 px-4 rounded font-medium text-white focus:outline-none ";
  const primary = " ";
  return (
    <Button
      variant="solid"
      className={`${baseStyles + (customStyles ? customStyles : primary)}`}
    >
      {text}
    </Button>
  );
};
