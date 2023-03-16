import React from "react";
import styled from "styled-components";

interface Props {
  text: string;
}

const Container = styled.h1`
  background-color: green;
`;

const Title = ({ text }: Props) => (
  <Container className="title">{text}</Container>
);

export default Title;
