import { Navbar, Container, NavDropdown, Nav, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'

function Card(props){
    let navigate = useNavigate();
  
    return(
      <>
        <Container>
        <Row>
        {
          props.datas.map(function(a,i){
            return(
  
                <Col sm key={i}>
                  <img onClick={() =>{navigate('./detail/'+i)}} src={"https://github.com/Yongho-Lee/jjongs_diary/blob/main/src/img/jjong" + (i +1) +".jpg?raw=true"} width="250px" height="200px" alt={'jjong'+i} />
                  <h4> {props.datas[i].title} </h4>
                  <p> {props.datas[i].content} </p>
                </Col>            
  
            )
          })
  
        }
          </Row>
        </Container>
      </>
  
    )
  
  }

  export default Card;