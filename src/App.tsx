// Copyright (c) 2022 Sri Lakshmi Kanthan P
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Timetable, Homepage, Register, Schedule, Page404 } from "./routes";
import { Routes, Route } from "react-router-dom";
import React from "react";

// Application
export default function App() {
  return (
    <Routes>
      <Route path="/timetables/:timetableId" element={<Schedule/>} />
      <Route path="/timetables" element={<Timetable/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/" element={<Homepage/>}/>
      <Route path="*" element={<Page404/>}/>
    </Routes>
  );
}
