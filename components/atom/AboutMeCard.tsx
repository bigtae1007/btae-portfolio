import { off } from "process";
import React from "react";
import styled from "styled-components";

interface card {
  type: string;
  url: string;
  head: string;
  text: string;
  linkUrl?: string;
}

export default function AboutMeCard(props: card) {
  const newTapLink = (e: React.MouseEvent<HTMLElement>) => {
    const eventTarget = e.target as HTMLElement;
    window.open(eventTarget.innerText);
  };

  return (
    <WrapCard>
      <img src={props.url} alt="아이콘" width={50} height={50} />
      <div>
        <h3>{props.head}</h3>

        {props.type === "link" ? (
          <LinkUrl onClick={newTapLink}>{props.text}</LinkUrl>
        ) : props.type === "mail" ? (
          <a href="mailto:btae1007@gmail.com">{props.text}</a>
        ) : (
          <p>{props.text}</p>
        )}
      </div>
    </WrapCard>
  );
}

const WrapCard = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  > div {
    > h3 {
      font-weight: 600;
      font-size: 30px;
      margin-bottom: 10px;
    }
    > p,
    a {
      margin-left: 5px;
      font-size: 20px;
    }
    > a {
      :hover {
        color: blue;
      }
    }
  }
`;
const LinkUrl = styled.p`
  &:hover {
    cursor: pointer;
    color: blue;
  }
`;
