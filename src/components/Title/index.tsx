import React from "react";

interface Props {
  text: string;
}

const Title = ({ text }: Props) => <h1>{text}</h1>;

export default Title;
