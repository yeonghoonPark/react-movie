import './App.css';

function App() {

  let count = 0;

  function handleClick(){
    count = count + 1;
    const span = document.querySelector('span');
    span.innerText = `Total click: ${count}`;
  }

  return (
    <div className="App">
      <span style={{color:'tomato'}}>Total click: 0</span>
      <button onClick={handleClick} onMouseEnter={handleClick}>Click</button>
    </div>
  );
}

export default App;
