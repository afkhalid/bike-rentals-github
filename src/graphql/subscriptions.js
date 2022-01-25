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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateReservation = /* GraphQL */ `
  subscription OnCreateReservation {
    onCreateReservation {
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
export const onUpdateReservation = /* GraphQL */ `
  subscription OnUpdateReservation {
    onUpdateReservation {
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
export const onDeleteReservation = /* GraphQL */ `
  subscription OnDeleteReservation {
    onDeleteReservation {
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
export const onCreateRating = /* GraphQL */ `
  subscription OnCreateRating {
    onCreateRating {
      rating
      id
      createdAt
      updatedAt
      userRatingsId
      bikeRatingsId
    }
  }
`;
export const onUpdateRating = /* GraphQL */ `
  subscription OnUpdateRating {
    onUpdateRating {
      rating
      id
      createdAt
      updatedAt
      userRatingsId
      bikeRatingsId
    }
  }
`;
export const onDeleteRating = /* GraphQL */ `
  subscription OnDeleteRating {
    onDeleteRating {
      rating
      id
      createdAt
      updatedAt
      userRatingsId
      bikeRatingsId
    }
  }
`;
