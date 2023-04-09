import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Favourite from "./Components/Favourite";
import Login from "./Components/Login";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [favt, setFavt] = useState([]);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home favtdata={favt} setfavt={setFavt} />} />
        <Route
          path="Favourite"
          element={<Favourite favtdata={favt} setfavt={setFavt} />}
        />
        <Route path="Login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
