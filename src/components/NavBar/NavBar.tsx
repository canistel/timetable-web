// Copyright (c) 2022 Sri Lakshmi Kanthan P
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Button } from 'react-bootstrap';
import styles from "./NavBar.module.css";
import React from "react";

// component props
interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  onGetOut?: () => void;
  onGetIn?: () => void;
  isLoggedIn: boolean;
}

// component
export default function NavBar(props: IProps) {
  // conditional component
  let button = <></>;

  // if user is logged in
  if (props.isLoggedIn) {
    <Button variant="outline-primary" onClick={props.onGetOut}>Logout</Button>
  } else {
    <Button variant="outline-primary" onClick={props.onGetIn}>GetIn</Button>
  }

  // render
  return (
    <div className={styles.NavBar}>
      <div className={styles.NavBar_start}>
        <img src={require("../../assets/images/logo.png")} alt="Logo" />
      </div>
      <div className={styles.NavBar_end}>
        {button}
      </div>
    </div>
  );
}
