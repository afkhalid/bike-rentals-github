import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import React, { Component } from 'react';
import { API } from 'aws-amplify';
import { listUsers } from "./graphql/queries";
import { createUser } from "./graphql/mutations";
import { getQueryResult } from "./utils";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Button } from 'react-bootstrap';
import UsersListTab from "./lists/users_list_tab";
import BikesListTab from "./lists/bikes_list_tab";
import ReservationsListTab from "./lists/reservations_list_tab";

class HomePage extends Component {
  async componentDidMount() {
    try {
      const {user} = this.props;
      const apiData = await API.graphql({query: listUsers});
      const users = getQueryResult(apiData, "listUsers");
      const isFirstUser = users.length === 0;
      const userFound = users.find(databaseUser => databaseUser.username === user.username);
      if (!userFound) {
        await API.graphql({
          query: createUser, variables: {
            input: {
              username: user.username,
              uuid: user.attributes.sub,
              email: user.attributes.email,
              role: isFirstUser ? "Manager" : "User",
            }
          }
        });
      }
    } catch (e) {
      console.error("Home Page::ComponentDidMount failed for the following error:", e.errors[0].message);
    }
  }

  render() {
    const {signOut} = this.props;
    return (
      <div>
        <Button className="logout-button mb-3"
                variant="danger"
                onClick={signOut}
        >
          Sign out
        </Button>
        <Tabs>
          <TabList>
            <Tab>Bikes</Tab>
            <Tab>Users</Tab>
            <Tab>Reservations</Tab>
          </TabList>
          <TabPanel>
            <BikesListTab />
          </TabPanel>
          <TabPanel>
            <UsersListTab />
          </TabPanel>
          <TabPanel>
            <ReservationsListTab />
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default withAuthenticator(HomePage);
