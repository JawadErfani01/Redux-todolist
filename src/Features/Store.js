import { configureStore } from "@reduxjs/toolkit";
import  counter  from './Counter/counter';
import login from './Login/login';


export const store =configureStore({
    reducer:{
        counter,
        login
    },
})
