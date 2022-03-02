import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handelform } from "../Features/user";
function Myform() {
  const user = useSelector((state) => state.user.value);
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [Name, setName] = useState("");
  const [lastName, setlastName] = useState("");
  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(handelform({Name,lastName}));
    setName("");
    setlastName("");
  };
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          name="name"
          value={Name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name..."
          className="px-4 py-2 outline-none text-black  rounded-l-lg"
        />{" "}
        <input
          type="text"
          name="lastname"
          value={lastName}
          onChange={(e) => setlastName(e.target.value)}
          placeholder="lastName..."
          className="px-4 py-2 outline-none text-black  rounded-l-lg"
        />
        <button className="px-4 py-2 bg-cyan-400 rounded-r-lg">Submit</button>
      </form>
      <p>Name :{user.name}</p>
      <p>lastName :{user.lastname}</p>
      <p>Counter2 :{counter}</p>
    </div>
  );
}

export default Myform;
