
import React, { useState } from 'react';
import "./App.css"
function Calc() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');
  
    const handleInput = (e) => {
      setInput(input + e.target.value);
    };
  
    const handleClear = () => {
      setInput('');
      setResult('');
    };
  
    const handleCalculate = () => {
      setResult(eval(input));
    };
  return (
    <div>
          <div className="App">
            
      <div className="calculator">
           <div className="calcHeading">
                <h1>Calculator</h1>
            </div>
        <div className="display">
          <input type="text" value={input} disabled />
          <input type="text" value={result} disabled />
        </div>
        <div className="buttons">
          <button value="1" onClick={handleInput}>1</button>
          <button value="2" onClick={handleInput}>2</button>
          <button value="3" onClick={handleInput}>3</button>
          <button value="+" onClick={handleInput}>+</button>
          <button value="4" onClick={handleInput}>4</button>
          <button value="5" onClick={handleInput}>5</button>
          <button value="6" onClick={handleInput}>6</button>
          <button value="-" onClick={handleInput}>-</button>
          <button value="7" onClick={handleInput}>7</button>
          <button value="8" onClick={handleInput}>8</button>
          <button value="9" onClick={handleInput}>9</button>
          <button value="*" onClick={handleInput}>*</button>
          <button value="0" onClick={handleInput}>0</button>
          <button value="." onClick={handleInput}>.</button>
          <button value="/" onClick={handleInput}>/</button>
          <button onClick={handleClear}>C</button>
          <button onClick={handleCalculate}>=</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Calc