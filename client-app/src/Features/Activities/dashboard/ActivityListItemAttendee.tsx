import { observer } from "mobx-react-lite";
import React from "react";
import { Link } from "react-router-dom";
import { List, Image } from "semantic-ui-react";
import { Profile } from "../../../App/Models/profile";

interface Props {
  attendees: Profile[];
}

function ActivityListItemAttendee({ attendees }: Props) {
  const styles = {
    borderColor: "orange",
    borderWidth: 2,
  };
  return (
    <div className="flex flex-row">
      {attendees &&
        attendees.map((attendees) => (
          <List.Item
            key={attendees.username}
            as={Link}
            to={`/profile/${attendees.username}`}
          >
            <Image
              size="mini"
              circular
              bordered
              style={attendees.following ? styles : null}
              src={attendees.image || "/assets/user.png"}
            />
          </List.Item>
        ))}
    </div>
  );
}

export default observer(ActivityListItemAttendee);
