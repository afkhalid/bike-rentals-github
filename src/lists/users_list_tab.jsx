import React, { Component } from "react";
import { Alert, Button, Spinner, Table } from "react-bootstrap";
import { API, Auth } from "aws-amplify";
import { listBikes, listReservations, listUsers } from "../graphql/queries";
import { getQueryResult } from "../utils";
import { Link } from "react-router-dom";
import { createUser, deleteUser } from "../graphql/mutations";

export default class UsersListTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: true,
      showAlert: false,
    };
  }

  async componentDidMount() {
    const apiData = await API.graphql({query: listUsers});
    let users = getQueryResult(apiData, "listUsers");

    const bikesData = await API.graphql({query: listBikes});
    const bikes = getQueryResult(bikesData, "listBikes");

    const reservationData = await API.graphql({query: listReservations});
    const reservations = getQueryResult(reservationData, "listReservations");

    users = users.map(user => {
      const userReservations = reservations
        .filter(reservation => reservation.userReservationsId === user.uuid)
        .map(reservation => {
          return {
            bike: bikes.find(bike => bike.id === reservation.bikeReservationsId),
            ...reservation,
          };
        });

      return {
        ...user,
        reservations: userReservations,
      }
    });

    this.setState({users, loading: false});
  }

  async handleDeleteUser(uuid) {
    this.setState({loading: true}, async () => {
      try {
        const userToDelete = this.state.users.find(user => user.uuid === uuid);
        const currentUser = await Auth.currentUserInfo();

        if(userToDelete.username === currentUser.username) {
          this.setState({
            loading: false,
            showAlert: true,
            alertMessage: "You cannot delete your own account."
          });
          return;
        }

        const activeUserReservations = userToDelete.reservations.find(reservation => {
          return reservation.status === "active" &&
            new Date(reservation.endDate) > new Date();
        });

        if(activeUserReservations) {
          this.setState({
            loading: false,
            showAlert: true,
            alertMessage: "You cannot delete a user with active reservations."
          });
          return;
        }

        const result = await API.get("bikerentalsapi", `/users/delete/${userToDelete.username}`, "bikerentalsapi");
        if (result.status === "success") {
          this.setState({users: this.state.users.filter(user => user.uuid !== uuid)}, async () => {
            await API.graphql({query: deleteUser, variables: {input: {uuid}}});
            this.setState({loading: false, showAlert: false});
          });
        } else {
          this.setState({showAlert: true, alertMessage: result.data});
        }
      } catch (e) {
        this.setState({
          loading: false,
          showAlert: true,
          alertMessage: `Function failed with following error ${e.message}`
        });
      }
    });
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
              <Button variant="primary"
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
                    onClick={this.handleDeleteUser.bind(this, user.uuid)}
            >
              Delete
            </Button>
          </div>
        </td>
      </tr>
    );
  }

  render() {
    const {users, loading, alertMessage, showAlert} = this.state;
    const tableData = users.length === 0 ?
      <tr>
        <td colSpan={6}>
          No users found
        </td>
      </tr> : users.map((user, idx) => this.renderUserRow(user, idx));

    return (
      <div>
        {showAlert ?
          <Alert variant="danger" onClose={() => this.setState({showAlert: false})} dismissible>
          {alertMessage}
        </Alert> : ""}
        <Link to={this.to(null, "add")}>
          {loading ? <Spinner animation="border" /> : ""}
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
