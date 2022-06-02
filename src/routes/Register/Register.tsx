// Copyright (c) 2022 Sri Lakshmi Kanthan P
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { NavBar, Register as RComponent } from "../../components";
import styles from "./Register.module.css";

// Register Page component
export default function Register() {
  return (
    <main className={styles.Register}>
      <section className={styles.NavBar}>
        <NavBar />
      </section>
      <section className={styles.Main}>
        <RComponent />
      </section>
    </main>
  );
}
