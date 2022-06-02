// Copyright (c) 2022 Sri Lakshmi Kanthan P
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Button, Container, Navbar } from 'react-bootstrap';
import ReactTooltip from 'react-tooltip';
import styles from "./NavBar.module.css";
import React from "react";

// component props
interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  onGetOut?: () => void;
  onGetIn?: () => void;
  username?: string;
}

// component
export default function NavBar(props: IProps) {
  // conditional component
  let component = <></>;

  // if user is logged in
  if (!props.username) {
    component = <Button variant="primary" onClick={props.onGetIn}>GetIn</Button>
  } else {
    component = (
      <React.Fragment>
        <Button
          data-tip={`Logged in as ${props.username}`}
          variant="outline-primary"
          onClick={props.onGetOut}
        >
          Logout
        </Button>
        <ReactTooltip />
      </React.Fragment>
    );
  }

  // render
  return (
    <Navbar bg='light' expand="md" fixed='top' className='shadow-sm'>
      <Container>
        <Navbar.Brand href="#">
          <img src={require("../../assets/images/logo.png")} alt="Logo" className={styles.Logo}/>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            {component}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
