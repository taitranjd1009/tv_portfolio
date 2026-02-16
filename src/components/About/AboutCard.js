import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
	return (
		<Card className="quote-card-view">
			<Card.Body>
				<blockquote className="blockquote mb-0">
					<p style={{ textAlign: "justify" }}>
						Hi everyone! I’m{" "}
						<span className="purple">Phan Thi Tuong Vi</span> from{" "}
						<span className="purple">
							Binh Tan District, Ho Chi Minh City, Vietnam
						</span>
						.
						<br />
						I have graduated from the {" "}
						<span className="purple">
						University of Information Technology.
						</span>
						<br />and have professional experience working at{" "}
						<span className="purple">
						CloudGO Co., Ltd.
						</span>{" "}
						
						<br />
						<br />
						Outside of working hours:
					</p>

					<ul>
						<li className="about-activity">
							<ImPointRight /> Playing Badminton 🏸
						</li>
						<li className="about-activity">
							<ImPointRight /> Go for a walk 🚶‍♀️
						</li>
						<li className="about-activity">
							<ImPointRight /> Traveling and Exploring New Places
							🌍
						</li>
					</ul>

					{/* <p style={{ color: "rgb(155 126 172)" }}>
						"Strive to build things that make a difference!"{" "}
					</p>
					<footer className="blockquote-footer">Soumyajit</footer> */}
				</blockquote>
			</Card.Body>
		</Card>
	);
}

export default AboutCard;
