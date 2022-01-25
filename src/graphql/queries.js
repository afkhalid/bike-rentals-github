/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      firstName
      lastName
      email
      uuid
      role
      username
      bikes {
        items {
          id
          model
          color
          location
          createdAt
          updatedAt
          userBikesId
        }
        nextToken
      }
      reservations {
        items {
          id
          startDate
          endDate
          createdAt
          updatedAt
          userReservationsId
          bikeReservationsId
        }
        nextToken
      }
      ratings {
        items {
          id
          rating
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
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
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
      id
      model
      color
      location
      reservations {
        items {
          id
          startDate
          endDate
          createdAt
          updatedAt
          userReservationsId
          bikeReservationsId
        }
        nextToken
      }
      ratings {
        items {
          id
          rating
          createdAt
          updatedAt
          userRatingsId
          bikeRatingsId
        }
        nextToken
      }
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
        id
        model
        color
        location
        reservations {
          nextToken
        }
        ratings {
          nextToken
        }
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
      id
      startDate
      endDate
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
        id
        startDate
        endDate
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
      id
      rating
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
        id
        rating
        createdAt
        updatedAt
        userRatingsId
        bikeRatingsId
      }
      nextToken
    }
  }
`;
