/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateBike = /* GraphQL */ `
  subscription OnCreateBike {
    onCreateBike {
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
export const onUpdateBike = /* GraphQL */ `
  subscription OnUpdateBike {
    onUpdateBike {
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
export const onDeleteBike = /* GraphQL */ `
  subscription OnDeleteBike {
    onDeleteBike {
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
export const onCreateReservation = /* GraphQL */ `
  subscription OnCreateReservation {
    onCreateReservation {
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
export const onUpdateReservation = /* GraphQL */ `
  subscription OnUpdateReservation {
    onUpdateReservation {
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
export const onDeleteReservation = /* GraphQL */ `
  subscription OnDeleteReservation {
    onDeleteReservation {
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
export const onCreateRating = /* GraphQL */ `
  subscription OnCreateRating {
    onCreateRating {
      id
      rating
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
      id
      rating
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
      id
      rating
      createdAt
      updatedAt
      userRatingsId
      bikeRatingsId
    }
  }
`;
