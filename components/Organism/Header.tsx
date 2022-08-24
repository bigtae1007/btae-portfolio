import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Logo from "../atom/Logo";
import NaviBar from "../Molecule/NaviBar";

export default function Header() {
  const [scrollState, setScrollState] = useState(false);

  const scrollTop = () => {
    setScrollState(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollTop);
    return () => {
      window.removeEventListener("scroll", scrollTop);
    };
  }, []);
  return (
    <WrapHeader state={scrollState}>
      <div>
        <Logo />
        <NaviBar />
      </div>
    </WrapHeader>
  );
}

const WrapHeader = styled.div<{ state: boolean }>`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${({ state }) => (state ? "white" : "transparent")};
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    width: 100%;
    max-width: 1200px;
  }
`;
