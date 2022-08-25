import React from "react";
import styled from "styled-components";
import AboutMeCard from "../atom/AboutMeCard";

export default function Contack() {
  return (
    <WrapContent>
      <h3>Contack</h3>
      <div>
        <AboutMeCard
          type="text"
          url="tel.webp"
          head="연락처"
          text="010-7237-4933"
        />
        <AboutMeCard
          type="mail"
          url="email.webp"
          head="이메일"
          text="btae1007@gmail.com"
        />
        <AboutMeCard
          type="link"
          url="insta.webp"
          head="SNS"
          linkUrl="https://www.instagram.com/ylolololo_pth96"
          text="인스타 바로가기"
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
