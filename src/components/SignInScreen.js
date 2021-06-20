import React, { useRef } from "react";
import "./assets/SignInScreen.css";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

function SignInScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const dispatch = useDispatch();

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((userAuth) => {
        // dispatch(
        //   login({
        //     uid: userAuth.uid,
        //     email: userAuth.email,
        //   })
        // );
      })
      .catch((err) => alert(err));
  };
  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((userAuth) => {
        // dispatch(
        //   login({
        //     uid: userAuth.uid,
        //     email: userAuth.email,
        //   })
        // );
      })
      .catch((err) => alert(err));
  };

  return (
    <div className="signInScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className="signInScreen_gray">New here? </span>
          <span className="signInScreen_link" onClick={register}>
            Register Now!
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignInScreen;
