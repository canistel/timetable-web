// Copyright (c) 2022 Sri Lakshmi Kanthan P
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Button, Container, Navbar, Nav } from 'react-bootstrap';
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
    component = (
      <Button variant="primary" onClick={props.onGetIn}>GetIn</Button>
    );
  } else {
    component = (
      <Nav className="ms-auto">
        <Nav.Link href='/timetables' className='d-flex align-items-center justify-content-center'>
          Timetables
        </Nav.Link>
        <Navbar.Text>
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
        </Navbar.Text>
      </Nav>
    );
  }

  // render
  return (
    <Navbar bg='light' expand="md" fixed='top' className='shadow-sm'>
      <Container>
        <Navbar.Brand href="/">
          <img src={require("../../assets/images/logo.png")} alt="Logo" className={styles.Logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbartoggle" />
        <Navbar.Collapse className="justify-content-end">
          {component}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
