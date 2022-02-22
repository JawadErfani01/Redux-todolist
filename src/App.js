
import Counter from './Components/Counter';
import Login from './Components/Login';
function App() {

  return (
    <div className="text-center p-6 text-white  h-screen bg-slate-800">
      <h1 className="text-4xl capitalize ">Redux tutorile</h1>
      <Counter/>
      <Login/>
    </div>
  );
}

export default App;
