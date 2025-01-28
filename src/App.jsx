import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./index.css";

function App() {
  
  const [theme , setTheme ] =useState(localStorage.getItem('theme')||'light');


  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };
  
  useEffect(()=>{
    if(theme==='dark'){
      document.documentElement.classList.add('dark');

    }
    else{
      document.documentElement.classList.remove('dark');

    }
  } ,[theme]);

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white dark:bg-[#001220]  transition-colors duration-300">
        <Header theme={theme} toggleTheme={toggleTheme} />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
