import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Insurance from "./pages/Insurance";
import Investments from "./pages/Investment";
import Retirement from "./pages/Retirement";
import Footer from "./components/Footer";
import Header from "./components/Header";
function App() {

  return (
    <Router>
      <div className="MGG-Financial">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/investments" element={<Investments />} />
          <Route path="/retirement" element={<Retirement />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App