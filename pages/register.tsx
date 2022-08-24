import React, { useState } from "react";
import { useFormik } from "formik";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../firebaseConfig";
import styles from "../src/styles/Auth.module.scss";
import { useRouter } from "next/router";
import { authAPI } from "../src/api/api";

type authDataType = {
  email: string;
  password: string;
};

const Register = () => {
  const router = useRouter();
  const [registrationError, setRegistrationError] = useState<string | null>();
  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = async (values: authDataType) => {
    try {
      setRegistrationError(null);
      await authAPI.signUpWithEmail(values.email, values.password);
      await router.push("/");
    } catch (err: any) {
      setRegistrationError(err.message);
    }
  };

  const formik = useFormik({ initialValues, onSubmit });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <h2 className={styles.form_header}>Register Account</h2>
      <div className={styles.form_span}>
        Enter Email and Password to register
      </div>
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
      <div className="error">{registrationError}</div>
      <button type="submit" className={styles.send_btn}>
        Send
      </button>
    </form>
  );
};

export default Register;
