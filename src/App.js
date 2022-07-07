import './App.css';
import { useState } from 'react';

function App() {

  const [amount, setAmount] = useState(0);
  const [flip, setFlip] = useState(false);

  const onChange = (event) => {
    setAmount(event.target.value);
  }

  const reset = ()=> setAmount(0);

  const onflip = () => {
    reset();
    setFlip((current) => !current);
  }
  return (
    <div className="App">
      <h1>Super Converter</h1>
      <label htmlFor="minutes">Minutes</label>
      <input
        id="minutes"
        type="number"
        placeholder="Minutes"
        value={flip ? amount * 60 : amount}
        disabled={flip}  
        onChange={onChange}
      />
        
      <label htmlFor="hours">Hours</label>
      <input
        id="hours"
        type="number"
        placeholder="Hours"
        value={flip ? amount : amount / 60}
        disabled={!flip} 
        onChange={onChange}
      />

      <button onClick={reset}>Reset</button>
      <button onClick={onflip}>Flip</button>

      
    </div>
  );
}

export default App;
