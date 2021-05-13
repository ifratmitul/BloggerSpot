import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import LoadingComponent from "../../../App/Layout/LoadingComponent";
import { useStore } from "../../../App/stores/store";
import ActivityForm from "../form/ActivityForm";
import ActivityList from "./ActivityList";
import ActivityDetails from "./details/ActivityDetails";

export default observer(function ActivityDashboard() {
  const { activityStore } = useStore();
  const { editMode, selectedActivity } = activityStore;

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]);

  if (activityStore.loadingInitial)
    return <LoadingComponent content="Loading App" />;
  return (
    <Grid>
      <Grid.Column width="10">
        <ActivityList />
      </Grid.Column>

      <Grid.Column width="6">
        {selectedActivity && !editMode && <ActivityDetails />}

        {editMode && <ActivityForm />}
      </Grid.Column>
    </Grid>
  );
});
