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
      bikes {
        items {
          model
          color
          location
          id
          createdAt
          updatedAt
          userBikesId
        }
        nextToken
      }
      reservations {
        items {
          startDate
          endDate
          id
          createdAt
          updatedAt
          userReservationsId
          bikeReservationsId
        }
        nextToken
      }
      ratings {
        items {
          rating
          id
          createdAt
          updatedAt
          userRatingsId
          bikeRatingsId
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
        bikes {
          nextToken
        }
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
          id
          createdAt
          updatedAt
          userReservationsId
          bikeReservationsId
        }
        nextToken
      }
      ratings {
        items {
          rating
          id
          createdAt
          updatedAt
          userRatingsId
          bikeRatingsId
        }
        nextToken
      }
      id
      createdAt
      updatedAt
      userBikesId
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
        userBikesId
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
      id
      createdAt
      updatedAt
      userReservationsId
      bikeReservationsId
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
        id
        createdAt
        updatedAt
        userReservationsId
        bikeReservationsId
      }
      nextToken
    }
  }
`;
export const getRating = /* GraphQL */ `
  query GetRating($id: ID!) {
    getRating(id: $id) {
      rating
      id
      createdAt
      updatedAt
      userRatingsId
      bikeRatingsId
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
        id
        createdAt
        updatedAt
        userRatingsId
        bikeRatingsId
      }
      nextToken
    }
  }
`;
