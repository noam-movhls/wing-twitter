import React, { useEffect, useRef, useState } from "react";
import Card from "../../components/card/Card";
import {
  formatDate,
  parseJSON,
  sortDatesInDesc,
  updateLocalStorage,
} from "../utils";
import DeleteTweet from "./components/DeleteTweet/DeleteTweet";
import NewTweet from "./components/NewTweet/NewTweet";
import Welcome from "./components/Welcome/Welcome";
import { FeedList, FeedPage } from "./style";
import { TweetProps } from "./types";

export default function Feed() {
  const [data, setData] = useState<TweetProps[]>([]);
  const [modalMode, setModalMode] = useState(false);
  const [currentTweetIdx, setCurrentTweetIdx] = useState<number | null>(null);
  const inputRef = useRef<any>(null);
  useEffect(() => {
    const localData = window.localStorage.getItem("data");
    const parseData = localData ? (parseJSON(localData) as TweetProps[]) : [];
    setData(parseData);
  }, []);

  const handleSubmitNewTweet = (newTweet: string) => {
    const updatedData = [
      ...data,
      {
        author: "Noam Domovich",
        content: newTweet,
        date: new Date().toISOString(),
      },
    ];
    setData(updatedData);
    updateLocalStorage("data", JSON.stringify(updatedData));
  };

  const handleCloseModal = () => {
    setModalMode(false);
  };

  const handleOpenModal = () => {
    setModalMode(true);
  };

  const handleDeleteTweet = () => {
    const updatedData = data
      .sort((a, b) => {
        return sortDatesInDesc(a, b);
      })
      .filter((item, i) => i !== currentTweetIdx);
    setData(updatedData);
    updateLocalStorage("data", JSON.stringify(updatedData));
    handleCloseModal();
  };

  return (
    <FeedPage>
      <NewTweet submitTweet={handleSubmitNewTweet} inputRef={inputRef} />
      <FeedList>
        {data?.length > 0 ? (
          data
            .sort((a, b) => {
              return sortDatesInDesc(a, b);
            })
            .map((item, i) => (
              <Card
                key={i}
                author={item.author}
                content={item.content}
                date={formatDate(item.date, "h:mm a · MMM d, yyyy")}
                openDeleteModal={handleOpenModal}
                updateCurrentTweet={() => setCurrentTweetIdx(i)}
              />
            ))
        ) : (
          <Welcome inputRef={inputRef} />
        )}
      </FeedList>
      <DeleteTweet
        modalMode={modalMode}
        closeModalFunc={handleCloseModal}
        deleteModalFunc={handleDeleteTweet}
      />
    </FeedPage>
  );
}
