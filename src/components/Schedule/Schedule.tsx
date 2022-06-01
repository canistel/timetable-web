// Copyright (c) 2022 Sri Lakshmi Kanthan P
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Container, Form, Row } from 'react-bootstrap';
import { ISchedule } from "../../interfaces";
import styles from "./Schedule.module.css";
import React, { useState } from "react";

// Component IProps
interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  onClicked?: (timetableId: number) => void;
  onEdited?: (timetableId: number) => void;
  onFinished? :(finished: boolean) => void;
  schedule: ISchedule;
  initiallyEditable: boolean;
}

// component
export default function Schedule(props: IProps) {
  // component states
  const [editable, setEditable] = useState(props.initiallyEditable);

  // Click Handler for Editable
  const editHandler = () => {
    setEditable(true);
  }

  // check box Handler
  const tickHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onFinished && props.onFinished(event.target.checked)
  }

  // render component
  return (
    <div className={styles.Schedule}>
      <Container className={styles.ScheduleContainer}>
        <div className={styles.Schedule_start}>
          <Row xs={12}>
            <div contentEditable={editable} className={styles.Title}>{props.schedule.description}</div>
          </Row>
          <Row xs={12}>
            <div contentEditable={editable} className={styles.startTime}>
              {props.schedule.start.toISOString()}
            </div>
            to
            <div contentEditable={editable} className={styles.endTime}>
              {props.schedule.end.toISOString()}
            </div>
          </Row>
        </div>
        <div className={styles.Schedule_end}>
          <Row xs={12}>
            <img src={require("../../assets/images/edit.png").default} alt="Edit" onClick={editHandler} />
          </Row>
          <Row xs={12}>
            <Form.Check type="checkbox" onChange={tickHandler} checked={props.schedule.finished}/>
          </Row>
        </div>
      </Container>
    </div>
  );
}
