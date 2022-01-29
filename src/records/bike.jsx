import React, { Component } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { API } from "aws-amplify";
import { createBike, createRating, updateBike, updateRating } from "../graphql/mutations";
import ReactStars from "react-rating-stars-component";
import ReservationInformation from "../widgets/reservation_information";
import { COLORS, LOCATIONS, MODELS } from "../constants";

export default class Bike extends Component {
  constructor(props) {
    super(props);
    const {state} = props.location;
    this.operation = state.operation;
    this.bike = state.bike;
    this.userId = state.userId;
    this.state = this.operation === "edit" ? {
      model: this.bike.model,
      color: this.bike.color,
      location: this.bike.location,
      loading: false,
      shouldShowRentalInfo: false,
    } : {
      model: "",
      color: "",
      location: "",
      rating: state.rating,
      loading: false,
      shouldShowRentalInfo: false,
    };
  }

  onTextChange(fieldName, e) {
    const text = e.target.value;
    this.setState({[fieldName]: text});
  }

  async addOrEditBike(e) {
    e.preventDefault();

    this.setState({loading: true}, async() => {
      const {model, color, location} = this.state;
      if (this.operation === "add") {
        await API.graphql({
          query: createBike,
          variables: {input: {model, color, location}}
        });
      } else if (this.operation === "edit") {
        await API.graphql({
          query: updateBike,
          variables: {input: {id: this.bike.id, model, color, location}}
        });
      }
      window.location.href = "/";
      this.setState({loading: false});
    });
  }

  getButtonText() {
    switch (this.operation) {
      case "edit":
        return "Update";
      case "add":
        return "Add";
    }
  }

  async handleRatingChanged(ratingScore) {
    this.setState({loading: true}, async() => {
      const {rating} = this.state;
      if (rating) {
        await API.graphql({
          query: updateRating,
          variables: {
            input: {
              id: rating.id,
              rating: ratingScore,
              bikeRatingsId: this.bike.id,
              userRatingsId: this.userId
            }
          }
        });
      } else {
        const result = await API.graphql({
          query: createRating,
          variables: {
            input: {
              rating: ratingScore,
              bikeRatingsId: this.bike.id,
              userRatingsId: this.userId
            }
          }
        });
        this.setState({rating: result.data.createRating});
      }
      this.setState({loading: false});
    });
  }

  handleFillWithRandomData() {
    const index = Math.floor(Math.random() * 61);
    const model = MODELS[index];
    const color = COLORS[index];
    const location = LOCATIONS[index].name;
    this.setState({model, color, location});
  }

  render() {
    const {rating, loading, shouldShowRentalInfo} = this.state;
    const {model, color, location} = this.state;
    const isAvailable = this.bike?.reservation?.length === 0;
    const isCurrentUserReservation = !isAvailable &&
      this.bike?.reservation[0]?.userReservationsId === this.userId;

    return (
      <div className="rental-container ">
        <h2>Bike Information</h2>
        <Form onSubmit={this.addOrEditBike.bind(this)}>
          <Form.Group className="mb-3">
            <Form.Label>Model</Form.Label>
            <Form.Control required
                          type="text"
                          disabled={this.operation === "view"}
                          defaultValue={this.operation === "add" ? model : this.bike.model}
                          onChange={this.onTextChange.bind(this, "model")}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Color</Form.Label>
            <Form.Control required
                          type="text"
                          disabled={this.operation === "view"}
                          defaultValue={this.operation === "add" ? color : this.bike.color}
                          onChange={this.onTextChange.bind(this, "color")}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Location</Form.Label>
            <Form.Control required
                          type="text"
                          disabled={this.operation === "view"}
                          defaultValue={this.operation === "add" ? location : this.bike.location}
                          onChange={this.onTextChange.bind(this, "location")}
            />
          </Form.Group>
          {this.operation === "view" ?
            <Form.Group className="mb-3">
              <Form.Label>Rate</Form.Label>
              <ReactStars count={5}
                          value={rating?.rating}
                          onChange={this.handleRatingChanged.bind(this)}
                          size={24}
                          activeColor="#ffd700"
              />
            </Form.Group> : ""}
          {this.operation !== "view" ?
            <Button variant="primary"
                    type="submit"
            >
              {this.getButtonText()}
            </Button> : ""}
          {this.operation === "view" ?
            <Button variant={isAvailable ? "primary" : "danger"}
                    disabled={!isAvailable}
                    onClick={() => this.setState({shouldShowRentalInfo: true})}
            >
              {isAvailable ? "Rent" : isCurrentUserReservation ?
                "CURRENTLY RESERVED BY YOU" : "NOT AVAILABLE"}
            </Button> : ""}
          {this.operation === "add" ?
            <Button onClick={this.handleFillWithRandomData.bind(this)}
                    className="link-button"
                    variant="secondary"
            >
              Random Data
            </Button> : ""}
          <Link className="link-button"
                to="/"
          >
            <Button variant="secondary">
              Home
            </Button>
            {loading ? <Spinner className="spinner" animation="border" /> : ""}
          </Link>
          {shouldShowRentalInfo ?
            <ReservationInformation bikeId={this.bike.id}
                                    userId={this.userId}
            /> : ""}
          {isCurrentUserReservation ?
            <ReservationInformation reservation={this.bike.reservation[0]} /> : ""}
        </Form>
      </div>
    );
  }
}
