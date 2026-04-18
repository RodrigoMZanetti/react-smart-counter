import React, { useCallback, useState } from "react";
import "./App.css";

const Toolbar = React.memo(function Toolbar(props) {
  console.log("Toolbar rendered");
  return (
    <button className="toolbar-button" onClick={props.onIncrement}>
      Increment
    </button>
  );
});

function App() {
  const [counter, setCounter] = useState(0);
  const [theme, setTheme] = useState("dark");

  const handleSum = useCallback(() => {
    setCounter((prev) => prev + 1);
  }, []);

  function handleChangeTheme() {
    return setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div className={`app ${theme}`}>
      <div className="container">
        <div className="buttons">
          <button type="button" onClick={handleSum}>
            Add +1
          </button>
          <p>Counter: {counter}</p>
          <button type="button" onClick={handleChangeTheme}>
            Change the theme
          </button>
          <p>Current Theme: {theme}</p>
        </div>
        <Toolbar onIncrement={handleSum} />
      </div>
    </div>
  );
}

export default App;
