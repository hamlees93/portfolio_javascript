import React from "react";
import './landingPage.css';

const LandingPage = () => {
    return (
        <section id="home" class="container-fluid d-flex align-items-center">
			<section class="home-screen">
				<section class="container text-center middle-picture">
					<img class="rounded mx-auto landing-image middle" src="images/forward.jpg" alt="Picture of aspiring-developer, Hamish Lees, in a turtle neck" />
				</section>
				<section class="container tagline justify-content-center">
					<h1 class="name-title">Hamish Lees</h1>
					<h2 class="job-title">Aspiring Developer</h2>
				</section>
			</section>
		</section>
    );
};

export default LandingPage;