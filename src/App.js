// eslint-disable-next-line

import './App.css';
import { Navbar, Container, NavDropdown, Nav, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';

import data from './data.js'
import Card from './component/Card.js'
import Detail from './component/Detail.js'
import About from './component/About.js'
import Event from './component/Event.js'

function App() {

  let [datas, setDatas] = useState(data);
  let [alrets, setAlrets] = useState(true);  
  let navigate = useNavigate();
  let [clickFetchNum, setClickFetchNum] = useState(2);

  useEffect(()=>{
    setTimeout(()=>{setAlrets(false)}, 2000)  
  }, [])



  return (
    <div className="App">

      {
        alrets === true 
        ? <TimeAlret /> 
        : null
      }


      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={()=>{ navigate('/detail/0')}}>Detail</Nav.Link>
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
          <button className="btn btn-outline-primary" onClick={()=>{
            axios.get('https://codingapple1.github.io/shop/data'+clickFetchNum+'.json')
            .then((result)=>{
              let tmp = [...datas, ...result.data]
              setDatas(tmp)
              setClickFetchNum(clickFetchNum+1)
            })
            .catch(()=>{
              console.log("failed to fetch.")
            })
          }}> fetch list </button> 

              <Card datas={datas} />
        </>
        }/>
        <Route path="/detail/:id" element={<Detail datas={datas} />}/>
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



function TimeAlret(){
  return(
    <>
      <div className="alert alert-warning"> 2초 이내 클릭 </div>
    </>
  )
}





export default App;
