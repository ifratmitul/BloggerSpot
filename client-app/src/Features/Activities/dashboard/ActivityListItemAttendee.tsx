import { observer } from "mobx-react-lite";
import React from "react";
import { Link } from "react-router-dom";
import { List, Image } from "semantic-ui-react";
import { Profile } from "../../../App/Models/profile";

interface Props {
  attendees: Profile[];
}

function ActivityListItemAttendee({ attendees }: Props) {
  return (
    <div className="flex flex-row">
      {attendees &&
        attendees.map((attendees) => (
          <List.Item
            key={attendees.username}
            as={Link}
            to={`/profiles/${attendees.username}`}
          >
            <Image
              size="mini"
              circular
              src={attendees.image || "/assets/user.png"}
            />
          </List.Item>
        ))}
    </div>
  );
}

export default observer(ActivityListItemAttendee);
