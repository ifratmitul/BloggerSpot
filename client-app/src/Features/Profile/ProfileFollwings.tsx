import { Tab } from "semantic-ui-react";
import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Card, Grid, Header } from "semantic-ui-react";
import { useStore } from "../../App/stores/store";
import ProfileCard from "./ProfileCard";

export default observer(function ProfileFollwings() {
  const { profileStore } = useStore();

  const { profile, followings, loadFollowings, loadingFollowings } =
    profileStore;

  useEffect(() => {
    loadFollowings("following");
  }, [followings]);

  return (
    <Tab.Pane loading={loadingFollowings}>
      <Grid>
        <Grid.Column width={16}>
          <Header
            floated="left"
            icon="user"
            content={`People Follwing ${profile?.displayName}`}
          />
        </Grid.Column>
        <Grid.Column width={16}>
          <Card.Group itemsPerRow={4}>
            {followings.map((profile) => {
              <ProfileCard key={profile.username} profile={profile} />;
            })}
          </Card.Group>
        </Grid.Column>
      </Grid>
    </Tab.Pane>
  );
});
