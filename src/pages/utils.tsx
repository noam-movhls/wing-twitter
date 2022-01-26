import { format } from "date-fns";
import { TweetProps } from "../components/card/Card";

export function parseJSON<T>(value: string | null): T | undefined {
  try {
    return value === "undefined" ? undefined : JSON.parse(value ?? "");
  } catch (error) {
    console.error("parsing error on", { value });
    return undefined;
  }
}

export function sortDatesInDesc(a: TweetProps, b: TweetProps) {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
}

export function updateLocalStorage(key: string, val: string) {
  window.localStorage.setItem(key, val);
}

export const formatDate = (date: string, dateFormat: string) => {
  return format(new Date(date), dateFormat);
};
