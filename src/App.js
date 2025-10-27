// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Chill from "./pages/Chill";
import Focus from "./pages/Focus";
import Adventure from "./pages/Adventure";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chill" element={<Chill />} />
        <Route path="/focus" element={<Focus />} />
        <Route path="/adventure" element={<Adventure />} />
      </Routes>
    </Router>
  );
}
