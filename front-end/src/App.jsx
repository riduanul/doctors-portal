import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./pages/Shared/Navbar";
function App() {
  return (
    <div className="bg-[#f1f1f1] m-0 font-serif">
      <BrowserRouter>
        <div className="pages">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
