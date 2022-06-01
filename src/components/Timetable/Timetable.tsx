// Copyright (c) 2022 Sri Lakshmi Kanthan P
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Container } from 'react-bootstrap';
import styles from "./GetIn.module.css";
import React, { useState } from "react";

// Component IProps
interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  onClicked?: (timetableId: number) => void;
  onEdited?: (timetableId: number) => void;
  timetableId: number;
  description: string;
  initiallyEditable: boolean;
}

// component
export default function Timetable(props: IProps) {
  // component states
  const [description, setDescription] = useState(props.description);
  const [editable, setEditable] = useState(props.initiallyEditable);

  // Change Handler
  const changeHandler = (evt: React.ChangeEvent<HTMLDivElement>) => {
    setDescription(evt.currentTarget.textContent ?? description);
  }

  // Click Handler
  const clickHandler = () => {
    props.onClicked && props.onClicked(props.timetableId);
  }

  // Edit Handler
  const editHandler = () => {
    setEditable(true);
  }

  // render
  return (
    <div className={styles.Timetable} onClick={clickHandler}>
      <Container className={styles.TimetableContainer}>
        <img src={require("../../assets/images/logo.png").default} alt="Logo" className='img-fluid mx-auto' />
        <div className={styles.TimetableContent}>
          <div contentEditable={editable} onChange={changeHandler}>{props.description}</div>
          <img src={require("../../assets/images/editpen.png").default} alt="logo" onClick={editHandler} />
        </div>
      </Container>
    </div>
  );
}
