import React from "react";
import { Container } from "semantic-ui-react";
import NavBar from "./Navbar";
import ActivityDashboard from "../../Features/Activities/dashboard/ActivityDashboard";
import { observer } from "mobx-react-lite";
import { Route, useLocation } from "react-router-dom";
import HomePage from "../../Features/home/HomePage";
import ActivityForm from "../../Features/Activities/form/ActivityForm";
import ActivityDetails from "../../Features/Activities/dashboard/details/ActivityDetails";
import TestErrors from "../../Features/Error/TestError";

function App() {
  const location = useLocation();
  return (
    <>
      <Route exact path="/" component={HomePage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <>
            <NavBar />
            <Container style={{ marginTop: "7em" }}>
              <Route exact path="/activities" component={ActivityDashboard} />
              <Route path="/activities/:id" component={ActivityDetails} />
              <Route
                key={location.key}
                path={["/createActivity", "/manage/:id"]}
                component={ActivityForm}
              />
              <Route path="/error" component={TestErrors} />
            </Container>
          </>
        )}
      />
    </>
  );
}

export default observer(App);
