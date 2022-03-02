import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import {logOut} from '../Features/Login/login'

function Login() {
  const login = useSelector((state) => state.login.value);
  const dispatch =useDispatch()
  return (
    <div>
      <button className='px-4 py-2 rounded-xl  bg-cyan-500' onClick={() => dispatch(logOut())}>
        {login ? "logOut" : "login"}
      </button>
     <p className='p-4'> {login && "you login in my page"}</p>

    </div>
  );
}

export default Login