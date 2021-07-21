import Todo from "./Components/Todo";
console.log(Date().length);
function App() {
  return (
    <div className="text-center  p-6 text-white min-h-screen  bg-slate-900">
      <h1 className="text-4xl my-6 capitalize ">Redux TodoList</h1>
      <Todo />
    </div>
  );
}

export default App;
