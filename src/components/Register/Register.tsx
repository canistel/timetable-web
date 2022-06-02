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
export default function Register(props: IProps) {
  // state of components
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // event handler
  const signUpHandler = () => { props.onSignUp && props.onSignUp(username, password); }
  const signInHandler = () => { props.onSignIn && props.onSignIn(username, password); }

  // render
  return (
    <Form className={`${styles.Register} d-flex align-items-center justify-content-center flex-column`}>
      <div className={`${styles.UserIcon} mb-3`}>
        <img src={require("../../assets/images/user.png")} alt="User" className='img-fluid mx-auto'/>
      </div>
      <FloatingLabel controlId="nameInput" label="Username" className="mb-3 w-75">
        <Form.Control type="text" placeholder="Username" onChange={e => setUsername(e.target.value)}></Form.Control>
      </FloatingLabel>
      <FloatingLabel controlId="passInput" label="Password" className="mb-3 w-75">
        <Form.Control type="text" placeholder="Password" onChange={e => setPassword(e.target.value)}></Form.Control>
      </FloatingLabel>
      <div className={'d-flex align-items-center justify-content-center mb-3'}>
        <Button variant="primary" onClick={signUpHandler} className="mx-1">Sign Up</Button>
        <Button variant="primary" onClick={signInHandler} className="mx-1">Sign In</Button>
      </div>
    </Form>
  );
}
