import React from "react";
import { Link } from "react-router-dom";
import './floatingLinks.css';

const FloatingLinks = () => {
    return (
        <section>
            <section class="floating-links">
                <section id="float-about">
                    <Link to="/skills">
                        <button>Skills</button>
                    </Link>
                    {/* <a id='1' href="#about-me"><p>About</p></a> */}
                </section>
                <section id="float-previous">
                    <Link to="/previous_work">
                        <button>Previous Work</button>
                    </Link>
                    {/* <a id='2' href="#previous-work"><p>Projects</p></a> */}
                </section>
                <section id="float-contact">
                    <Link to="/contact">
                        <button>Contact Me</button>
                    </Link>
                    {/* <a id='3' href="#contact"><p>Contact</p></a> */}
                </section>
            </section>
        </section>
    );
};

export default FloatingLinks;