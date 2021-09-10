import { Formik, Form, ErrorMessage } from "formik";
import { observer } from "mobx-react-lite";
import MyTextInput from "../../App/common/form/MyTextInput";
import { useStore } from "../../App/stores/store";
import * as Yup from "yup";
import ValidationErrors from "../Error/ValidationError";

export default observer(function RegisterForm() {
  const { userStore } = useStore();
  return (
    <Formik
      initialValues={{
        displayName: "",
        username: "",
        email: "",
        password: "",
        error: null,
      }}
      onSubmit={(values, { setErrors }) =>
        userStore.register(values).catch((error) => setErrors({ error }))
      }
      validationSchema={Yup.object({
        displayName: Yup.string().required(),
        username: Yup.string().required(),
        email: Yup.string().email().required(),
        password: Yup.string().required(),
      })}
    >
      {({ handleSubmit, isSubmitting, errors, isValid, dirty }) => (
        <Form
          className="ui form error w-15 h-15 sm:max-w-2/3 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col flex-wrap"
          style={{ margin: "30vh auto" }}
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <h4 className="text-center text-3xl py-2 sm:py-2 sm:text-4xl font-bold mb-2 align-middle tracking-wider text-blue-900">
            Registration
          </h4>
          <MyTextInput
            name="displayName"
            label="Display Name"
            placeholder="Name"
          />
          <MyTextInput
            name="username"
            label="username"
            placeholder="username"
          />
          <MyTextInput name="email" label="Email Address" placeholder="Email" />
          <MyTextInput
            name="password"
            label="Password"
            placeholder="password"
            type="password"
          />
          <ErrorMessage
            name="error"
            render={() => (
              // <label className="text-sm font-bold text-red-500 mb-1">
              //   {errors.error}
              // </label>
              <ValidationErrors errors={errors.error} />
            )}
          />
          <div className="flex flex-col items-center self-around justify-around sm:flex-row sm:justify-center">
            <button
              disabled={!isValid || !dirty || isSubmitting}
              className="bg-blue-900 hover:bg-blue-600 text-white font-bold py-2.5 px-8 rounded"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
});
