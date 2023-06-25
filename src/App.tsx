import { useState } from "react";
import "./App.css";

function App() {
  const [activeTheme, setActiveTheme] = useState("day");
  const [activeThemeBack, setActiveThemeBack] = useState("back_day");

  function modeFunction(theme: string) {
    setActiveThemeBack(`back_${theme}`);
    setActiveTheme(theme);
  }

  return (
    <>
      <div
        className={`circle ${activeTheme} ${activeThemeBack}`}
        onClick={() => modeFunction(activeTheme == "day" ? "night" : "day")}
      ></div>
    </>
  );
}

export default App;
