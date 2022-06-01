// Copyright (c) 2022 Sri Lakshmi Kanthan P
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import styles from "./PlusButton.module.css";
import React from "react";

// Component Properties
interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

// component
export default function PlusButton(props: IProps) {
  // render the component
  return (
    <div className={styles.PlusButton} onClick={props.onClick}>+</div>
  );
}
