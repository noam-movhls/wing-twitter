export interface JSXProps {
  children: JSX.Element[] | JSX.Element | string | false;
}

export type BtnTypes = "primary" | "secondary" | "danger";

export interface TweetProps {
  author: string;
  content: string;
  date: string;
}
