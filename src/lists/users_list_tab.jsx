import React, { Component } from "react";
import { Button, Table } from "react-bootstrap";
import { API } from "aws-amplify";
import { listUsers } from "../graphql/queries";
import { getQueryResult } from "../utils";
import { Link } from "react-router-dom";
import { deleteUser } from "../graphql/mutations";

export default class UsersListTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  async componentDidMount() {
    const apiData = await API.graphql({query: listUsers});
    const users = getQueryResult(apiData, "listUsers");
    this.setState({users});
  }

  async handleDeleteUser(uuid) {
    this.setState({users: this.users.filter(user => user.uuid !== uuid)});
    await API.graphql({query: deleteUser, variables: {input: {uuid}}});
  }

  to = (user, operation) => {
    return {
      pathname: "user",
      state: {
        operation,
        user,
      },
    };
  };

  renderUserRow(user, index) {
    return (
      <tr key={index}>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.email}</td>
        <td>{user.username}</td>
        <td>{user.role}</td>
        <td>
          <div className="centered">
            <Link to={this.to(user, "view")}>
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
            <Link to={this.to(user, "edit")}>
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
                    onClick={this.handleDeleteUser.bind(this, user.id)}
            >
              Delete
            </Button>
          </div>
        </td>
      </tr>
    );
  }

  render() {
    const {users} = this.state;
    const tableData = users.length === 0 ?
      <tr>
        <td colSpan={6}>
          No users found
        </td>
      </tr> : users.map((user, idx) => this.renderUserRow(user, idx));

    return (
      <div>
        <Link to={this.to(null, "add")}>
          <Button className="add-button"
                  variant="primary"
          >
            Add User
          </Button>
        </Link>
        <Table className="mt-2" striped bordered hover>
          <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Username</th>
            <th>Role</th>
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
