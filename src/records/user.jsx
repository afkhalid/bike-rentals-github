import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class User extends Component {
  render() {
    return (
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Role</Form.Label>
          <Form.Select>
            <option>User</option>
            <option>Manager</option>
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit">
          Add User
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
