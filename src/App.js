import { useEffect, useState } from "react";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import PokemonPage from "./pages/PokemonPage";
import sun from "./assets/img/sun.png";
import moon from "./assets/img/moon.png";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <>
      <Navbar />
      <div className={`app ${theme}`}>
        <button className="lightBtn" onClick={toggleTheme}>
          {theme === "dark" ? (
            <img className="img" src={moon} alt="moon" />
          ) : (
            <img className="img" src={sun} alt="sun" />
          )}
        </button>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/:name" element={<PokemonPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
