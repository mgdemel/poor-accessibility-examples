import { Text } from "@radix-ui/themes";

type Props = {
  text: string;
  customStyles?: string;
};

export const Paragraph = ({ text, customStyles }: Props) => {
  const baseStyles = "m-1 ";
  const primary = " ";
  return (
    <Text
      as="p"
      className={`${baseStyles + (customStyles ? customStyles : primary)}`}
    >
      {text}
    </Text>
  );
};
