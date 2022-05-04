// eslint-disable-next-line

import './App.css';
import { Navbar, Container, NavDropdown, Nav, Row, Col } from 'react-bootstrap';
import data from './data.js'
import { useState } from 'react';
import { Routes, Link, Route,useNavigate, Outlet } from 'react-router-dom';
import Detail from './component/Detail.js'
import About from './component/About.js'
import Event from './component/Event.js'

function App() {

  let [datas] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">




      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={()=>{ navigate('/')}}>Home</Nav.Link>
              <Nav.Link onClick={()=>{ navigate('/detail')}}>Detail</Nav.Link>
              <Nav.Link onClick={()=>{ navigate('/about')}}>About</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={()=>{ navigate('/event')}}>Event</NavDropdown.Item>
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

      <Routes>
        <Route path="/" element={
        <>
              <Card datas={datas} />
        </>
        }/>
        <Route path="/detail" element={<Detail />}/>
        <Route path="*" element={<div> 404 error </div>} />

        <Route path="/about" element={<About />}>
          <Route path="member" element={<p>member page</p>}/>
          <Route path="location" element={<div> location page </div>}/>
        </Route>

        <Route path="/event" element={<Event />}>
          <Route path="one" element={<p>event One</p>}/>
          <Route path="two" element={<p>Event Two</p>}/>
        </Route>
      </Routes>




    </div>
  );
}


function Card(props){

  return(
    <Container>
    <Row>
    {
      props.datas.map(function(a,i){
        return(
          <Col sm key={i}>
            <img src={"https://github.com/Yongho-Lee/jjongs_diary/blob/main/src/jjong" + (i+1) +".jpg?raw=true"} width="250px" height="200px" alt={'jjong'+i} />
            <h4> {props.datas[i].title} </h4>
            <p> {props.datas[i].content} </p>
          </Col>
        )
      })

    }
      </Row>
    </Container>

  )

}



export default App;
