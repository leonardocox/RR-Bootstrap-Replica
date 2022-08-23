import "./App.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import instacartLogo from "./logo.svg";
import splash from "./splash.webp";
import styled from "styled-components";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Splash = styled.div`
  width: 100vw;
  height: 500px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${splash});
  background-color: #dfeed6;
  position: absolute;
  left: 0;
  top: 40px;
  bottom: 40px;
  right: 0;
  z-index: -1;
`;

const CoolContainer = styled(Container)`
  color: red;
`;

function App() {
  return (
    <>
      <Navbar bg="light" expand="lg" fixed="top">
        <Navbar.Brand style={{ margin: "5px 0 0 20px" }} href="#home">
          <img src={instacartLogo} alt="Logo Image" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link href="#LogIn">Log In</Nav.Link>
            <Button variant="success">Sign Up</Button>{" "}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Splash>
        <Container>
          <Row>
            <Col>
              <h1>Hello! Welcome to the Store!</h1>
            </Col>
          </Row>
          <Row>
            <Col>Some lovely goodies</Col>
            <Col>Some other cool stuff</Col>
            <Col>Ahh yes some more cool stuff</Col>
          </Row>
          <Row>
            <Col>
              <CoolContainer>
                <Row>
                  <Col>This should be cool</Col>
                </Row>
              </CoolContainer>
            </Col>
          </Row>
        </Container>
      </Splash>
    </>
  );
}

export default App;
