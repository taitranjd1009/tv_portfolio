import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/tv.png";
// import Tilt from "react-parallax-tilt";

function Home2() {
	return (
		<Container fluid className="home-about-section" id="about">
			<Container>
				<Row>
					<Col md={8} className="home-about-description">
						<h1 style={{ fontSize: "2.6em" }}>
							LET ME <span className="purple"> INTRODUCE </span>{" "}
							MYSELF
						</h1>
						<p className="home-about-body">
							Data-driven Business Analyst with a strong
							foundation in
							<i>
								<b className="purple">
									{" "}
									SQL, Python, business analysis, and UI/UX
									design using Figma.{" "}
								</b>
							</i>
							I focus on analyzing and visualizing data to
							generate insights, translating them into functional
							requirements, recommendations, and actionable
							initiatives that support growth objectives.
							Experienced in business data analysis
							<i>
								<b className="purple">
									{" "}
									(housing prices, oil prices, and market
									trends), business process modeling using UML
									and draw.io{" "}
								</b>
							</i>
							and collaborating closely with stakeholders and
							technical teams to support decision-making and
							optimize operational efficiency.
						</p>
					</Col>
					<Col md={4} className="myAvtar">
						{/* <Tilt> */}
						<img
							src={myImg}
							className="home-about-img"
							alt="avatar"
						/>
						{/* </Tilt> */}
					</Col>
				</Row>
			</Container>
		</Container>
	);
}
export default Home2;
