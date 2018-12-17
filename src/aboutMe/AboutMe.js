import React from "react";

const AboutMe = () => {
    return (
        <section id="about-me" class="container-fluid py-4">
			<section class="shapes">
				<section id="centre-grid" class="svg-shape">
					<section id="centre-target"></section>
					<svg class="svg-size">
						<rect id="diamond"/>
						<text id="diamond-text" x='100' y='100'>About Me</text>
					</svg>
				</section>
				<section id="top-left-grid" class="svg-shape">
					<section id="top-left-target"></section>
					<svg class="svg-size">
						<rect id="square"/>
						<text id="square-text">
							<tspan x="60" y="30"> Hi there. Thanks for </tspan>
							<tspan x="60" y="30" dy="25"> visiting my website. </tspan>
							<tspan x="60" y="30" dy="50"> My name is Hamish,</tspan>
							<tspan x="60" y="30" dy="75"> and I'm an </tspan>
							<tspan x="60" y="30" dy="100">aspiring web developer</tspan>
							<tspan x="60" y="30" dy="125">from Sydney.</tspan>
						</text>
					</svg>
				</section>
				<section id="top-right-grid" class="svg-shape">
					<section id="top-right-target"></section>
					<svg class="svg-size">
						<circle id="circle" />
						<text id="circle-text">
							<tspan x="95" y="30" dy="20">Before taking</tspan>
							<tspan x="85" y="30" dy="45">the plunge into</tspan> 
							<tspan x="75" y="30" dy="70">coding, I completed</tspan>
							<tspan x="65" y="30" dy="95">a bachelor of business,</tspan>
							<tspan x="70" y="30" dy="120">then spent 5 months</tspan>
							<tspan x="70" y="30" dy="145">as a scuba instructor.</tspan>
							<tspan x="115" y="30" dy="170"></tspan>
						</text>
					</svg>
				</section>
				<section id="bottom-right-grid" class="svg-shape">
					<section id="bottom-right-target"></section>
					<svg class="svg-size">
						<polygon id="triangle" points="150,20,50,220,250,220"/>
						<text id="triangle-text">
							<tspan x='135' y='100'>My</tspan>
							<tspan x='120' y='100' dy='25'>interets</tspan>
							<tspan x='115' y='100' dy='50'>include:</tspan>
							<tspan x='105' y='100' dy='75'>hiking, sports</tspan>
							<tspan x='95' y='100' dy='100'> and the ocean</tspan></text>
					</svg>
				</section>
			</section>
    );
};

export default AboutMe;