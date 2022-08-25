import React from "react";
import styled from "styled-components";
import AboutMeCard from "../atom/AboutMeCard";

export default function Info() {
  return (
    <WrapContent>
      <h3>Info</h3>
      <div>
        <AboutMeCard type="text" url="name.webp" head="이름" text="박태형" />
        <AboutMeCard
          type="text"
          url="birth.webp"
          head="생년월일"
          text="96.10.07"
        />
        <AboutMeCard
          type="text"
          url="education.webp"
          head="학력"
          text="용인대학교(체육학과)"
        />
      </div>
    </WrapContent>
  );
}
const WrapContent = styled.div`
  border: 1px solid #000;
  padding: 20px;

  > h3 {
    margin-bottom: 30px;
    text-align: center;
    font-weight: 700;
    font-size: 30px;
  }
  > div {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;
