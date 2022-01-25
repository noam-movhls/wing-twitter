import { TweetProps } from "../components/card/Card";

//todo
export function parseJSON<T>(value: string | null): T | undefined {
  try {
    return value === "undefined" ? undefined : JSON.parse(value ?? "");
  } catch (error) {
    console.log("parsing error on", { value });
    return undefined;
  }
}

// todo
export function sortDatesInDesc(a: TweetProps, b: TweetProps) {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
}

export function updateLocalStorage(key: string, val: string) {
  window.localStorage.setItem(key, val);
}
