import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { API } from "aws-amplify";
import { createBike, updateBike } from "../graphql/mutations";

export default class Bike extends Component {
  constructor(props) {
    super(props);
    this.operation = props.location.state.operation;
    this.bike = props.location.state.bike;
    this.state = this.operation === "edit" ? {
      model: this.bike.model,
      color: this.bike.color,
      location: this.bike.location,
    } : {};
  }

  onTextChange(fieldName, e) {
    const text = e.target.value;
    this.setState({[fieldName]: text});
  }

  async addOrEditBike(e) {
    e.preventDefault();
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
  }

  getButtonText() {
    switch (this.operation) {
      case "edit":
        return "Update";
      case "add":
        return "Add";
    }
  }

  render() {
    return (
      <Form onSubmit={this.addOrEditBike.bind(this)}>
        <Form.Group className="mb-3">
          <Form.Label>Model</Form.Label>
          <Form.Control type="text"
                        disabled={this.operation === "view"}
                        defaultValue={this.operation === "add" ? "" : this.bike.model}
                        onChange={this.onTextChange.bind(this, "model")}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Color</Form.Label>
          <Form.Control type="text"
                        disabled={this.operation === "view"}
                        defaultValue={this.operation === "add" ? "" : this.bike.color}
                        onChange={this.onTextChange.bind(this, "color")}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Location</Form.Label>
          <Form.Control type="text"
                        disabled={this.operation === "view"}
                        defaultValue={this.operation === "add" ? "" : this.bike.location}
                        onChange={this.onTextChange.bind(this, "location")}
          />
        </Form.Group>
        {this.operation !== "view" ?
          <Button variant="primary"
                  type="submit"
          >
            {this.getButtonText()}
          </Button> : ""}
        <Link className={this.operation !== "view" ? "link-button" : ""}
              to="/"
        >
          <Button variant="secondary">
            Home
          </Button>
        </Link>
      </Form>
    );
  }
}
