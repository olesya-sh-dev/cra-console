import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const valueAsString = localStorage.getItem("counterValue");
  const initialValue = valueAsString ? JSON.parse(valueAsString) : 0;
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    localStorage.setItem("counterValue", JSON.stringify(value));
  }, [value]);

  // useEffect(() => {
  //   let valueAsString = localStorage.getItem("counterValue");
  //   if (valueAsString) {
  //     let newValue = JSON.parse(valueAsString);
  //     setValue(newValue);
  //   }
  // }, []);

  const incrementHandler = () => {
    setValue(value + 1);
  };

  return (
    <div className="App">
      <h1>{value}</h1>
      <button onClick={incrementHandler}>increment</button>
    </div>
  );
}

export default App;
