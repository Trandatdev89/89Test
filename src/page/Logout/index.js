import { useNavigate } from "react-router-dom";
import { deleteCookie } from "../../components/helper/cookie";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReloadUser } from "../../Actions";

function Logout(){
    deleteCookie("token"); //xoa token de dang xuat:
    const navigate=useNavigate();
    const dispatch=useDispatch();
    useEffect(()=>{
       dispatch(ReloadUser(false)); //gui len reducer de render lai header khi dang xuat
       navigate("/login");
    },[])
    return(
        <>
           
        </>
    )
}

export default Logout;