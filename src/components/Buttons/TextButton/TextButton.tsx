import { Link } from "@radix-ui/themes";

type Props = {
  text: string;
  customStyles?: string;
};

export const TextButton = ({ text, customStyles }: Props) => {
  const baseStyles = "py-2 px-4 focus:outline-none ";
  const primary = " ";
  return (
    <Link
      weight="regular"
      className={`${baseStyles + (customStyles ? customStyles : primary)}`}
    >
      {text}
    </Link>
  );
};
