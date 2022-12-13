import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages//About/About.jsx";
import Login from "./pages/Login/Login.jsx";
import Navbar from "./pages/Shared/Navbar";
import Footer from "./pages/Shared/Footer.jsx";
import Appointment from "./pages/Appointment/Appointment.jsx";
import Register from "./pages/Login/Register";
function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="max-w-7xl mx-auto">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
