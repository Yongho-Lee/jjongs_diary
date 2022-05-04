import { Outlet } from "react-router-dom";

function About(){
    return(
        <>
        <div>
            <h4>About Page</h4>
        </div>
        <Outlet></Outlet>
        </>
    
    )
}

export default About;
