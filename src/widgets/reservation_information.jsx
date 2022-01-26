import React, { Component } from "react";
import DatePicker from "react-datepicker";
import { Button, Form, Spinner } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import { API } from "aws-amplify";
import { createReservation, updateReservation } from "../graphql/mutations";

export default class ReservationInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      endDate: new Date(),
      loading: false,
    }
  }

  handleDateChange(fieldName, date) {
    this.setState({[fieldName]: date});
  }

  async handleConfirmReservation() {
    const {bikeId, userId} = this.props;
    const {startDate, endDate} = this.state;

    this.setState({loading: true}, async() => {
      const result = await API.graphql({
        query: createReservation,
        variables: {
          input: {
            startDate: new Date(startDate).toISOString(),
            endDate: new Date(endDate).toISOString(),
            status: "active",
            bikeReservationsId: bikeId,
            userReservationsId: userId,
          }
        }
      });
      this.setState({reservation: result.data.createReservation, loading: false});
    });
  }

  handleCancelReservation() {
    const reservation = this.state.reservation || this.props.reservation;
    this.setState({loading: true}, async() => {
      await API.graphql({
        query: updateReservation,
        variables: {
          input: {
            id: reservation.id,
            startDate: reservation.startDate,
            endDate: reservation.endDate,
            status: "cancelled",
            bikeReservationsId: reservation.bikeReservationsId,
            userReservationsId: reservation.userReservationsId,
          }
        }
      });
      window.location.href = "/";
      this.setState({loading: false});
    });
  }

  render() {
    const {startDate, endDate, loading, reservation} = this.state;
    const currentUserReservation = this.props.reservation;

    return (
      <div className="rental-container">
        <h4>Reservation Information</h4>
        <div className="date-picker-div">
          <Form.Label>Start Date</Form.Label>
          <DatePicker onChange={this.handleDateChange.bind(this, "startDate")}
                      minDate={new Date()}
                      selected={currentUserReservation ? new Date(currentUserReservation.startDate) : startDate}
                      disabled={!!reservation || !!currentUserReservation}
                      dateFormat="yyyy-MM-dd"
          />
        </div>
        <div className="date-picker-div">
          <Form.Label>End Date</Form.Label>
          <DatePicker onChange={this.handleDateChange.bind(this, "endDate")}
                      minDate={endDate.setDate(startDate.getDate() + 1)}
                      selected={currentUserReservation ? new Date(currentUserReservation.endDate) :
                        endDate < startDate ? endDate.setDate(startDate.getDate() + 1) : endDate}
                      disabled={!!reservation || !!currentUserReservation}
                      dateFormat="yyyy-MM-dd"
          />
        </div>
        <div className="link-button d-inline-block">
          {reservation || currentUserReservation ?
            <Button size="sm"
                    className="rental-confirm-button"
                    onClick={this.handleCancelReservation.bind(this)}
                    variant="danger"
            >
              Cancel Reservation
            </Button> :
            <Button size="sm"
                    className="rental-confirm-button"
                    onClick={this.handleConfirmReservation.bind(this)}
                    variant="primary"
            >
              Confirm
            </Button>}
          {loading ?
            <Spinner size="sm"
                     className="spinner"
                     animation="border"
            /> : ""}
        </div>
      </div>
    );
  }
}
