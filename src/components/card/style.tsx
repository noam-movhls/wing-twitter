import styled from "styled-components";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { appFont, gray, strongGray } from "../../globalStyle";

export const CardContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  font-family: ${appFont};
  font-size: 12px;
  line-height: 16px;
  border-top: 1px solid ${gray};
  border-bottom: 1px solid ${gray};
  border-radius: 5px;
  padding: 16px;
  box-sizing: border-box;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  color: ${strongGray};
  padding: 4px 0;
`;

export const MenuIcon = styled(MoreHorizIcon)`
  cursor: pointer;
`;
