import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { API, Auth } from "aws-amplify";
import { createUser, updateUser } from "../graphql/mutations";

export default class User extends Component {
  constructor(props) {
    super(props);
    this.operation = props.location.state.operation;
    this.user = props.location.state.user;
    this.state = this.operation === "edit" ? {
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      username: this.user.username,
      email: this.user.email,
      role: this.user.role,
    } : {};
  }

  onTextChange(fieldName, e) {
    const text = e.target.value;
    this.setState({[fieldName]: text});
  }

  async addOrEditUser(e) {
    e.preventDefault();

    try {
      const {firstName, lastName, username, email, role} = this.state;
      if (this.operation === "add") {
        const cognitoUser = await Auth.signUp({username, password: "PassW0rd!@#$", attributes: {email}});
        await API.graphql({
          query: createUser,
          variables: {input: {uuid: cognitoUser.userSub, firstName, lastName, username, email, role}}
        });
      } else if (this.operation === "edit") {
        await API.graphql({
          query: updateUser,
          variables: {input: {uuid: this.user.uuid, firstName, lastName, username, email, role}}
        });
      }
      window.location.href = "/";
    } catch (e) {
      console.log("User User::addOrEditUser failed with the following error", e);
    }
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
      <Form onSubmit={this.addOrEditUser.bind(this)}>
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text"
                        disabled={this.operation === "view"}
                        defaultValue={this.operation === "add" ? "" : this.user.firstName}
                        onChange={this.onTextChange.bind(this, "firstName")}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text"
                        disabled={this.operation === "view"}
                        defaultValue={this.operation === "add" ? "" : this.user.lastName}
                        onChange={this.onTextChange.bind(this, "lastName")}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email"
                        disabled={this.operation === "view"}
                        defaultValue={this.operation === "add" ? "" : this.user.email}
                        onChange={this.onTextChange.bind(this, "email")}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text"
                        disabled={this.operation === "view"}
                        defaultValue={this.operation === "add" ? "" : this.user.username}
                        onChange={this.onTextChange.bind(this, "username")}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Role</Form.Label>
          <Form.Select disabled={this.operation === "view"}
                       defaultValue={this.operation === "add" ? "" : this.user.role}
                       onChange={this.onTextChange.bind(this, "role")}
          >
            <option>User</option>
            <option>Manager</option>
          </Form.Select>
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
