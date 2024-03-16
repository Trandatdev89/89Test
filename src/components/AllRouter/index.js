import {useRoutes} from "react-router-dom"
import { Router } from "../Router";

function AllRouter(){
    const AllRoute=useRoutes(Router);
    return(
        <>     
        {AllRoute}
        </>
    )
}

export default AllRouter;