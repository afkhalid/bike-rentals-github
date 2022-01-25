import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { API } from "aws-amplify";
import { createBike } from "../graphql/mutations";

export default class Bike extends Component {
  onTextChange(fieldName, e) {
    const text = e.target.value;
    this.setState({[fieldName]: text});
  }

  async addBike(e) {
    e.preventDefault();
    const {model, color, location} = this.state;
    await API.graphql({query: createBike, variables: {input: {model, color, location}}});
  }

  render() {
    return (
      <Form onSubmit={this.addBike.bind(this)}>
        <Form.Group className="mb-3">
          <Form.Label>Model</Form.Label>
          <Form.Control type="text"
                        onChange={this.onTextChange.bind(this, "model")}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Color</Form.Label>
          <Form.Control type="text"
                        onChange={this.onTextChange.bind(this, "color")}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Location</Form.Label>
          <Form.Control type="text"
                        onChange={this.onTextChange.bind(this, "location")}
          />
        </Form.Group>
        <Button variant="primary"
                type="submit"
        >
          Add Bike
        </Button>
        <Link className="link-button" to="/">
          <Button variant="secondary">
            Home
          </Button>
        </Link>
      </Form>
    );
  }
}
