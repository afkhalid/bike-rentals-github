import React, { Component } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class UsersListTab extends Component {
  render() {
    return (
      <div>
        <Link to="user">
          <Button className="add-button"
                  variant="primary"
          >
            Add User
          </Button>
        </Link>
        <Table className="mt-5" striped bordered hover>
          <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>ahmed@gmail.com</td>
            <td>
              <div className="centered">
                <Button size="sm">View</Button>
              </div>
            </td>
            <td>
              <div className="centered">
                <Button variant="secondary" size="sm">Edit</Button>
              </div>
            </td>
            <td>
              <div className="centered">
                <Button variant="danger" size="sm">
                  Delete
                </Button>
              </div>
            </td>
          </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
