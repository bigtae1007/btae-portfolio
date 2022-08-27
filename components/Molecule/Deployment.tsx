import React from "react";
import Image from "next/image";
import styled from "styled-components";

export default function Deployment() {
  return (
    <div>
      <SubTitle>Deployment</SubTitle>
      <WrapDeploy>
        <div>
          <Image src="/s3.png" alt="js" width={100} height={100} />
          <Image src="/route53.png" alt="js" width={100} height={100} />
        </div>
        <div>
          <Image src="/cloudfront.png" alt="js" width={100} height={100} />
        </div>
        <Image src="/vercel.png" alt="js" width={300} height={70} />
      </WrapDeploy>
    </div>
  );
}
const SubTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 30px;
`;
const WrapDeploy = styled.div`
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
