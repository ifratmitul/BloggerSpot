import React from "react";
import { Message } from "semantic-ui-react";

interface Props {
  errors: any;
}

export default function ValidationErrors({ errors }: Props) {
  return (
    <>
      <div
        className="bg-red-100 border-l-4 border-red-500 text-red-700 text-left p-3 mb-2 capitalize"
        role="alert"
      >
        {errors.map((err: string, i: any) => {
          console.log(err);

          return (
            <label
              key={i}
              className="font-bold text-md mb-2 text-left text-red-700"
            >
              {err}
            </label>
          );
        })}
      </div>
    </>
  );
}
