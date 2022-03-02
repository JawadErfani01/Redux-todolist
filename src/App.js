import { useSelector, useDispatch } from "react-redux";

import {
  increment,
  decrement,
  signIn,
  multi,
  reset,
  plase,
} from "./actions/index";
function App() {
  const counter = useSelector((state) => state.counter);
  const login = useSelector((state) => state.login);
  const dispath = useDispatch();
  return (
    <main className="flex flex-col font-serif justify-center items-center text-white  h-screen bg-slate-800">
      <h1 className="text-4xl capitalize ">Redux tutorile</h1>
<<<<<<< HEAD
<<<<<<< HEAD
      <Counter/>
      <Login/>
    </div>

=======
=======
>>>>>>> parent of 12b5a90... first versioin of redux toolkit projects
      <p>Cunter : {counter}</p>
      <button
        className="px-6 my-2  py-2  bg-blue-500 rounded-xl  "
        onClick={() => dispath(increment())}
      >
        +
      </button>
      <button
        className="px-6 my-2  py-2  bg-blue-500 rounded-xl  "
        onClick={() => dispath(decrement())}
      >
        -
      </button>
      <button
        className="px-6 my-2  py-2  bg-blue-500 rounded-xl  "
        onClick={() => dispath(multi())}
      >
        *
      </button>
      <button
        className="px-6 my-2  py-2  bg-blue-500 rounded-xl  "
        onClick={() => dispath(reset())}
      >
        Reset
      </button>
      <button
        className="px-6 my-2  py-2  bg-blue-500 rounded-xl  "
        onClick={() => dispath(plase())}
      >
        plase10
      </button>
      <button
        className="px-6 my-2  py-2  bg-blue-500 rounded-xl  "
        onClick={() => dispath(signIn())}
      >
        {login ? "logOut" : "Login"}
      </button>

      {login
        ? "You sign in to my page now you can see everytings"
        : "To see samtings you have to login first"}
    </main>
<<<<<<< HEAD
>>>>>>> parent of 12b5a90... first versioin of redux toolkit projects
=======
>>>>>>> parent of 12b5a90... first versioin of redux toolkit projects
  );
}

export default App;
