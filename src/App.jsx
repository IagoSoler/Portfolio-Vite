import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Intro, Header, Navbar, About, Skills, Projects, Contact, Quizzical, Description, Career } from "./components"; 

function App() {
  const [language, setLanguage] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {!language && <Intro setLanguage={setLanguage} />}
              {language && (
                <div className="App">
                  <Header language={language} isVisible={isVisible}
                  setIsVisible={setIsVisible}/>
                  <Navbar setLanguage={setLanguage} language={language} setIsVisible={setIsVisible} />
                  <About language={language}/>
                  <Career language={language}/>
                  <Skills language={language} />
                  <Description language={language}/>
                  <Projects language={language} />
                  <Contact language={language} />
                 
                </div>
              )}
            </>
          }
        />
        <Route path="/quizzical" element={<Quizzical />} />
      </Routes>
    </Router>
  );
}

export default App;
