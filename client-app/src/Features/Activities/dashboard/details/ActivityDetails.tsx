import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { useParams } from "react-router";

import { Grid } from "semantic-ui-react";
import LoadingComponent from "../../../../App/Layout/LoadingComponent";
import { useStore } from "../../../../App/stores/store";
import ActivityDetailedSidebar from "./ActivityDetailedSidebar";
import ActivityDetailsHeader from "./ActivityDetailsHeader";
import ActivityDetailsInfo from "./ActivityDetailsInfo";

export default observer(function ActivityDetails() {
  const { activityStore } = useStore();
  const {
    selectedActivity: activity,
    loadActivity,
    loadingInitial,
  } = activityStore;
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) loadActivity(id);
  }, [id, loadActivity]);

  if (loadingInitial || !activity) return <LoadingComponent />;
  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivityDetailsHeader activity={activity} />
        <ActivityDetailsInfo activity={activity} />
      </Grid.Column>

      <Grid.Column width={6}>
        <ActivityDetailedSidebar attendees={activity.attendees!} />
      </Grid.Column>
    </Grid>
  );
});
