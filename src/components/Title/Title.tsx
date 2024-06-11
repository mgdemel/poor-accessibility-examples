import { Heading } from "@radix-ui/themes";

type Props = {
  text: string;
  customStyles?: string;
};

export const Title = ({ text, customStyles }: Props) => {
  const baseStyles = "m-1 ";
  const primary = " ";
  return (
    <Heading
      as="h1"
      className={`${baseStyles + (customStyles ? customStyles : primary)}`}
    >
      {text}
    </Heading>
  );
};
