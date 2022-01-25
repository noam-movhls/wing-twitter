import React from "react";
import { AuthorName, CardContainer, TweetContent, TweetDate } from "./style";

export interface CardProps {
  author: string;
  content: string;
  date: Date;
}

export default function Card(props: CardProps) {
  return (
    <CardContainer>
      <AuthorName>{props.author}</AuthorName>
      <TweetContent>{props.content}</TweetContent>
      <TweetDate>{props.date.toLocaleString()}</TweetDate>
    </CardContainer>
  );
}
