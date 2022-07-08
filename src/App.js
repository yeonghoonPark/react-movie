import './App.css';
import { useState } from 'react';

function MinutesToHours() {
  const [amount, setAmount] = useState(0);
  const [inverted, setInverted] = useState(false);

  const onChange = (event) => {
    setAmount(event.target.value);
  }

  const reset = () => setAmount(0);

  const oninverted = () => {
    reset();
    setInverted((current) => !current);
  }
  return (
    <>
      <label htmlFor="minutes">Minutes</label>
      <input
        id="minutes"
        type="number"
        placeholder="Minutes"
        value={inverted ? amount * 60 : amount}
        disabled={inverted}
        onChange={onChange}
      />

      <label htmlFor="hours">Hours</label>
      <input
        id="hours"
        type="number"
        placeholder="Hours"
        value={inverted ? amount : amount / 60}
        disabled={!inverted}
        onChange={onChange}
      />

      <button onClick={reset}>Reset</button>
      <button onClick={oninverted}>{inverted ? 'Convert from minutes to hours' : 'Convert from hours to minutes'}</button>
    </>
  );
}

function KmToMiles() {
  const [amount, setAmount] = useState(0);
  const [flip, setFlip] = useState(false);

  const onChange = (event)=>{
    setAmount(event.target.value);
  }

  const reset = ()=>{
    setAmount(0);
  }

  const onFlip =()=>{
    reset();
    setFlip((currentBoolean) => !currentBoolean)
  }

  return (
    <>
      <label htmlFor="km">Km</label>
      <input 
        type="number" 
        id="km"
        placeholder="Km" 
        value={flip ? amount / 1.60934 : amount}
        disabled={flip}
        onChange={onChange}
      />
      <label htmlFor="miles">Miles</label>
      <input 
        type="number" 
        id="miles"
        placeholder="Miles" 
        value={flip ? amount : amount * 1.60934}
        disabled={!flip}
        onChange={onChange}
      />
      <button onClick={reset}>Reset</button>
      <button onClick={onFlip}>{flip ? 'Convert from Km to Miles' : 'Convert from Miles to Km'}</button>
    </>
  );
}

function App() {

  const [index, setIndex] = useState('x');

  const onSelect = (event) => {
    setIndex(event.target.value);
  }

  return (
    <div className="App">
      <h1>Super Converter</h1>
      <select onChange={onSelect}>
        <option value="x">Select your units</option>
        <option value="0">Minutes & Hours</option>
        <option value="1">Km & Miles</option>
      </select>
      <hr />
      {index === '0' ? <MinutesToHours /> : null}
      {index === '1' ? <KmToMiles /> : null}
    </div>
  );
}

export default App;
