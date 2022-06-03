// Copyright (c) 2022 Sri Lakshmi Kanthan P
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { NavBar, Register as RComponent } from "../../components";
import styles from "./Register.module.css";

// Register Page component
export default function Register() {
  // sign up handler
  const signUpHandler = (username: string, password: string) => {

  }

  // sign in handler
  const signInHandler = (username: string, password: string) => {

  }

  // render
  return (
    <main className={styles.Register}>
      <section className={styles.NavBar}>
        <NavBar />
      </section>
      <section className={styles.Main}>
        <RComponent onSignUp={signUpHandler} onSignIn={signInHandler}/>
      </section>
    </main>
  );
}
