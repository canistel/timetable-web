// Copyright (c) 2022 Sri Lakshmi Kanthan P
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { NavBar } from "../../components";
import styles from "./Page404.module.css"
import React from "react";

export default function Page404() {
  // render
  return (
    <main className={styles.Page404}>
      <section className={styles.NavBar}>
        <NavBar />
      </section>
      <section className={styles.Main}>
        <div className={styles.StatusCode}>
          404
        </div>
        <div className={styles.Message}>
          Page Not Found
        </div>
      </section>
    </main>
  );
}