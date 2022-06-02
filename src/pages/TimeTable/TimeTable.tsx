// Copyright (c) 2022 Sri Lakshmi Kanthan P
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Timetable as CoreComponent, PlusButton } from "../../components";
import { ITimetable } from "../../interfaces";
import styles from "./TimeTable.module.css";
import { NavBar } from "../../components";

// Timetable page component
export default function Timetable() {
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

  // list of components
  const components = timetableList.map(value => {
    return (
      <CoreComponent timetable={value} />
    );
  });

  // render
  return (
    <main className={styles.Timetable}>
      <section className={styles.NavBsr}>
        <NavBar />
      </section>
      <section className={styles.Main}>
        {components}
        <PlusButton />
      </section>
    </main>
  );
}
