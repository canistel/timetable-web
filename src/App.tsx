// Copyright (c) 2022 Sri Lakshmi Kanthan P
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT


import { Timetable, Homepage, Register, Schedule, Page404 } from "./routes";
import { selectIsAuthenticated } from "./redux/slices";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import React from "react";

// Application
export default function App() {
  // is authenticated
  const isAuthenticated = useSelector(selectIsAuthenticated);

  // component
  let component = <></>;

  // authed
  if (isAuthenticated) {
    component = (
      <Routes>
        <Route path="/timetables/:timetableId" element={<Schedule />} />
        <Route path="/timetables" element={<Timetable />} />
        <Route path="/register" element={<Timetable />} />
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    );
  } else {
    component = (
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    );
  }

  // render
  return (
    <React.Fragment>
      {component}
    </React.Fragment>
  );
}
