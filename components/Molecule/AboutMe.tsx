import React from "react";
import styled from "styled-components";
import AboutMeCard from "../atom/AboutMeCard";

//https://www.instagram.com/ylolololo_pth96/
export const AboutMe = () => {
  return (
    <WrapText>
      <h2>ABOUT ME</h2>
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
          text="https://www.instagram.com/ylolololo_pth96"
        />
      </div>
    </WrapText>
  );
};

const WrapText = styled.div`
  padding: 20px 20px 60px;
  width: 90%;
  max-width: 1600px;
  margin: 0 auto;
  > div {
    display: flex;
    > div {
      width: 100%;
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
  }
`;
