import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import {logOut} from '../Features/Login/login'

function Login() {
  const login = useSelector((state) => state.login.value);
  const userName = useSelector((state) => state.user.value);
  const dispatch =useDispatch()
console.log("login components rendered")


  return (
    <div>
      <button
        className="px-8 m-4 py-2 rounded-xl  bg-cyan-500"
        onClick={() => dispatch(logOut())}
      >
        {login ? "logOut" : "login"}
      </button>
      <p className="p-4 text-red-600"> {login && `${userName} you login in my page`}</p>
    </div>
  );
}

export default Login