import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
// import Navbar from "./Navbar";
import FloatingLinks from "./floatingLinks/FloatingLinks";
import LandingPage from "./landingPage/LandingPage";
import Skills from "./skills/Skills";

const App = () => {
    return (
        <section>
            <BrowserRouter>
                <section>
                    <Route 
                        exact 
                        path="/skills"
                        render={() => {
                            return <Skills />
                        }}
                    />
                    <FloatingLinks />
                    <LandingPage />
                    {/* <Skills /> */}
                </section>
            </BrowserRouter>
        </section>
    );
};

export default App;