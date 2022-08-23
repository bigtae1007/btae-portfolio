import React from "react";
import styled from "styled-components";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <LogoText>Btae-Portfolio</LogoText>
    </Link>
  );
}

const LogoText = styled.div`
  font-size: 35px;
  font-weight: 600;
  cursor: pointer;
  :hover {
    color: skyblue;
  }
`;
