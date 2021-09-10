import React from "react";
import { Message } from "semantic-ui-react";

interface Props {
  errors: any;
}

export default function ValidationErrors({ errors }: Props) {
  return (
    // <Message error>
    //   {errors && (
    //     <Message.List>
    //       {errors.map((err: any, i: any) => (
    //         <Message.Item key={i}>{err}</Message.Item>
    //       ))}
    //     </Message.List>
    //   )}
    // </Message>
    <>
      <div
        className="bg-red-100 border-l-4 border-red-500 text-gray-700 p-3 mb-2 capitalize"
        role="alert"
      >
        {errors.map((err: string, i: any) => {
          console.log(err);

          <label
            key={i}
            className="font-bold text-md mb-2 text-left text-gray-700"
          >
            {err}
          </label>;
        })}
      </div>
    </>
  );
}
