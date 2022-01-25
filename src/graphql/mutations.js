/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createBike = /* GraphQL */ `
  mutation CreateBike(
    $input: CreateBikeInput!
    $condition: ModelBikeConditionInput
  ) {
    createBike(input: $input, condition: $condition) {
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
export const updateBike = /* GraphQL */ `
  mutation UpdateBike(
    $input: UpdateBikeInput!
    $condition: ModelBikeConditionInput
  ) {
    updateBike(input: $input, condition: $condition) {
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
export const deleteBike = /* GraphQL */ `
  mutation DeleteBike(
    $input: DeleteBikeInput!
    $condition: ModelBikeConditionInput
  ) {
    deleteBike(input: $input, condition: $condition) {
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
export const createReservation = /* GraphQL */ `
  mutation CreateReservation(
    $input: CreateReservationInput!
    $condition: ModelReservationConditionInput
  ) {
    createReservation(input: $input, condition: $condition) {
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
export const updateReservation = /* GraphQL */ `
  mutation UpdateReservation(
    $input: UpdateReservationInput!
    $condition: ModelReservationConditionInput
  ) {
    updateReservation(input: $input, condition: $condition) {
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
export const deleteReservation = /* GraphQL */ `
  mutation DeleteReservation(
    $input: DeleteReservationInput!
    $condition: ModelReservationConditionInput
  ) {
    deleteReservation(input: $input, condition: $condition) {
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
export const createRating = /* GraphQL */ `
  mutation CreateRating(
    $input: CreateRatingInput!
    $condition: ModelRatingConditionInput
  ) {
    createRating(input: $input, condition: $condition) {
      rating
      id
      createdAt
      updatedAt
      userRatingsId
      bikeRatingsId
    }
  }
`;
export const updateRating = /* GraphQL */ `
  mutation UpdateRating(
    $input: UpdateRatingInput!
    $condition: ModelRatingConditionInput
  ) {
    updateRating(input: $input, condition: $condition) {
      rating
      id
      createdAt
      updatedAt
      userRatingsId
      bikeRatingsId
    }
  }
`;
export const deleteRating = /* GraphQL */ `
  mutation DeleteRating(
    $input: DeleteRatingInput!
    $condition: ModelRatingConditionInput
  ) {
    deleteRating(input: $input, condition: $condition) {
      rating
      id
      createdAt
      updatedAt
      userRatingsId
      bikeRatingsId
    }
  }
`;
