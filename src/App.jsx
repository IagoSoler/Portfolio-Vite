import React, { useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Intro, Header, Navbar, About, Skills, Projects, Contact, Quizzical, Description, Career } from "./components"; 

function App() {
  const [language, setLanguage] = useState("");

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
                  <Header language={language}/>
                  <Navbar setLanguage={setLanguage} language={language} />
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
