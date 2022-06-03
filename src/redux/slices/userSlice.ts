// Copyright (c) 2022 Sri Lakshmi Kanthan P
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/*********************
 *    State Type     *
 *********************/
interface UserState {
    userName: string | null;
    userId: string | null;
    userToken: string | null;
    isAuthenticated: boolean;
}

/*********************
 *  Initial State    *
 *********************/
const initialState: UserState = {
    userName: null,
    userId: null,
    userToken: null,
    isAuthenticated: false
}

/**********************
 *      selectors     *
 **********************/
export const selectUserName = (state: { user: UserState }) => state.user.userName;
export const selectUserId = (state: { user: UserState }) => state.user.userId;
export const selectUserToken = (state: { user: UserState }) => state.user.userToken;
export const selectIsAuthenticated = (state: { user: UserState }) => state.user.isAuthenticated;


/**********************
 *  Internal Actions  *
 *********************/
const _setUser = (state: UserState, action: PayloadAction<UserState>) => {
    state.userName = action.payload.userName;
    state.userId = action.payload.userId;
    state.userToken = action.payload.userToken;
    state.isAuthenticated = action.payload.isAuthenticated;
}

/********************
 *  Slice Creation  *
 *******************/

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: _setUser
    }
});

/*******************
 * export reducer  *
 *******************/
export default userSlice.reducer;

/******************
 * export actions *
 ******************/
export const { setUser } = userSlice.actions;
