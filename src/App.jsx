import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Intro, Header, Navbar, About, Skills, Projects, Contact, Quizzical, Description, Career } from "./components"; 

function App() {
  const [language, setLanguage] = useState("");
  const [areVisible,setAreVisible] = useState({
    header:true,
    about:false,
    career:false,
    skills:false,
    description:false,
    projects:false
  })

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
                  <Header language={language} isVisible={areVisible.header} setIsVisible={(visible)=>setAreVisible(prev=>({...prev,header:visible}))}/>
                  <Navbar setLanguage={setLanguage} language={language} setAreVisible={setAreVisible} />
                  <About language={language} isVisible={areVisible.about} setIsVisible={()=>setAreVisible(prev=>({...prev,about:!prev.about}))}/>
                  <Career language={language} isVisible={areVisible.career} setIsVisible={()=>setAreVisible(prev=>({...prev,career:!prev.career}))}/>
                  <Skills language={language} isVisible={areVisible.skills} setIsVisible={()=>setAreVisible(prev=>({...prev,skills:!prev.skills}))} />
                  <Description language={language} isVisible={areVisible.description} setIsVisible={()=>setAreVisible(prev=>({...prev,description:!prev.description}))}/>
                  <Projects language={language} isVisible={areVisible.projects} setIsVisible={()=>setAreVisible(prev=>({...prev,projects:!prev.projects}))} />
                  <Contact language={language}  />
                 
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
