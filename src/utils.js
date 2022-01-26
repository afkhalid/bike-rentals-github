import { DATE_OPTIONS } from "./constants";

export function getQueryResult(data, query) {
  return data.data[query].items;
}

export function toLocaleDate(date) {
  return new Date(date).toLocaleDateString("en-US", DATE_OPTIONS);
}
