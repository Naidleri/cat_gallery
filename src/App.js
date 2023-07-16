import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery"
import Detailkucing from "./component/detailkucing/detailkucing";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/detailkucing/:jenis" element={<Detailkucing/>} />
      </Routes>
    </Router>
  );
};

export default App;
