// Copyright (c) 2022 Sri Lakshmi Kanthan P
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Schedule as CoreComponent } from "../../components";
import { ISchedule } from "../../interfaces";
import styles from "./Schedule.module.css";
import { NavBar } from "../../components";
import gradient from 'random-gradient'

// Title Component
function TitleComponent(props: {title: string}) {
  // random color
  const color = gradient(props.title);

  // render
  return (
    <div style={{background: color}} className={styles.TitleComponent}>
      {props.title}
    </div>
  );
}

// page component Schedule
export default function Schedule() {
  // list of schedules
  const scheduleList: ISchedule[] = [
    {
      timetableId: 1,
      scheduleId: 1,
      start: new Date(),
      end: new Date(),
      description: "New One",
      finished: false
    }
  ];

  // components
  const components = scheduleList.map(value => {
    return (
      <div className={styles.ScheduleWrapper}>
        <CoreComponent schedule={value} />
      </div>
    );
  });

  // add front
  components.unshift(( <TitleComponent title={"Schedule"} /> ));

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
        <NavBar />
      </section>
      <section className={styles.Main}>
        {components}
      </section>
    </main>
  );
}
