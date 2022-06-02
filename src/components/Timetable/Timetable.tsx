// Copyright (c) 2022 Sri Lakshmi Kanthan P
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Container, Row, Col } from 'react-bootstrap';
import { ITimetable } from "../../interfaces";
import styles from "./Timetable.module.css";
import React, { useState } from "react";
import gradient from 'random-gradient'

// Component IProps
interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  onClicked?: (timetableId: number) => void;
  onEdited?: (timetableId: number) => void;
  timetable: ITimetable;
}

// component
export default function Timetable(props: IProps) {
  // Component States
  const [description, setDescription] = useState(props.timetable.description);
  const [editable, setEditable] = useState(false);

  // random color
  const color = gradient(props.timetable.description);

  // Change Handler
  const changeHandler = (evt: React.ChangeEvent<HTMLDivElement>) => {
    setDescription(evt.currentTarget.textContent ?? description);
  }

  // Click Handler
  const clickHandler = () => {
    props.onClicked && props.onClicked(props.timetable.timetableId);
  }

  // Edit Handler
  const editHandler = () => {
    setEditable(true);
  }

  // key down handler
  const keyDownHandler = (evt: React.KeyboardEvent<HTMLDivElement>) => {
    if (evt.key === "Enter") {
      setEditable(false);
      props.onEdited && props.onEdited(props.timetable.timetableId);
    }
  }

  // render
  return (
    <div className={`${styles.Timetable}`} onClick={clickHandler} onKeyDown={keyDownHandler}>
      <Container fluid={true} className='p-0 m-0 w-100 h-100'>
        <Row className='justify-content-center'>
          <Col xs={12} className='d-flex align-items-center justify-content-center'>
            <div style={{background: color}} className={styles.RandomColor}></div>
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <Col xs={8} className='d-flex align-items-center justify-content-center'>
            <div className={styles.Editable} contentEditable={editable} onChange={changeHandler}>
              {props.timetable.description}
            </div>
          </Col>
          <Col xs={4} className='d-flex align-items-center justify-content-center'> 
            <img 
              src={require("../../assets/images/editpen.png")} 
              alt="logo" 
              onClick={editHandler} 
              className={styles.EditPen}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
