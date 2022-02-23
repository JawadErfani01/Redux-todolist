
import Counter from './Components/Counter';
import Login from './Components/Login';
import Myform from './Components/Myform';
function App() {
  console.log("App components rendered")

  return (
    <div className="text-center p-6 text-white  bg-slate-800">
      <h1 className="text-4xl capitalize ">Redux tutorile</h1>
      <Counter/>
      <Login/>
      <Myform/>
    </div>
  );
}

export default App;
