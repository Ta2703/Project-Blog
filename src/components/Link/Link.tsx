import React, { FC } from "react";
import "./Link.css";


type LinkProps = {
  text: string;
};

const Link: FC<LinkProps> = ({ text }: any) => {
  return <div className="Link">{text}</div>;
};

export default Link;