import React from "react";
import styled from "styled-components";
import IntroText from "../Molecule/IntroText";

export default function Intro() {
  return (
    <WrapIntro>
      <BackgroundImg />
      <IntroText />
    </WrapIntro>
  );
}

const WrapIntro = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 500px;
  max-height: 800px;
  height: 40vw;
`;

const BackgroundImg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  z-index: -1;
  background-image: url(https://png.pngtree.com/thumb_back/fw800/background/20210326/pngtree-computer-desktop-background-map-image_590916.jpg);
  background-repeat: no-repeat;
  background-size: cover;
`;
