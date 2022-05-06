// eslint-disable-next-line
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Nav } from 'react-bootstrap'
import { useState, useEffect } from 'react'

function Detail(props) {

    let navigate = useNavigate();
    let {id} = useParams();
    let [tab, setTab] = useState(0);


    console.log("page id=" + (parseInt(id)+1));
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                <img src={"https://github.com/Yongho-Lee/jjongs_diary/blob/main/src/img/jjong" + [parseInt(id)+1] +".jpg?raw=true"} width="100%" alt="shoes"/>
                </div>
                <div className="col-md-6 mt-4">
                <h4 className="pt-5">{props.datas[id].title}</h4>
                <p>{props.datas[id].content}</p>
                <p>120000원</p>
                <button className="btn btn-danger">주문하기</button> 
                <button className="btn" onClick={()=>{navigate(-1)}}>뒤로가기</button>
                </div>
            </div>
            <div className="detail_nav" style={{ marginTop:"30px"}}>
                <Nav justify variant="tabs" defaultActiveKey="link-1">
                    <Nav.Item>
                        <Nav.Link eventKey="link-1" onClick={()=>{ setTab(1)}}>Information</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2" onClick={()=>{ setTab(2)}}>Reviews</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="disabled" disabled onClick={()=>{ setTab(3)}}>
                        Not service yet
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
            <TabComponent tab={tab}/>


        </div> 


    )
}

function TabComponent({tab}){

    let [fade, setFade] = useState('');

    useEffect(()=>{
        let a = setTimeout(()=>{setFade('end')}, 100);
        return() =>{
            clearTimeout(a);
            setFade('');
        }       

    }, [tab])
    if(tab === 1){
        return(
            <div className={"start " + fade}> <h4> Information </h4></div>
        )
    }
    else if(tab === 2){
        return(
            <div className={"start " + fade}> <h4> Reviews </h4></div>
        )
    }
    else if(tab === 3){
        return(
            <div className={"start " + fade}> <h4> Not service yet </h4></div>
        )
       
    }
    else {      
        return(
            null
        )

    }

}

export default Detail;
