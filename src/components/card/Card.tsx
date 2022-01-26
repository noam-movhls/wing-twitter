import React from "react";
import { TweetProps } from "../../pages/Feed/types";
import {
  AuthorName,
  CardContainer,
  CardHeader,
  MenuIcon,
  TweetContent,
  TweetDate,
} from "./style";

export interface CardProps extends TweetProps {
  openDeleteModal: () => void;
  updateCurrentTweet: () => void;
}

export default function Card(props: CardProps) {
  const { author, content, date, updateCurrentTweet, openDeleteModal } = props;

  const handleDeleteMenuClick = () => {
    updateCurrentTweet();
    openDeleteModal();
  };

  return (
    <>
      <CardContainer>
        <CardHeader>
          <AuthorName>{author}</AuthorName>
          <MenuIcon fontSize="small" onClick={() => handleDeleteMenuClick()} />
        </CardHeader>
        <TweetContent>{content}</TweetContent>
        <TweetDate>{date.toLocaleString()}</TweetDate>
      </CardContainer>
    </>
  );
}
