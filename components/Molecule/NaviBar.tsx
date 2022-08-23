import React from "react";
import styled from "styled-components";

export default function NaviBar() {
  return (
    <NaviUl>
      <li>About Me</li>
      <li>Archiving</li>
      <li>Skills</li>
      <li>Projects</li>
      <li>Career</li>
      <li>Education</li>
    </NaviUl>
  );
}

const NaviUl = styled.ul`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  list-style: none;
  font-size: 20px;
  font-weight: 600;
  > li {
    padding: 10px;
    cursor: pointer;
    :hover {
      color: #00f;
    }
  }
`;
