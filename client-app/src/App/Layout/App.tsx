import React from "react";
import { Container } from "semantic-ui-react";
import NavBar from "./Navbar";
import ActivityDashboard from "../../Features/Activities/dashboard/ActivityDashboard";
import { observer } from "mobx-react-lite";
import { Route } from "react-router-dom";
import HomePage from "../../Features/home/HomePage";
import ActivityForm from "../../Features/Activities/form/ActivityForm";
import ActivityDetails from "../../Features/Activities/dashboard/details/ActivityDetails";

function App() {
  return (
    <>
      <NavBar />
      <Container style={{ marginTop: "7em" }}>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/activities" component={ActivityDashboard} />
        <Route path="/activities/:id" component={ActivityDetails} />
        <Route path="/createActivity" component={ActivityForm} />
      </Container>
    </>
  );
}

export default observer(App);
