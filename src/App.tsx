import React, { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState(0);

  const incrementHandler = () => {
    setValue(value + 1);
  };

  const setToLocalStorageHandler = () => {
    localStorage.setItem("counterValue", JSON.stringify(value));
    localStorage.setItem("counterValue2", JSON.stringify(value + 1));
  };

  const getFromLocalStorageHandler = () => {
    // setValue(JSON.parse(localStorage.getItem("counterValue")!))возможны ошибки, если NULLне будет показано в UI вообще ничего
    let valueAsString = localStorage.getItem("counterValue");
    if (valueAsString) {
      let newValue = JSON.parse(valueAsString);
      setValue(newValue);
    }
  };

  const clearLocalStorageHandler = () => {
    localStorage.clear();
    setValue(0);
  };

  const removeItemFromLocalStorageHandler = () => {
    localStorage.removeItem("counterValue2");
  };
  return (
    <div className="App">
      <h1>{value}</h1>
      <button onClick={incrementHandler}>increment</button>
      <button onClick={setToLocalStorageHandler}>setTolocalStorage</button>
      <button onClick={getFromLocalStorageHandler}>getFromLocalStorage</button>
      <button onClick={clearLocalStorageHandler}>clearLocalStorage</button>
      <button onClick={removeItemFromLocalStorageHandler}>
        removeFromLocalStorage
      </button>
    </div>
  );
}

export default App;
