import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideMessage } from "../Features/todoRedux/todoReducers";

function Alert() {
  const message = useSelector((state) => state.todo.message);
  const dispath = useDispatch();
  useEffect(() => {
    const MyTime = setTimeout(() => {
      dispath(hideMessage());
    }, 3000);
    return () => {
      clearTimeout(MyTime);
    };
  }, []);

  return (
    <div>
      <h1
        className={`py-1.5 px-4 w-4/5 md:w-1/2 text-black capitalize text-lg shadow-lg shadow-green-700  ${
          message.type === "su" ? "bg-green-300" : "bg-red-400"
        } rounded-lg mx-auto `}
      >
        {message.mes}
      </h1>
    </div>
  );
}

export default Alert;
