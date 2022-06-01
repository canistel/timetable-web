// Copyright (c) 2022 Sri Lakshmi Kanthan P
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Container } from 'react-bootstrap';
import styles from "./Schedule.module.css";
import React, { useState } from "react";

// Component IProps
interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  onClicked?: (timetableId: number) => void;
  onEdited?: (timetableId: number) => void;
  scheduleId: number;
  start: Date;
  end: Date;
  finished: Date;
  description: string;
  initiallyEditable: boolean;
}

// component
export default function Schedule( props: IProps ) {
  return (
    <div className={styles.Schedule}>
    </div>
  );
}
