// Copyright (c) 2022 Sri Lakshmi Kanthan P
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { NavBar, Register as RComponent } from "../../components";
import { usePostUser, GetUser } from "../../apiclient/userAPI";
import { selectUserName, setUser } from "../../redux/slices";
import { useDispatch } from "react-redux";
import styles from "./Register.module.css";
import axios from "axios";
import { BASE_API_URL } from "../../constants";

// Register Page component
export default function Register() {
  // dispatcher
  const dispatch = useDispatch();

  // user post user
  const postUser = usePostUser()

  // sign in handler
  const signInHandler = async (username: string, password: string) => {
    const res = await axios.post(`${BASE_API_URL}/user/signin`, { username, password });

    if (res.status === 200) {
      dispatch(setUser({ 
        userId: res.data.id, userName: res.data.username, userToken: res.data.token, isAuthenticated: true 
      }));
    }
  }


  // sign up handler
  const signUpHandler = async (username: string, password: string) => {
    postUser.mutate({ user: { username, password } });
  }

  // render
  return (
    <main className={styles.Register}>
      <section className={styles.NavBar}>
        <NavBar />
      </section>
      <section className={styles.Main}>
        <RComponent onSignUp={signUpHandler} onSignIn={signInHandler} />
      </section>
    </main>
  );
}
