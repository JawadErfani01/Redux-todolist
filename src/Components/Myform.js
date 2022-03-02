

function Myform() {

  return (
    <div>
      <form >
        <input
          type="text"
          name="name"
          
          placeholder="Name..."
          className="px-4 py-2 outline-none text-black  rounded-l-lg"
        />{" "}
        <input
          type="text"
          name="lastname"
        
          placeholder="lastName..."
          className="px-4 py-2 outline-none text-black  rounded-l-lg"
        />
        <button className="px-4 py-2 bg-cyan-400 rounded-r-lg">Submit</button>
      </form>
      
    </div>
  );
}

export default Myform;
