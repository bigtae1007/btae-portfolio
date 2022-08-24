import React from "react";
import styled from "styled-components";

export default function IntroText() {
  // 개발자 경력 계산
  const nowDate = new Date();
  const careerDate = nowDate.getFullYear() - 2021;

  return (
    <WrapText>
      <h1>
        <span>로켓처럼 성장하는</span> 개발자 <br /> 박태형의 포트폴리오
      </h1>
      <ul>
        <li>
          안녕하세요. <span>{careerDate}</span> 년차 개발자 박태형입니다.
        </li>
        <li>계속해서 도전하고 배우는 것을 즐기고있습니다.</li>
        <li>배움에 적극성, 끈기, 소통, 체력에 자신 있습니다.</li>
      </ul>
    </WrapText>
  );
}

const WrapText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 90%;
  max-width: 1600px;
  > h1 {
    text-align: center;
    line-height: 90px;
    font-size: 60px;
    > span {
      color: #f33;
    }
  }
  > ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
    list-style: none;
    font-size: 30px;
    font-weight: 600;
    > li:first-child {
      font-size: 35px;
      margin-bottom: 10px;
    }
  }
`;
