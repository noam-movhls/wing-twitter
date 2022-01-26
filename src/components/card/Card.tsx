import React from "react";
import {
  AuthorName,
  CardContainer,
  CardHeader,
  MenuIcon,
  TweetContent,
  TweetDate,
} from "./style";

export interface TweetProps {
  author: string;
  content: string;
  date: string;
}

export interface CardProps extends TweetProps {
  openDeleteModal: () => void;
  updateCurrentTweet: () => void;
}

export default function Card(props: CardProps) {
  const handleDeleteMenuClick = () => {
    props.updateCurrentTweet();
    props.openDeleteModal();
  };

  return (
    <>
      <CardContainer>
        <CardHeader>
          <AuthorName>{props.author}</AuthorName>
          <MenuIcon fontSize="small" onClick={() => handleDeleteMenuClick()} />
        </CardHeader>
        <TweetContent>{props.content}</TweetContent>
        <TweetDate>{props.date.toLocaleString()}</TweetDate>
      </CardContainer>
    </>
  );
}
