import React, { useState } from "react";
import { useFormik } from "formik";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../firebaseConfig";
import styles from "../src/styles/Auth.module.scss";
import { useRouter } from "next/router";
import { authAPI } from "../src/api/api";

type authDataType = {
  email: string;
  password: string;
};

const Login = () => {
  const router = useRouter();

  const [loginError, setLoginError] = useState<string | null>();
  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = async (values: authDataType) => {
    try {
      setLoginError(null);
      await authAPI.loginWithEmail(values.email, values.password);
      await router.push("/");
    } catch (err: any) {
      setLoginError(err?.message);
    }
  };

  const formik = useFormik({ initialValues, onSubmit });
  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <h2 className={styles.form_header}>Welcome to Marketplace</h2>
      <div className={styles.form_span}>Please enter the data to login</div>
      <div className={styles.input_item}>
        <div className={styles.input_label}>Email</div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={formik.handleChange}
          value={formik.values.email}
          className="input"
        />
      </div>

      <div className={styles.input_item}>
        <div className={styles.input_label}>Password</div>
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={formik.handleChange}
          value={formik.values.password}
          className="input"
        />
      </div>
      <div className="error">{loginError}</div>
      <button type="submit" className={styles.send_btn}>
        Send
      </button>
    </form>
  );
};

export default Login;
