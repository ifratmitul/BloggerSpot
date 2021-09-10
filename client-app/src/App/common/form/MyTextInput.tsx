import { useField } from "formik";
import React from "react";
// import { Form, Label } from "semantic-ui-react";

interface Props {
  placeholder: string;
  name: string;
  label?: string;
  type?: string;
}

export default function MyTextInput(props: Props) {
  const [field, meta] = useField(props.name);
  return (
    <div className="mb-4">
      <label className="block text-grey-darker text-lg text-left font-bold mb-2">
        {props.label}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div
          className="bg-red-100 border-l-4 border-red-500 text-orange-700 p-2 capitalize"
          role="alert"
        >
          <p className="font-bold text-sm text-left text-orange-700">
            {meta.error}
          </p>
        </div>
      ) : null}
    </div>
  );
}
