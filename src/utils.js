import { DATE_OPTIONS } from "./constants";

export function getQueryResult(data, query) {
  return data.data[query].items;
}

export function toLocaleDate(date) {
  return new Date(date).toLocaleDateString("en-US", DATE_OPTIONS);
}

export function filterBikes(filterOptions, bikes) {

  bikes = filterBy(bikes, filterOptions, "model");
  bikes = filterBy(bikes, filterOptions, "location");
  bikes = filterBy(bikes, filterOptions, "color");

  if (filterOptions.rating) {
    bikes = bikes.filter(bike => parseFloat(bike.rating) === parseFloat(filterOptions.rating));
  }

  if (filterOptions.date) {
    bikes = bikes.filter(bike => {
      const hasNoReservation = bike.reservation.length === 0;
      return hasNoReservation ||
        (!hasNoReservation && !bike.reservation[0].status) ||
        (!hasNoReservation && bike.reservation[0].status === "active" &&
          new Date(bike.reservation[0].endDate) < new Date(filterOptions.date));
    });
  }

  return bikes;
}

function filterBy(records, filterOptions, prop) {
  if (filterOptions[prop]) {
    return records.filter(record => record[prop].toLowerCase().includes(filterOptions[prop].toLowerCase()));
  }
  return records;
}
