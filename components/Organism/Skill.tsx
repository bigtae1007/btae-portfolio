import React from "react";
import styled from "styled-components";
import Comunnity from "../Molecule/Comunnity";
import Deployment from "../Molecule/Deployment";
import Frontend from "../Molecule/Frontend";

export default function Skill() {
  return (
    <>
      <Title>SKILLS</Title>
      <WrapSkills>
        <Frontend />
        <Deployment />
        <Comunnity />
      </WrapSkills>
    </>
  );
}
const Title = styled.h1`
  text-align: center;
  text-align: center;
  font-weight: 800;
  font-size: 50px;
  margin-bottom: 30px;
`;

const WrapSkills = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 80%;
  max-width: 1200px;
`;
