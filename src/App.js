import Header from "./Components/Header";
import Home from "./Components/Home";
import Favourite from "./Components/Favourite";
import ContactUs from "./Components/ContactUs";
import { Route, Routes } from "react-router-dom";
import { GifProvider } from "./Components/GifProvider.js";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <GifProvider>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Favourite" element={<Favourite />} />
          <Route path="ContactUs" element={<ContactUs />} />
        </Routes>
        <Footer />
      </GifProvider>
    </>
  );
}

export default App;
