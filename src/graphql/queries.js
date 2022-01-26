/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($uuid: ID!) {
    getUser(uuid: $uuid) {
      firstName
      lastName
      email
      uuid
      role
      username
      reservations {
        items {
          startDate
          endDate
          status
          userReservationsId
          bikeReservationsId
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      ratings {
        items {
          rating
          userRatingsId
          bikeRatingsId
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $uuid: ID
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      uuid: $uuid
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        firstName
        lastName
        email
        uuid
        role
        username
        reservations {
          nextToken
        }
        ratings {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBike = /* GraphQL */ `
  query GetBike($id: ID!) {
    getBike(id: $id) {
      model
      color
      location
      reservations {
        items {
          startDate
          endDate
          status
          userReservationsId
          bikeReservationsId
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      ratings {
        items {
          rating
          userRatingsId
          bikeRatingsId
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const listBikes = /* GraphQL */ `
  query ListBikes(
    $filter: ModelBikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        model
        color
        location
        reservations {
          nextToken
        }
        ratings {
          nextToken
        }
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getReservation = /* GraphQL */ `
  query GetReservation($id: ID!) {
    getReservation(id: $id) {
      startDate
      endDate
      status
      userReservationsId
      bikeReservationsId
      id
      createdAt
      updatedAt
    }
  }
`;
export const listReservations = /* GraphQL */ `
  query ListReservations(
    $filter: ModelReservationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReservations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        startDate
        endDate
        status
        userReservationsId
        bikeReservationsId
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRating = /* GraphQL */ `
  query GetRating($id: ID!) {
    getRating(id: $id) {
      rating
      userRatingsId
      bikeRatingsId
      id
      createdAt
      updatedAt
    }
  }
`;
export const listRatings = /* GraphQL */ `
  query ListRatings(
    $filter: ModelRatingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRatings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        rating
        userRatingsId
        bikeRatingsId
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
