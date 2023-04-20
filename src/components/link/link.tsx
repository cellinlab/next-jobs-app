import React, { ReactNode } from "react";
import NextLink from "next/link";
import { Button } from "@chakra-ui/react";

const variants = {
  link: {
    variant: "link",
    color: "primary",
  },
  solid: {
    variant: "solid",
    bg: "primary",
    color: "primaryAccent",
    _hover: {
      opacity: "0.8",
    },
  },
  outline: {
    variant: "outline",
    bg: "white",
    color: "primary",
  },
};

export type LinkProps = {
  variant?: keyof typeof variants;
  children: ReactNode;
  href: string;
  icon?: JSX.Element;
  shallow?: boolean;
};

export const Link = ({ href, children, variant = "link", icon, shallow = false }: LinkProps) => {
  return (
    <NextLink shallow={shallow} href={href} passHref>
      <Button leftIcon={icon} as={undefined} {...variants[variant]}>
        {children}
      </Button>
    </NextLink>
  );
};
