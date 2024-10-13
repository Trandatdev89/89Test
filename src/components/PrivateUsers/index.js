import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import RefreshToken from "../../Auth/RefreshToken";
import { ReloadUser } from "../../Actions";
import { useDispatch, useSelector } from "react-redux";



function PrivateUser({ allowedRoles }){
  const token = localStorage.getItem("token");
  const data = useSelector((state) => state.Reload);
  const dispatch = useDispatch();

  setInterval(() => {
    dispatch(ReloadUser(!data));
  }, 259200000);

  if (!token) {
    return <Navigate to="/login" />;
  }
  try {
    const tokenDecode = jwtDecode(token);
    const expiryTimeSeconds = tokenDecode.exp;
    const currentTimeSeconds = Math.floor(new Date().getTime() / 1000);

    if (currentTimeSeconds > expiryTimeSeconds) {
      localStorage.removeItem("token");
      return <Navigate to="/login" />;
    } else {
      if(!allowedRoles.includes(tokenDecode.scope)){
         return <Navigate to="/fobiden"/>
      }
      else{
        if (currentTimeSeconds > expiryTimeSeconds - 120) {
          RefreshToken(token);
        }
        return <Outlet/>
      }
    }
  } catch (error) {
    <Navigate to="/login" />;
  }
}

export default PrivateUser;