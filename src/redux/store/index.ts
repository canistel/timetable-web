// Copyright (c) 2022 Sri Lakshmi Kanthan P
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../slices";

// create store
const store = configureStore({
    reducer: rootReducer
});

// export store
export default store;
