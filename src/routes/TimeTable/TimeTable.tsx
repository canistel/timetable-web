// Copyright (c) 2022 Sri Lakshmi Kanthan P
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Timetable as CoreComponent } from "../../components";
import { useNavigate } from "react-router-dom";
import { ITimetable } from "../../interfaces";
import styles from "./TimeTable.module.css";
import { NavBar } from "../../components";

// Timetable page component
export default function Timetable() {
  // navigation hook to nav
  const navigation = useNavigate();

  // list of time tables
  const timetableList: ITimetable[] = [
    {
      timetableId: 1,
      description: "New Schedule"
    },
    {
      timetableId: 2,
      description: "New Love"
    },
  ];

  // timetable click event
  const showTimeTable = (timetableId: number) => {
    navigation(`/timetables/${timetableId}`)
  }

  // list of components
  const components = timetableList.map(value => {
    return (
      <CoreComponent timetable={value} onClicked={showTimeTable}/>
    );
  });

  // add keydown handler
  document.addEventListener("keydown", (event: KeyboardEvent) => {
    if(event.key === "=" && event.ctrlKey && event.altKey) {
      // create new timetable
    }
  });

  // render
  return (
    <main className={styles.Timetable}>
      <section className={styles.NavBar}>
        <NavBar  />
      </section>
      <section className={styles.Main}>
        {components}
      </section>
    </main>
  );
}
