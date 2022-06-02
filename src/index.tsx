// Copyright (c) 2022 Sri Lakshmi Kanthan P
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

// root element
const root = document.getElementById("root");

// render
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, root);
