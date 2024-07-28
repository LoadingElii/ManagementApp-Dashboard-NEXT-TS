import React from "react";
import styles from "./login.module.css";
import clsx from "clsx";
import { Paper } from "@mui/material";
import { submitLoginInfo } from "../lib/action";

export default function Login() {
  return (
    <div className={styles.container}>
      <Paper square={false} elevation={6}>
        <h2 className={styles.title}>Company Name</h2>
   
        <form action={submitLoginInfo} className={styles.loginForm}>
          <div className="text-red-600 text-lg">
          </div>
          <h4>
            Username
            <input 
              id="username"
              name="username"
              type="text" 
              className={styles.username} />
          </h4>
          <h4>
            Password
            <input 
              type="password"
              name="password"
              id="password" 
              className={styles.userPassword}  />
          </h4>

          <button 
            id="login"
            type="submit" 
            value="Login" 
            className={styles.loginButton}>
            Login
          </button>
        </form>
      </Paper>
    </div>
  );
}
