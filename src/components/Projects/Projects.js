import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import CloudGO from "../../Assets/cloudgo.png";
import CloudWORK from "../../Assets/cloudwork.png";
import GCONNECT from "../../Assets/gconnect.jpg";
import CANHAN1 from "../../Assets/canhan1.png";
import CANHAN2 from "../../Assets/canhan2.jpg";
import CANHAN3 from "../../Assets/canhan3.jpg";
import CANHAN4 from "../../Assets/canhan4.png";

function Projects() {
	return (
		<Container fluid className="project-section">
			<Particle />
			<Container>
				<h1 className="project-heading">
 <strong className="purple">CloudGO Technology Co., Ltd. </strong>
				</h1>
				<p style={{ color: "white" }}>
				Here are the projects I have participated in.
				</p>
				<Row
					style={{ justifyContent: "center", paddingBottom: "10px" }}
				>
					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={GCONNECT}
							isBlog={false}
							title="MiniApp G-Connect"
							description="Worked directly with the CEO to gather business requirements and
analyze user needs.
Designed and analyzed UI/UX for modules including Events,
Membership Fees, Posts, and Products.
Analyzed user needs and service workflows to improve accessibility
and user experience for citizens."
demoLink="https://zalo.me/s/189206071144625035/"
							// ghLink="https://zalo.me/s/189206071144625035/"
							// demoLink="https://chatify-49.web.app/"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={CloudWORK}
							isBlog={false}
							title="CloudWORK/AI Agent iGO"
							description="Collaborated directly with the CEO to collect and clarify business
requirements.
Analyzed workflows and designed UI/UX for features such as search,
task creation and editing, customer management, and opportunity
management."
							// ghLink="https://play.google.com/store/apps/details?id=com.app.cloudgo&hl=vi"
							demoLink="https://play.google.com/store/apps/details?id=com.app.cloudgo&hl=vi"
							// demoLink="https://blogs.soumya-jit.tech/"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={CloudGO}
							isBlog={false}
							title="CRM – Gift Card Integration (Got It)"
							description="Analyzed business processes and requirements for integrating gift card
redemption from the CRM system with Got It.
Collaborated with stakeholders to define user flows, functional
requirements, and system interactions."
							// ghLink="https://github.com/tuongvi0221/OLAP"
							// demoLink="https://editor.soumya-jit.tech/"
						/>
					</Col>
				</Row>
			</Container>
			<Container>
				<h1 className="project-heading">
					 <strong className="purple">My Projects </strong>
				</h1>
				<p style={{ color: "white" }}>
				Here are some of the projects I developed during my university years.
				</p>
				<Row
					style={{ justifyContent: "center", paddingBottom: "10px" }}
				>
					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={CANHAN1}
							isBlog={false}
							title="Information system design analysis"
							description="Use StarUML and Draw.io to draw diagrams such as Usecase, Activity diagram, Sequence diagram, Class diagram, State,..."
							ghLink="https://github.com/tuongvi0221/Information_system_design_analysis"
							// demoLink="https://chatify-49.web.app/"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={CANHAN4}
							isBlog={false}
							title="Project Management"
							description="Project Planning & Scheduling, Risk Management, Cost Management, SOW & Project Charter, WBS & PDM, Critical Path Analysis, Business Case Analysis, Project Documentation & Diagram. "
							ghLink="https://github.com/tuongvi0221/Project_Manager"
							// demoLink="https://blogs.soumya-jit.tech/"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={CANHAN2}
							isBlog={false}
							title="Data Warehouse & OLAP"
							description="Built data pipelines using ETL (SSIS) and
OLAP models (SSAS/SSRS) to process and analyze large-scale UK
traffic accident data. Performed multidimensional analysis using
MDX and delivered trend analysis, performance reporting, and datadriven insights through dashboards and visualizations in Power BI,
Excel, and Looker to support decision-making."
							ghLink="https://github.com/tuongvi0221/OLAP"
							// demoLink="https://editor.soumya-jit.tech/"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={CANHAN3}
							isBlog={false}
							title="Business Data Analysis"
							description="Analyzed and forecasted fuel prices to
identify trends and support pricing and market-related decisionmaking."
							ghLink="https://github.com/tuongvi0221/Business_data_analytics"
						/>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}

export default Projects;
