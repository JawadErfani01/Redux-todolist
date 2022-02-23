import { configureStore } from "@reduxjs/toolkit";
import  counter  from './Counter/counter';
import login from './Login/login';
import  user  from './Users/user';


export const store =configureStore({
    reducer:{
        counter,
        login,
        user
    },
})
