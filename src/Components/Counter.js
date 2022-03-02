import React from "react";
import {
  increment,
  decrement,
  incrementByAmount,

} from "../Features/Counter/counter";
import { useSelector, useDispatch } from "react-redux";

function Counter() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col font-serif justify-center items-center">
      <p>Cunter : {counter}</p>
      <button
        className="px-6 my-2  py-2  bg-blue-500 rounded-xl  "
        onClick={() => dispatch(increment())}
      >
        +
      </button>
      <button
        className="px-6 my-2  py-2  bg-blue-500 rounded-xl  "
        onClick={() => dispatch(decrement())}
      >
        -
      </button>{" "}
      <button
        className="px-6 my-2  py-2  bg-blue-500 rounded-xl  "
        onClick={() => dispatch(incrementByAmount(10))}
      >
        Plase++
      </button>
     
    </div>
  );
}

export default Counter;
