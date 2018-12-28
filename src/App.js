import React from "react";
// import Navbar from "./Navbar";
import FloatingLinks from "./floatingLinks/FloatingLinks";
import LandingPage from "./landingPage/LandingPage";
import Skills from "./skills/Skills";

const App = () => {
    return (
        <div>
            <FloatingLinks />
            <LandingPage />
            <Skills />
        </div>
    );
};

export default App;