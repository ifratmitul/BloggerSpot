import React, { useEffect } from "react";
import { Container } from "semantic-ui-react";
import NavBar from "./Navbar";
import ActivityDashboard from "../../Features/Activities/dashboard/ActivityDashboard";
import { observer } from "mobx-react-lite";
import { Route, Switch, useLocation } from "react-router-dom";
import HomePage from "../../Features/home/HomePage";
import ActivityForm from "../../Features/Activities/form/ActivityForm";
import ActivityDetails from "../../Features/Activities/dashboard/details/ActivityDetails";
import TestErrors from "../../Features/Error/TestError";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import NotFound from "../../Features/Error/NotFound";
import ServerError from "../../Features/Error/ServerError";
import LoginForm from "../../Features/users/LoginForm";
import { useStore } from "../stores/store";
import LoadingComponent from "./LoadingComponent";
import ModalContainer from "../common/modals/ModalContainer";
import Profile from "../../Features/Profile/profile";
function App() {
  const location = useLocation();
  const { commonStore, userStore, activityStore } = useStore();

  useEffect(() => {
    if (commonStore.token) {
      userStore.getUser().finally(() => commonStore.setAppLoaded());
    } else {
      commonStore.setAppLoaded();
    }
  }, [commonStore, userStore]);

  if (!commonStore.appLoaded || activityStore.loadingInitial)
    return <LoadingComponent />;
  return (
    <>
      <ToastContainer position="bottom-right" hideProgressBar />
      <ModalContainer />
      <Route exact path="/" component={HomePage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <>
            {commonStore.token ? <NavBar /> : ""}
            <Container style={{ marginTop: "7em" }}>
              <Switch>
                <Route exact path="/activities" component={ActivityDashboard} />
                <Route path="/activities/:id" component={ActivityDetails} />
                <Route
                  key={location.key}
                  path={["/createActivity", "/manage/:id"]}
                  component={ActivityForm}
                />
                <Route exact path="/profile/:username" component={Profile} />
                <Route path="/errors" component={TestErrors} />
                <Route path="/server-error" component={ServerError} />
                <Route path="/login" component={LoginForm} />
                <Route component={NotFound} />
              </Switch>
            </Container>
          </>
        )}
      />
    </>
  );
}

export default observer(App);
