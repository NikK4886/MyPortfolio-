import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./componets/Navbar.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/AboutMe.jsx";

import "./App.css";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/MyPortfolio-/" element={<Home />} />
        <Route path="/MyPortfolio-/about" element={<About />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;