// Copyright (c) 2022 Sri Lakshmi Kanthan P
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { selectIsAuthenticated } from "../../redux/slices";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./Homepage.module.css";
import { NavBar } from "../../components";
import { Button } from "react-bootstrap";

// Home Page component
export default function Homepage() {
  // is authenticated
  const isAuthenticated = useSelector(selectIsAuthenticated);

  // navigator hook
  let navigate = useNavigate();

  // conditional component
  let component = <></>;

  // getin handler
  const getInHandler = () => {
    navigate("/register");
  }

  // show handlers
  const showHandler = () => {
    navigate("/timetables")
  }

  // if authed
  if (isAuthenticated) {
    component = (
      <Button variant="primary" onClick={showHandler}>
        Show Timetables !
      </Button>
    );
  } else {
    component = (
      <Button variant="primary" onClick={getInHandler}>
        GetIn !
      </Button>
    );
  }

  // render
  return (
    <main className={styles.Homepage}>
      <section className={styles.NavBar}>
        <NavBar />
      </section>
      <section className={styles.Main}>
        <p>Welcome to Timetable Manager !</p>
        {component}
      </section>
    </main>
  );
}
