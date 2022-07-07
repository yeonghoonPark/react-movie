import './App.css';
import { useState } from 'react';

function App() {

  const [minutes, setMinutes] = useState(0);
  const [flip, setFlip] = useState(false);

  const onChange = (event) => {
    setMinutes(event.target.value);
  }

  const reset = ()=> setMinutes(0);

  const onflip = ()=> setFlip((current) => !current);

  return (
    <div className="App">
      <h1>Super Converter</h1>
      <label htmlFor="minutes">Minutes</label>
      <input
        id="minutes"
        type="number"
        placeholder="Minutes"
        value={minutes}
        onChange={onChange}
        disabled={flip}  
      />
        
      <label htmlFor="hours">Hours</label>
      <input
        id="hours"
        type="number"
        placeholder="Hours"
        value={minutes / 60}
        disabled={!flip} 
      />

      <button onClick={reset}>Reset</button>
      <button onClick={onflip}>Flip</button>
    </div>
  );
}

export default App;
