// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Menu from "./pages/Menu";
// import About from "./pages/About.jsx";
// import Contact from "./pages/Contact.jsx";
// import Gallery from "./pages/Gallery.jsx";
// import Navbar from "./components/Navbar.jsx";
// import Footer from "./components/Footer.jsx";
// import "bootstrap/dist/css/bootstrap.min.css";

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <div className="container mt-4">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/menu" element={<Menu />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/gallery" element={<Gallery />} />
//         </Routes>
//       </div>
//       <Footer />
//     </Router>
//   );
// }

// export default App;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Gallery from "./pages/Gallery.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.body.className = darkMode ? "dark-theme" : "";
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <Router>
      <Navbar darkMode={darkMode} />
      <div className={`app ${darkMode ? "dark-theme" : ""}`}>
        <Button
          variant={darkMode ? "light" : "dark"}
          onClick={() => setDarkMode(!darkMode)}
          className="theme-toggle"
        >
          {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
        </Button>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
