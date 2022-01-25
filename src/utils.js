"use strict";

export function getQueryResult(data, query) {
  return data.data[query].items;
}
