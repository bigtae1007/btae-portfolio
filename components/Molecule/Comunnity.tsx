import React from "react";
import Image from "next/image";
import styled from "styled-components";

export default function Comunnity() {
  return (
    <>
      <div>
        <SubTitle>Communication</SubTitle>
        <WrapFront>
          <Image src="/github.png" alt="js" width={300} height={80} />
          <Image src="/notion.png" alt="js" width={300} height={80} />
          <Image src="/figma.png" alt="js" width={300} height={80} />
        </WrapFront>
      </div>
    </>
  );
}

const SubTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 30px;
`;

const WrapFront = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px;
  > div {
    display: flex;
    gap: 50px;
  }
`;
