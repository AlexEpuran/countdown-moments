import React from "react";
import "./Particles.css";
import Particles from "react-particles-js";

function ParticlesMain() {
	return (
		<Particles
			params={{
				particles: {
					number: {
						value: 560,
						density: {
							enable: false,
						},
					},
					size: {
						value: 5,
						random: true,
					},
					move: {
						direction: "bottom",
						out_mode: "out",
					},
					line_linked: {
						enable: false,
					},
				},
				interactivity: {
					events: {
						onclick: {
							enable: true,
							mode: "remove",
						},
					},
					modes: {
						remove: {
							particles_nb: 10,
						},
					},
				},
			}}
		/>
	);
}
export default ParticlesMain;
