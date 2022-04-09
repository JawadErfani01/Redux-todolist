import { useDispatch, useSelector } from "react-redux";
import {
  handelData,
  removePersnoe,
  updatePersnoe,
} from "../Features/todoRedux/todoReducers";
import { useState, useRef, useEffect } from "react";
import UserList from "./UserList";
import Alert from "./Alert";

function Myform() {
  const ref = useRef();

  const data = useSelector((state) => state.todo.data);
  const edit = useSelector((state) => state.todo.edit);
  const show = useSelector((state) => state.todo.show);
  const dispatch = useDispatch();
  const [name, setname] = useState("");
  const [lastname, setlastname] = useState("");
  const newobj = {
    name,
    lastname,
  };

  const handelclick = (e) => {
    e.preventDefault();
 
      dispatch(handelData(newobj));
      setname("");
      setlastname("");
      ref.current.focus();
  };
  const handelUpdate = (UpPersone) => {
    setname(UpPersone.name);
    setlastname(UpPersone.lastname);
    dispatch(updatePersnoe(UpPersone.id));
    ref.current.focus();
  };



  return (
    <div>
      {show && <Alert />}
      <form
        className="flex  rounded-lg flex-col justify-center  shadow-2xl shadow-gray-800 mx-auto my-6 bg-gray-700 md:w-2/6 p-6 py-10 items-center "
        onSubmit={handelclick}
      >
        <h2 className="capitalize text-xl mb-3 font-semibold text-gray-200">
          add new todo
        </h2>
        <input
          ref={ref}
          type="text"
          name="name"
          required
          placeholder="Name..."
          className="px-4 py-1.5 outline-none text-black my-4 w-full rounded-2xl"
          onChange={(e) => setname(e.target.value)}
          value={name}
        />
        <input
          type="text"
          name="lastname"
          required
          placeholder="lastName..."
          onChange={(e) => setlastname(e.target.value)}
          value={lastname}
          className="px-4 py-1.5  outline-none text-black mb-4 w-full rounded-2xl"
        />
        <input
          type="submit"
          value={edit ? "Edit" : "Add Todo"}
          className="px-4 py-1.5 hover:scale-95 duration-300 hover:bg-cyan-500 shadow-lg cursor-pointer bg-cyan-400 rounded-2xl w-1/2"
        />
      </form>
      <UserList
        data={data}
        handelUpdate={handelUpdate}
      />
    </div>
  );
}

export default Myform;
