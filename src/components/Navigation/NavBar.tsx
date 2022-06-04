// Copyright (c) 2022 Sri Lakshmi Kanthan P
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { selectUserName, selectIsAuthenticated, setUser } from "../../redux/slices";
import { Button, Container, Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ReactTooltip from 'react-tooltip';
import styles from "./NavBar.module.css";
import React from "react";

// component
export default function NavBar() {
  // is authenticated
  const isAuthenticated = useSelector(selectIsAuthenticated);

  // user name
  const userName = useSelector(selectUserName);

  // navigate
  const navigate = useNavigate();

  // conditional component
  let component = <></>;

  // get in
  const onGetIn = () => {
    navigate("/register");
  }

  // get out
  const onGetOut = () => {
    setUser({userId: null, userName: null, userToken: null, isAuthenticated: false})
  }

  // if user is logged in
  if (!isAuthenticated) {
    component = (
      <Button variant="primary" onClick={onGetIn}>GetIn</Button>
    );
  } else {
    component = (
      <Nav className="ms-auto">
        <Nav.Link href='/timetables' className='d-flex align-items-center justify-content-center'>
          Timetables
        </Nav.Link>
        <Navbar.Text>
          <Button
            data-tip={`Logged in as ${userName}`}
            variant="outline-primary"
            onClick={onGetOut}
          >
            Logout
          </Button>
          <ReactTooltip />
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
