import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Favourite from "./Components/Favourite";
import Login from "./Components/Login";

import { Route, Routes } from "react-router-dom";
import { GifProvider } from "./Components/GifProvider.js";
import { GifContext } from "./Components/GifProvider.js";
import { useContext } from "react";
function App() {
  const { favt, setFavt } = useContext(GifContext);
  return (
    <GifProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Favourite" element={<Favourite />} />
        <Route path="Login" element={<Login />} />
      </Routes>
    </GifProvider>
  );
}

export default App;
