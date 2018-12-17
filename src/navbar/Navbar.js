import React from "react";

const Navbar = () => {
    return (
        <nav class="navbar navbar-light sticky-top">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation" />
                <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand logo" href="#"><img src="images/logo.jpg" alt="Logo for Hamish Lees" /></a>

            <section class="collapse navbar-collapse">
                <section class="navbar-nav float-left text-left pr-3">
                    <a class="nav-item nav-link active"  href="#">Home <span class="sr-only">(current)</span></a>
                    <a class="nav-item nav-link" href="#about-me">About</a>
                    <a class="nav-item nav-link"  href="#previous-work">Previous Work</a>
                    <a class="nav-item nav-link" href="#contact">Contact</a>
                </section>
            </section>
        </nav>
    );
};
