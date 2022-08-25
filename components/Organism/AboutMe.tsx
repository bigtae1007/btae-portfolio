import React from "react";
import styled from "styled-components";
import Archiving from "../Molecule/Archiving";
import Contack from "../Molecule/Contack";
import Info from "../Molecule/Info";

export const AboutMe = () => {
  return (
    <WrapText>
      <h2>ABOUT ME</h2>
      <div>
        <Info />
        <Contack />
        <Archiving />
      </div>
    </WrapText>
  );
};

const WrapText = styled.div`
  padding: 20px 20px 60px;
  width: 60%;
  max-width: 1600px;
  margin: 0 auto;
  h2 {
    text-align: center;
    font-weight: 800;
    font-size: 50px;
    margin-bottom: 30px;
  }
  > div {
    display: flex;
    justify-content: space-between;
  }
  /* > div {
    display: flex;
    > div {
      width: 33%;
    }
  }
  > h2 {
    font-weight: 800;
    font-size: 50px;
    margin-bottom: 30px;
  }
  > h3 {
    font-weight: 700;
    font-size: 30px;
    margin: 20px 0;
  } */
`;
