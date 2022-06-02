// Copyright (c) 2022 Sri Lakshmi Kanthan P
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import styles from "./Homepage.module.css";
import { NavBar } from "../../components";

// Home Page component
export default function Homepage() {
  return (
    <main className={styles.Homepage}>
      <section className={styles.NavBar}>
        <NavBar />
      </section>
      <section className={styles.Main}>
        Welcome to Timetable Manager !
      </section>
    </main>
  );
}
