import React from "react";
import './floatingLinks.css';

const FloatingLinks = () => {
    return (
		<section class="floating-links">
            <section id="float-about">
                <a id='1' href="#about-me"><p>About</p></a>
            </section>
            <section id="float-previous">
                <a id='2' href="#previous-work"><p>Projects</p></a>
            </section>
            <section id="float-contact">
                <a id='3' href="#contact"><p>Contact</p></a>
            </section>
        </section>
    );
};

export default FloatingLinks;