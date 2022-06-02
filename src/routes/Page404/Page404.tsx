// Copyright (c) 2022 Sri Lakshmi Kanthan P
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import styles from "./Page404.module.css"
import React from "react";
import { Container } from "react-bootstrap";

export default function Page404() {
  return (
    <main className={styles.Page404}>
      <Container>
        <div className={styles.StatusCode}>
          404
        </div>
        <div className={styles.Message}>
          Page Not Found
        </div>
      </Container>
    </main>
  );
}