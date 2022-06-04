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
  onDeleteRequest?: (timetableId: number) => void;
  onEditRequest?: (timetableId: number) => void;
  onClicked?: (timetableId: number) => void;
  timetable: ITimetable;
}

// component
export default function Timetable(props: IProps) {
  // Component States
  const [description, setDescription] = useState(props.timetable.description);

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

  // delete handler
  const deleteHandler = (evt: React.MouseEvent<HTMLImageElement>) => {
    props.onDeleteRequest && props.onDeleteRequest(props.timetable.timetableId);
    evt.stopPropagation();
  }

  // Edit Handler
  const editHandler = (evt: React.MouseEvent<HTMLImageElement>) => {
    props.onEditRequest && props.onEditRequest(props.timetable.timetableId);
    evt.stopPropagation();
  }

  // key down handler
  const keyDownHandler = (evt: React.KeyboardEvent<HTMLDivElement>) => {
    if (evt.key === "Enter") {
      props.onEditRequest && props.onEditRequest(props.timetable.timetableId);
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
          <Col xs={8} className='d-flex align-items-center justify-content-center px-2'>
            <div className={styles.Editable} onChange={changeHandler}>
              {props.timetable.description}
            </div>
          </Col>
          <Col xs={4} className='d-flex align-items-center justify-content-center px-0'> 
            <img 
              src={require("../../assets/images/editpen.png")} 
              alt="logo" 
              onClick={editHandler} 
              className={styles.Icon}
            />
            <img 
              src={require("../../assets/images/delete.png")} 
              alt="logo" 
              onClick={deleteHandler} 
              className={styles.Icon}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
