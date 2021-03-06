// eslint-disable-next-line
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Nav } from 'react-bootstrap'
import { useState, useEffect } from 'react'

import { useDispatch } from 'react-redux';
import { addCartList } from '../store/productSlice';



function Detail(props) {

    let navigate = useNavigate();
    let {id} = useParams();
    let [tab, setTab] = useState(1);

    let dispatch = useDispatch();

    // useEffect(()=>{

    //     let bWatched = localStorage.getItem('watched')
    //     let nextWatched = JSON.parse(bWatched)
    //     nextWatched.push(props.datas[id].id)
    //     localStorage.setItem(
    //         'watched', JSON.stringify( nextWatched )
    //     );

    // })
    //console.log("page id=" + (parseInt(id)+1));
    // check page number
    return(
        <>

        <div className="container">
            <div className="row">
                <div className="col-md-6">
                <img src={"https://github.com/Yongho-Lee/jjongs_diary/blob/main/src/img/jjong" + [parseInt(id)+1] +".jpg?raw=true"} width="100%" alt="shoes"/>
                </div>
                <div className="col-md-6 mt-4">
                <h4 className="pt-5">{props.datas[id].title}</h4>
                <p>{props.datas[id].content}</p>
                <p>120000원</p>
                <button className="btn btn-danger" onClick={()=>{
                    //navigate('/cart');
                    dispatch(addCartList(props.datas[id]));
                    }}>주문하기</button> 
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

        </>
    )
}

// 아래에서 props 문법 봐두면 좋음.
// (props) 전송이 아니라 props의 이름인 {tab} 을 사용해서 파라미터 전송받음
// props 가 여러개면 {tab, props2, props3...} 으로 사용가능.
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
