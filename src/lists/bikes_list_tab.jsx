import React, { Component } from "react";
import { Button, Table } from "react-bootstrap";
import { API } from "aws-amplify";
import { listBikes } from "../graphql/queries";
import { getQueryResult } from "../utils";
import { Link } from "react-router-dom";
import { deleteBike } from "../graphql/mutations";

export default class BikesListTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bikes: [],
    };
  }

  async componentDidMount() {
    const apiData = await API.graphql({query: listBikes});
    const bikes = getQueryResult(apiData, "listBikes");
    this.setState({bikes});
  }

  async handleDeleteBike(id) {
    this.setState({bikes: this.state.bikes.filter(bike => bike.id !== id)});
    await API.graphql({query: deleteBike, variables: {input: {id}}});
  }

  to = (bike, operation) => {
    return {
      pathname: "bike",
      state: {
        operation,
        bike,
      },
    };
  };

  renderBikeRow(bike, index) {
    return (
      <tr key={index}>
        <td>{bike.model}</td>
        <td>{bike.color}</td>
        <td>{bike.location}</td>
        <td>4</td>
        <td>No</td>
        <td>
          <div className="centered">
            <Link to={this.to(bike, "view")}>
              <Button variant="secondary"
                      size="sm"
              >
                View
              </Button>
            </Link>
          </div>
        </td>
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
      </tr>
    );
  }

  render() {
    const {bikes} = this.state;
    const tableData = bikes.length === 0 ?
      <tr>
        <td colSpan={6}>
          No bikes for rental
        </td>
      </tr> : bikes.map((bike, idx) => this.renderBikeRow(bike, idx));

    return (
      <div>
        <Link to={this.to(null, "add")}>
          <Button className="add-button"
                  variant="primary"
          >
            Add Bike
          </Button>
        </Link>
        <Table className="mt-2" striped bordered hover>
          <thead>
          <tr>
            <th>Model</th>
            <th>Color</th>
            <th>Location</th>
            <th>Rate</th>
            <th>Available</th>
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
