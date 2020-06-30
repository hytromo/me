import React from "react";
import Linkify from "react-linkify";

interface OwnPropsI {
  children: string;
}

const componentDecorator = (href: string, text: string, key: any) => (
  <a href={href} key={key} target="_blank" rel="noopener noreferrer">
    {text}
  </a>
);

export const LinkifyText = ({ children }: OwnPropsI) => {
  return <Linkify componentDecorator={componentDecorator}>{children}</Linkify>;
};
