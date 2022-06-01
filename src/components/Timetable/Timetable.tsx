// Copyright (c) 2022 Sri Lakshmi Kanthan P
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { ITimetable } from "../../interfaces";
import { Container } from 'react-bootstrap';
import styles from "./GetIn.module.css";
import React, { useState } from "react";

// Component IProps
interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  onClicked?: (timetableId: number) => void;
  onEdited?: (timetableId: number) => void;
  timetable: ITimetable;
  initiallyEditable: boolean;
}

// component
export default function Timetable(props: IProps) {
  // Component States
  const [description, setDescription] = useState(props.timetable.description);
  const [editable, setEditable] = useState(props.initiallyEditable);

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
    <div className={styles.Timetable} onClick={clickHandler} onKeyDown={keyDownHandler}>
      <Container className={styles.TimetableContainer}>
        <img src={require("../../assets/images/logo.png").default} alt="Logo" className='img-fluid mx-auto' />
        <div className={styles.TimetableContent}>
          <div contentEditable={editable} onChange={changeHandler}>{props.timetable.description}</div>
          <img src={require("../../assets/images/editpen.png").default} alt="logo" onClick={editHandler} />
        </div>
      </Container>
    </div>
  );
}
