import { useState, useEffect } from "react";

function App() {

  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  
  const onChange = (event) => setToDo(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === ""){
      return;
    }
    setToDos((currentToDos) => [toDo, ...currentToDos]);
    setToDo("");
  }
    
  useEffect(()=>{
    console.log(toDos);
  },[toDos])

  return (
    <div>
      <h1>My To Do List({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do.."
        />
        <button>Add To Do</button>
      </form>
    </div>
  );
}

export default App;
