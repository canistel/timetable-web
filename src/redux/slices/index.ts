// Copyright (c) 2022 Sri Lakshmi Kanthan P
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import userSlice, { selectUserId, selectUserName, selectUserToken, selectIsAuthenticated, setUser } from "./userSlice";
import { combineReducers } from "@reduxjs/toolkit";

// create root reducer
const rootReducer = combineReducers({
    user: userSlice
});

// export root reducer
export default rootReducer;

// export actions
export { setUser };

// export selectors
export { selectUserId, selectUserName, selectUserToken, selectIsAuthenticated };
