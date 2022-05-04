import './App.css';
import { Navbar, Container, NavDropdown, Nav, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="main-bg">        
      </div>
      <Container>
        <Row>
          <Col sm>
            <img src="./jjoing1"/>
            <h4> 제목 </h4>
            <p> 설명 </p>
          </Col>
          <Col sm>
            <img src="./jjoing2"/>
            <h4> 제목 </h4>
            <p> 설명 </p>
          </Col>
          <Col sm>
            <img src="./jjoing3"/>
            <h4> 제목 </h4>
            <p> 설명 </p>
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;
