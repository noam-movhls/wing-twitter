import styled from "styled-components";
import { mobile } from "../../globalStyle";

export const FeedPage = styled.div`
  width: 50%;
  height: 100vh;
  padding-top: 16px;
  margin: auto;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: ${mobile}) {
    width: 95%;
  }
`;

export const FeedList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
