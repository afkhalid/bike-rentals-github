/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateBike = /* GraphQL */ `
  subscription OnCreateBike {
    onCreateBike {
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
export const onUpdateBike = /* GraphQL */ `
  subscription OnUpdateBike {
    onUpdateBike {
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
export const onDeleteBike = /* GraphQL */ `
  subscription OnDeleteBike {
    onDeleteBike {
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
export const onCreateReservation = /* GraphQL */ `
  subscription OnCreateReservation {
    onCreateReservation {
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
export const onUpdateReservation = /* GraphQL */ `
  subscription OnUpdateReservation {
    onUpdateReservation {
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
export const onDeleteReservation = /* GraphQL */ `
  subscription OnDeleteReservation {
    onDeleteReservation {
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
export const onCreateRating = /* GraphQL */ `
  subscription OnCreateRating {
    onCreateRating {
      rating
      userRatingsId
      bikeRatingsId
      id
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateRating = /* GraphQL */ `
  subscription OnUpdateRating {
    onUpdateRating {
      rating
      userRatingsId
      bikeRatingsId
      id
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteRating = /* GraphQL */ `
  subscription OnDeleteRating {
    onDeleteRating {
      rating
      userRatingsId
      bikeRatingsId
      id
      createdAt
      updatedAt
    }
  }
`;
