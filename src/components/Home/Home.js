import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Box from "./box/box";

function Home({ isConnected, ConnectButton }) {
  return (
    <div>
      <section>
        <Container fluid className="home-section" id="home">
          <Particle />
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Hi There!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>

                <h1 className="heading-name">
                  I'M
                  <strong className="main-name"> FISHO!</strong>
                </h1>

                <div style={{ padding: 50, textAlign: "left" }}>
                  <Type />
                </div>
                <a target="_blank" href="https://bscscan.com/address/0x495410c2a3eb2b35fe1a0de137c87aed72f6384f">
                  <button className="smart-contract">Smart Contract</button>
                </a>
              </Col>
              <Col md={5} style={{ paddingBottom: 20 }}>
                <Box ConnectButton={ConnectButton} isConnected={isConnected} />
              </Col>
            </Row>
          </Container>
        </Container>
        <Home2 />
      </section>
    </div>
  );
}

export default Home;
