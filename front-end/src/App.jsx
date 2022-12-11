import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages//About/About.jsx";
import Login from "./pages/Login/Login.jsx";
import Navbar from "./pages/Shared/Navbar";
function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="pages">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
