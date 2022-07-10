import './App.css';
import { useState, memo } from 'react';
import PropTypes from 'prop-types';

// Components
function MinutesToHours() {
  const [amount, setAmount] = useState(0);
  const [inverted, setInverted] = useState(false);

  const onChange = (event) => {
    setAmount(event.target.value);
  }

  const reset = () => setAmount(0);

  const onInverted = () => {
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
      <button onClick={onInverted}>{inverted ? 'Convert from minutes to hours' : 'Convert from hours to minutes'}</button>
    </>
  );
}

function KmToMiles() {
  const [amount, setAmount] = useState(0);
  const [inverted, setInverted] = useState(false);

  const onChange = (event) => {
    setAmount(event.target.value);
  }

  const reset = () => {
    setAmount(0);
  }

  const onInverted = () => {
    reset();
    setInverted((currentBoolean) => !currentBoolean)
  }

  return (
    <>
      <label htmlFor="km">Km</label>
      <input
        type="number"
        id="km"
        placeholder="Km"
        value={inverted ? amount * 1.609 : amount}
        disabled={inverted}
        onChange={onChange}
      />
      <label htmlFor="miles">Miles</label>
      <input
        type="number"
        id="miles"
        placeholder="Miles"
        value={inverted ? amount : amount / 1.609}
        disabled={!inverted}
        onChange={onChange}
      />
      <button onClick={reset}>Reset</button>
      <button onClick={onInverted}>{inverted ? 'Convert from Km to Miles' : 'Convert from Miles to Km'}</button>
    </>
  );
}

function Btn({ text, big, changeValue, fontWeight }) {
  console.log(text, '= was render');
  return <button
    onClick={changeValue}
    style={{
      backgroundColor: 'tomato',
      color: '#ffffff',
      padding: '10px 20px',
      border: 0,
      borderRadius: 10,
      fontSize: big ? '2rem' : '1rem',
      fontWeight
    }}
  >
    {text}
  </button>
}

// PropTypes
Btn.propTypes = {
  text: PropTypes.string.isRequired,
  big: PropTypes.bool,
  changeValue: PropTypes.func,
  fontWeight: PropTypes.number
}

// Memorize
const MemorizedBtn = memo(Btn);

function App() {

  const [index, setIndex] = useState('x');

  const onSelect = (event) => {
    setIndex(event.target.value);
  }

  const [value, setValue] = useState('Save Changes');
  const changeValue = (event) => {
    setValue('Revert Changes');
    event.target.style.backgroundColor = '#f00';
  }

  return (
    <div className="App">
      <h1>Super Converter</h1>
      <select onChange={onSelect}>
        <option value={index}>Select your units</option>
        <option value="0">Minutes & Hours</option>
        <option value="1">Km & Miles</option>
      </select>
      <hr />
      {index === '0' ? <MinutesToHours /> : null}
      {index === '1' ? <KmToMiles /> : null}
      <hr />
      <MemorizedBtn text={value} big={true} changeValue={changeValue} />
      <MemorizedBtn text='Continue' big={false} />

      <MemorizedBtn text='fontWeight' />
    </div>
  );
}

export default App;
