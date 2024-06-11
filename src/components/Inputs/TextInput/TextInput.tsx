import { TextArea } from "@radix-ui/themes";

type Props = {
  placeholder?: string;
  rows?: number;
  customStyles?: string;
};

export const TextInput = ({ placeholder, rows, customStyles }: Props) => {
  const baseStyles = "m-1 ";
  const primary = " ";
  return (
    <TextArea
      placeholder={placeholder}
      rows={rows || 4}
      className={`${baseStyles + (customStyles ? customStyles : primary)}`}
    />
  );
};
