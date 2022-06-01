// Copyright (c) 2022 Sri Lakshmi Kanthan P
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { FloatingLabel, Form, Button } from 'react-bootstrap';
import styles from "./Register.module.css";
import React, { useState } from "react";

// Component IProps
interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  onSignUp?: (username: string, password: string) => void;
  onSignIn?: (username: string, password: string) => void;
}

// Component
export default function GetIn(props: IProps) {
  // state of components
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // event handler
  const signUpHandler = () => { props.onSignUp && props.onSignUp(username, password); }
  const signInHandler = () => { props.onSignIn && props.onSignIn(username, password); }

  // render
  return (
    <Form className={styles.GetIn}>
      <div className={styles.UserIcon}>
        <img src={require("../../assets/imagesuser.png").default} alt="User" className='img-fluid mx-auto'/>
      </div>
      <FloatingLabel controlId="nameInput" label="Username" className="mb-3">
        <Form.Control type="text" placeholder="Username" onChange={e => setUsername(e.target.value)}></Form.Control>
      </FloatingLabel>
      <FloatingLabel controlId="passInput" label="Password" className="mb-3">
        <Form.Control type="text" placeholder="Password" onChange={e => setPassword(e.target.value)}></Form.Control>
      </FloatingLabel>
      <div className={styles.Buttons}>
        <Button variant="primary" onClick={signUpHandler}>Sign Up</Button>
        <Button variant="primary" onClick={signInHandler}>Sign In</Button>
      </div>
    </Form>
  );
}
