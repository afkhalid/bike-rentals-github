import React, { Component } from "react";
import { Button, Spinner, Table } from "react-bootstrap";
import { API } from "aws-amplify";
import { listBikes, listReservations, listUsers } from "../graphql/queries";
import { getQueryResult, toLocaleDate } from "../utils";
import { Link } from "react-router-dom";
import { deleteUser } from "../graphql/mutations";

export default class UsersListTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: true,
    };
  }

  async componentDidMount() {
    const apiData = await API.graphql({query: listUsers});
    let users = getQueryResult(apiData, "listUsers");

    const bikesData = await API.graphql({query: listBikes});
    const bikes = getQueryResult(bikesData, "listBikes");

    const reservationData = await API.graphql({query: listReservations});
    const reservations = getQueryResult(reservationData, "listReservations");

    users = users.map(user => {
      const userReservations = reservations
        .filter(reservation => reservation.userReservationsId === user.uuid)
        .map(reservation => {
          return {
            bike: bikes.find(bike => bike.id === reservation.bikeReservationsId),
            ...reservation,
          };
        });

      return {
        ...user,
        reservations: userReservations,
      }
    });

    this.setState({users, loading: false});
  }

  renderUserReservations(user, index) {
    const {reservations} = user;
    return reservations.map(reservation =>
      <tr key={index}>
        <td>{user.username}</td>
        <td>{reservation.bike.model}</td>
        <td>{reservation.bike.color}</td>
        <td>{reservation.bike.location}</td>
        <td>{toLocaleDate(reservation.startDate)}</td>
        <td>{toLocaleDate(reservation.endDate)}</td>
        <td className={reservation.status === "active" ? "available" : "not-available"}>
          {reservation.status}
        </td>
      </tr>
    );
  }

  render() {
    const {users, loading} = this.state;
    const tableData = users.length === 0 ?
      <tr>
        <td colSpan={6}>
          No reservations
        </td>
      </tr> : users.map((user, idx) => this.renderUserReservations(user, idx));

    return (
      <div className="rental-container">
        <h2 className="bikes-reservations-title">Bikes Reservations</h2>
        {loading ? <Spinner className="spinner align-top" animation="border"/> : ""}
        <Table className="mt-2" striped bordered hover>
          <thead>
          <tr>
            <th>Model</th>
            <th>Color</th>
            <th>Location</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Status</th>
          </tr>
          </thead>
          <tbody>
          {tableData}
          </tbody>
        </Table>
      </div>
    );
  }
}
