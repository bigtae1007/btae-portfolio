import React from "react";
import styled from "styled-components";
import AboutMeCard from "../atom/AboutMeCard";

export default function Archiving() {
  return (
    <WrapContent>
      <h3>Archiving</h3>
      <div>
        <AboutMeCard
          type="link"
          url="github.webp"
          head="GitHub"
          linkUrl="https://github.com/bigtae1007"
          text="깃헙 바로가기"
        />
        <AboutMeCard
          type="link"
          url="tistory.webp"
          head="Tistory"
          linkUrl="https://bigtae1007.tistory.com"
          text="블로그 바로가기"
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
