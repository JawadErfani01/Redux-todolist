import React from "react";
import { useDispatch,useSelector} from "react-redux";
import {

  removePersnoe,
clearList
} from "../Features/todoRedux/todoReducers";
function UserList({ handelUpdate }) {
const dispath =useDispatch();
const data = useSelector((state) => state.todo.data);
  return (
    <div>
      {data.length === 0 ? (
        <h1 className="text-2xl italic capitalize text-red-600">
          Your list is empaty
        </h1>
      ) : (
        data.map((persone, index) => {
          return (
            <div className="flex justify-center " key={index}>
              <div className=" flex justify-between items-center text-black  capitalize  border w-full md:w-2/3 px-10 p-2 rounded-lg  m-4 mb-1 bg-cyan-500">
                <h1>{persone.name}</h1>
                <h3 className="font-bold ">{persone.lastname}</h3>
                <button
                  className="bg-red-400 px-3 text-sm py-2 rounded-lg hover:scale-95 duration-300 hover:bg-red-500 shadow-lg cursor-pointer"
                  onClick={() => dispath(removePersnoe(persone.id))}
                >
                  Remove
                </button>
                <button
                  className="bg-green-400 px-3 text-sm py-2 rounded-lg hover:scale-95 duration-300 hover:bg-green-500 shadow-lg cursor-pointer"
                  onClick={() => handelUpdate(persone)}
                >
                  Updata
                </button>
              </div>
            </div>
          );
        })
      )}
      {data.length>0&&
      <button onClick={()=>dispath(clearList(data.length))} className="bg-red-400 px-4 m-4 text-sm py-3 rounded-lg hover:scale-95 duration-300 hover:bg-red-500 shadow-lg cursor-pointer">
        Clear List
      </button>}
    </div>
  );
}

export default UserList;
