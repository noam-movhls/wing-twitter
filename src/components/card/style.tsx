import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  font-family: "Helvetica Neue", Roboto, "Segoe UI", Calibri, sans-serif;
  font-size: 12px;
  line-height: 16px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  border-radius: 5px;
  padding: 16px;
  box-sizing: border-box;
`;

export const AuthorName = styled.div`
  font-weight: bold;
  font-weight: bold;
  padding: 8px 0;
`;

export const TweetContent = styled.div`
  font-size: 16px;
  padding: 8px 0;
`;

export const TweetDate = styled.div`
  font-size: 12px;
  color: #bbb;
  padding: 4px 0;
`;
