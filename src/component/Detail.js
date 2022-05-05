// eslint-disable-next-line
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Detail(props) {

    let navigate = useNavigate();
    let {id} = useParams();


    console.log(id+1);
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

        </div> 
    )
}

export default Detail;
