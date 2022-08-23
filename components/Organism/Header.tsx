import React from "react";
import styled from "styled-components";
import Logo from "../atom/Logo";
import NaviBar from "../Molecule/NaviBar";

export default function Header() {
  return (
    <WrapHeader>
      <div>
        <Logo />
        <NaviBar />
      </div>
    </WrapHeader>
  );
}

const WrapHeader = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #000;
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    width: 100%;
    max-width: 1200px;
  }
`;
