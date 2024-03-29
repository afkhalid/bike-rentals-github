import React, { Component, Fragment } from "react";
import { Button, Spinner, Table } from "react-bootstrap";
import { API, Auth } from "aws-amplify";
import { listBikes, listRatings, listReservations } from "../graphql/queries";
import { filterBikes, getQueryResult, sortBy, toLocaleDate } from "../utils";
import { Link } from "react-router-dom";
import { deleteBike } from "../graphql/mutations";
import BikesFilter from "../widgets/bikes_filter";

export default class BikesListTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bikes: [],
      ratings: [],
      loading: true,
    };
  }

  async componentDidMount() {
    const bikesData = await API.graphql({query: listBikes});
    let bikes = getQueryResult(bikesData, "listBikes");

    const ratingsData = await API.graphql({query: listRatings});
    const ratings = getQueryResult(ratingsData, "listRatings");

    const reservationData = await API.graphql({query: listReservations});
    const reservations = getQueryResult(reservationData, "listReservations");

    const user = await Auth.currentUserInfo();

    bikes = bikes.map(bike => {
      const reservation = reservations.filter(reservation => {
        return reservation.bikeReservationsId === bike.id &&
          reservation.status === "active" &&
          new Date(reservation.endDate) > new Date();
      });
      const rating = this.average(ratings.filter(rating =>
        rating.bikeRatingsId === bike.id)
        .map(rating => rating.rating));
      return {
        rating: rating ? rating.toFixed(2) : "N/A",
        reservation,
        ...bike,
      }
    });

    this.setState({
      userId: user.attributes.sub,
      originalData: bikes,
      bikes, ratings,
      loading: false
    });
  }

  async handleDeleteBike(id) {
    this.setState({bikes: this.state.bikes.filter(bike => bike.id !== id)});
    await API.graphql({query: deleteBike, variables: {input: {id}}});
  }

  to = (bike, operation) => {
    const {ratings, userId} = this.state;
    return {
      pathname: "bike",
      state: {
        operation,
        bike,
        userId,
        rating: ratings.find(rating =>
          rating.bikeRatingsId === bike?.id &&
          rating.userRatingsId === userId)
      },
    };
  };

  average = arr => arr.reduce((a, b) => a + b, 0) / arr.length;

  renderBikeRow(bike, index) {
    const {userRole} = this.props;
    return (
      <tr key={index}>
        <td>{bike.model}</td>
        <td>{bike.color}</td>
        <td>{bike.location}</td>
        <td>{bike.rating}</td>
        <td className={bike.reservation.length > 0 ? "not-available" : "available"}>
          {bike.reservation.length > 0 ? "No" : "Yes"}
        </td>
        <td>
          {bike.reservation.length > 0 ? toLocaleDate(bike.reservation[0].endDate) : "N/A"}
        </td>
        <td>
          <div className="centered">
            <Link to={this.to(bike, "view")}>
              <Button variant="primary"
                      size="sm"
              >
                View
              </Button>
            </Link>
          </div>
        </td>
        {userRole === "Manager" ?
          <Fragment>
            <td>
              <div className="centered">
                <Link to={this.to(bike, "edit")}>
                  <Button variant="secondary"
                          size="sm"
                  >
                    Edit
                  </Button>
                </Link>
              </div>
            </td>
            <td>
              <div className="centered">
                <Button variant="danger"
                        size="sm"
                        onClick={this.handleDeleteBike.bind(this, bike.id)}
                >
                  Delete
                </Button>
              </div>
            </td>
          </Fragment> : ""}
      </tr>
    );
  }

  handleFilterChange(filterOptions) {
    const bikes = filterBikes(filterOptions, this.state.originalData);
    this.setState({bikes});
  }

  handleClearFilter() {
    this.setState({bikes: this.state.originalData});
  }

  render() {
    const {bikes, loading} = this.state;
    const {userRole} = this.props;
    const tableData = bikes.length === 0 ?
      <tr>
        <td colSpan={7}>
          No bikes for rental
        </td>
      </tr> : bikes.map((bike, idx) => this.renderBikeRow(bike, idx));

    return (
      <div>
        {userRole === "Manager" ?
          <div className="bike-add-button">
            <Link to={this.to(null, "add")}>
              {loading ? <Spinner animation="border" /> : ""}
              <Button className="add-button"
                      variant="primary"
              >
                Add Bike
              </Button>
            </Link>
          </div> : loading ? <Spinner className="spinner" animation="border" /> : ""}
        <BikesFilter onFilterChange={this.handleFilterChange.bind(this)}
                     onClearFilter={this.handleClearFilter.bind(this)}
                     loading={loading}
        />
        <Table className="mt-2" striped bordered hover>
          <thead>
          <tr>
            <th>Model</th>
            <th>Color</th>
            <th>Location</th>
            <th>Rate</th>
            <th>Available</th>
            <th>Reservation End Date</th>
            <th className="centered" colSpan={4}>Manage</th>
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
