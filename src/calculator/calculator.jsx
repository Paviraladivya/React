import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [input, setInput] = useState("");

  const buttons = [
    "1", "2", "3",
    "4", "5", "6",
    "7", "8", "9",
    "0", "+", "-", "*", "/", "=",
    "Reset","(",")","$","delete"
  ];

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        setInput(String(eval(input)));  
      } catch {
        setInput("Error");
      }
    } else if (value === "Reset") {
      setInput("0"); 
    } else if (value === "delete") {
      setInput(input.slice(0, -1)); 
    } else {
      setInput(input + value); 
    }
  };

  return (
    <div className="calculator-container">
      <input 
        type="text" 
        className="calculator-input"
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Enter your numbers"
      />

      <div className="buttons-container">
        {buttons.map((button, index) => (
          <button 
            key={index} 
            onClick={() => handleButtonClick(button)}
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
