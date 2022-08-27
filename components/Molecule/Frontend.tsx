import React from "react";
import Image from "next/image";
import styled from "styled-components";

export default function Frontend() {
  return (
    <>
      <div>
        <SubTitle>Frontend</SubTitle>
        <WrapFront>
          <div>
            <Image src="/html.png" alt="html" width={100} height={100} />
            <Image src="/css.png" alt="css" width={100} height={100} />
          </div>
          <div>
            <Image src="/js.png" alt="js" width={100} height={100} />
            <Image src="/ts.png" alt="ts" width={100} height={100} />
          </div>
          <div>
            <Image src="/react.png" alt="react" width={100} height={100} />
            <Image src="/redux.png" alt="redux" width={100} height={100} />
          </div>
          <Image
            src="/reactquery.png"
            alt="reactquery"
            width={300}
            height={80}
          />
          <Image src="/recoil.png" alt="recoil" width={300} height={80} />
          <Image src="/nextjs.png" alt="nextjs" width={200} height={70} />
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
