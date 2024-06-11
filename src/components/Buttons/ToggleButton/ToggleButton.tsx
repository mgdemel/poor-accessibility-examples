import { IconButton } from "@radix-ui/themes";
import React from "react";

type Props = {
  children: React.ReactNode;
  customStyles?: string;
};

export const ToggleButton = ({ children, customStyles }: Props) => {
  const baseStyles = "m-1 ";
  const primary = " ";
  return (
    <IconButton
      size="3"
      variant="ghost"
      className={`${baseStyles + customStyles ? customStyles : primary}`}
    >
      {children}
    </IconButton>
  );
};
