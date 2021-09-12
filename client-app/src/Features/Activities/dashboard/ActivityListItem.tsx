import React from "react";
import { Link } from "react-router-dom";
import { Activity } from "../../../App/Models/activity";
import { format } from "date-fns";
interface Props {
  activity: Activity;
}

export default function ActivityListItem({ activity }: Props) {
  return (
    <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
      <div className="flex justify-center md:justify-end -mt-16">
        <img
          className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
          src="/assets/user.png"
        />
      </div>
      <div>
        <h2 className="text-gray-800 text-3xl font-semibold capitalize">
          {activity.title}
        </h2>
        <p className="text-gray-500 text-sm capitalize">
          {format(activity.date!, "dd MMM yyyy h:mm aa")}{" "}
        </p>
        <p className="mt-2 text-gray-600">{activity.description}</p>
      </div>
      <div className="flex justify-end mt-4">
        <Link
          to={`/activities/${activity.id}`}
          className="text-xl font-medium text-gray-500"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
