import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReloadUser } from "../../Actions";
import {isValidToken} from "../../Auth/isValidToken";
import { logoutServices } from "../../Services/AuthServices";

function Logout(){
    const navigate = useNavigate();
  const dispatch = useDispatch();
  const reload = useSelector((state) => state.ReducerUser);


  useEffect(() => {
  
    const isvalid=isValidToken();

    if (isvalid) {
      const fetchAPI = async () => {
        const token=localStorage.getItem("token");
        const res = await logoutServices(token);
        localStorage.removeItem("token");
        sessionStorage.removeItem("hasReloaded");
        dispatch(ReloadUser(!reload));
        navigate("/login");
      };
      fetchAPI();
    }
  }, []);

  return<></>;
}

export default Logout;