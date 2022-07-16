import { useState, useEffect } from "react";

function App() {

  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChange = (event) => setToDo(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    // useState의 set함수에서 함수를 보낼 경우 함수의 첫번째 argument는 현재의 state이다.
    // {}중괄호가 없을 경우에는 return 생략 가능.
    setToDos((currentArray) => {
      return [...currentArray, toDo]
    });
    setToDo("")
  }

  useEffect(() => {
    console.log(toDos);
  }, [toDos])

  return (
    <div>
      <h1>To Do List({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Write Your To Do"
          onChange={onChange}
          value={toDo}
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
      {
        toDos.map((item, index) => {
         return <li key={index}>{item.toUpperCase()}</li>;
        })
      }
      </ul>
    </div>
  );
}

export default App;
