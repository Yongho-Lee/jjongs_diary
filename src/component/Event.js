import { Outlet, useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';

function Event(){
    let navigate = useNavigate();
    return(
        <>
            <h4>
                오늘의 할일<br/>
                <Button onClick={()=>{ navigate('/event/one')}}> One </Button> <br />
                <Button onClick={()=>{ navigate('/event/two')}}> Two </Button> <br />
                <Outlet></Outlet>
            </h4>
        </>
    )

}

export default Event;