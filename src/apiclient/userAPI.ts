// Copyright (c) 2022 Sri Lakshmi Kanthan P
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { BASE_API_URL } from "../constants";
import { useQuery, useMutation } from "react-query";
import axios from "axios";


export function usePatchUser() {
  return useMutation((data: {userId: string, jwt: string, user: { username?: string, password?: string }}) => {
    return axios.patch(`${BASE_API_URL}/user/${data.userId}`, data.user, {
      headers: { Authorization: `Bearer ${data.jwt}` }
    });
  });
}

export function usePostUser() {
  return useMutation((data: { user: { username: string, password: string } }) => {
    return axios.post(`${BASE_API_URL}/user/`, data.user);
  });
}

export function useDeleteUser() {
  return useMutation((data: {userId: string, jwt: string}) => {
    return axios.delete(`${BASE_API_URL}/user/${data.userId}`, {
      headers: { Authorization: `Bearer ${data.jwt}` }
    });
  });
}

export function GetUser(jwt: string) {
  return useQuery([`${BASE_API_URL}/user/`], () => {
    return axios.get(`${BASE_API_URL}/user`, {
      headers: { Authorization: `Bearer ${jwt}` }
    });
  });
}
