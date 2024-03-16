import { Outlet } from "react-router-dom";

function PrivateUser(){
    return(
        <>
           <Outlet/>
        </>
    )
}

export default PrivateUser;