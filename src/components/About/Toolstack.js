import React from "react";
import { Col, Row } from "react-bootstrap";
import macOs from "../../Assets/TechIcons/Apple MacOSX.svg";
import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import BI from "../../Assets/TechIcons/BI.svg";
import excel from "../../Assets/TechIcons/Excel.svg";
import figma from "../../Assets/TechIcons/Figma.svg";
import drawIo from "../../Assets/TechIcons/DrawIO.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={macOs} alt="macOs" className="tech-icon-images" />
        <div className="tech-icons-text">Mac Os</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={chrome} alt="Chrome" className="tech-icon-images" />
        <div className="tech-icons-text">Google Chrome</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">Vs Code</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={BI} alt="bi" className="tech-icon-images" />
        <div className="tech-icons-text">Power BI</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={excel} alt="excel" className="tech-icon-images" />
        <div className="tech-icons-text">Excel</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={figma} alt="figma" className="tech-icon-images" />
        <div className="tech-icons-text">Figma</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={drawIo} alt="drawIo" className="tech-icon-images" />
        <div className="tech-icons-text">Draw.io</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
