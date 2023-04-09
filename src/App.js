import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Favourite from "./Components/Favourite";
import Login from "./Components/Login";
import { Route, Routes } from "react-router-dom";
import { useState, useContext, createContext } from "react";

const appContext = createContext();
function App() {
  const [gifs, setGifs] = useState([]);
  return (
    <>
      <appContext.Provider value={{ gifs, setGifs }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Favourite" element={<Favourite />} />
          <Route path="Login" element={<Login />} />
        </Routes>
      </appContext.Provider>
    </>
  );
}

export default App;
export { appContext };
