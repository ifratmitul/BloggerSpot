import { Formik, Form, ErrorMessage } from "formik";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import MyTextInput from "../../App/common/form/MyTextInput";
import { useStore } from "../../App/stores/store";

export default observer(function LoginForm() {
  const { userStore } = useStore();
  return (
    <Formik
      initialValues={{ email: "", password: "", error: null }}
      onSubmit={(values, { setErrors }) =>
        userStore
          .login(values)
          .catch((error) => setErrors({ error: "Invalid email or password" }))
      }
    >
      {({ handleSubmit, isSubmitting, errors }) => (
        <Form
          className="w-15 h-15 sm:max-w-1/2 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col flex-wrap"
          style={{ margin: "30vh auto" }}
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <h4 className="text-center text-3xl py-2 sm:py-2 sm:text-4xl font-bold mb-2 align-middle tracking-wider text-blue-900">
            Login
          </h4>
          <MyTextInput name="email" label="Email Address" placeholder="Email" />
          <MyTextInput
            name="password"
            label="Password"
            placeholder="password"
            type="password"
          />
          <ErrorMessage
            name="error"
            render={() => <label>{errors.error}</label>}
          />
          <div className="flex flex-col items-center self-around justify-around sm:flex-row sm:justify-between">
            <button
              className="bg-blue-900 hover:bg-blue-600 text-white font-bold py-2.5 px-8 rounded"
              type="submit"
            >
              Sign In
            </button>
            <Link
              className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
              to="/"
            >
              Forgot Password?
            </Link>
          </div>
        </Form>
      )}
    </Formik>
  );
});
