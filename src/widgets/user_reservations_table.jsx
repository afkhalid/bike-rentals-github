import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { toLocaleDate } from "../utils";

export default class UserReservationsTable extends Component {

  renderUserReservations(reservation, index) {
    return (
      <tr key={index}>
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
    const {user} = this.props;
    const {reservations} = user;
    const tableData = reservations.length === 0 ?
      <tr>
        <td colSpan={6}>
          No bikes reserved by {user.username}
        </td>
      </tr> : reservations
        .map((reservation, idx) => this.renderUserReservations(reservation, idx));

    return (
      <div className="rental-container">
        <h2>Bikes Reservations</h2>
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
