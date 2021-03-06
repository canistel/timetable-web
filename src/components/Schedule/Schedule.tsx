// Copyright (c) 2022 Sri Lakshmi Kanthan P
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Container, Form, Row, Col } from 'react-bootstrap';
import { ISchedule } from "../../interfaces";
import styles from "./Schedule.module.css";
import React, { useState } from "react";

// Component IProps
interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  onDeleteRequest?: (scheduleId: number) => void;
  onEditRequest?: (scheduleID: number) => void;
  onFinished?: (finished: boolean) => void;
  schedule: ISchedule;
}

// component
export default function Schedule(props: IProps) {
  // component states
  const [finished, setFinished] = useState(props.schedule.finished);

  // delete handler
  const deleteHandler = (evt: React.MouseEvent<HTMLImageElement>) => {
    props.onDeleteRequest && props.onDeleteRequest(props.schedule.scheduleId);
    evt.stopPropagation();
  }

  // Click Handler for Editable
  const editHandler = (evt: React.MouseEvent<HTMLImageElement>) => {
    props.onEditRequest && props.onEditRequest(props.schedule.scheduleId);
    evt.stopPropagation();
  }

  // check box Handler
  const tickHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFinished(event.target.checked);
    props.onFinished && props.onFinished(finished);
  }

  // render component
  return (
    <div className={styles.Schedule}>
      <Container className={styles.ScheduleContainer}>
        <Row className='justify-content-center'>
          <Col xs={8} className="d-flex justify-content-start">
            <div className={styles.Title}>{props.schedule.description}</div>
          </Col>
          <Col xs={4} className="d-flex justify-content-end">
            <img 
              src={require("../../assets/images/editpen.png")} 
              alt="Edit" 
              onClick={editHandler} 
              className={styles.Icon} 
            />
            <img 
              src={require("../../assets/images/delete.png")} 
              alt="Edit" 
              onClick={deleteHandler} 
              className={styles.Icon} 
            />
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <Col xs={10}>
            <div className={styles.startTime}>
              {props.schedule.start.toLocaleString()}
            </div>
            <div className={styles.Connect}>
              &nbsp;to&nbsp;
            </div>
            <div className={styles.endTime}>
              {props.schedule.end.toLocaleString()}
            </div>
          </Col>
          <Col xs={2}>
            <Form.Check type="checkbox" onChange={tickHandler} checked={finished} className={styles.Status} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
