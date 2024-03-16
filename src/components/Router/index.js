import LayoutDefault from "../../layout/layoutDefault";
import Error404 from "../../page/Error/Error404";
import Home from "../../page/Home";
import Login from "../../page/Login";
import Logout from "../../page/Logout";
import Register from "../../page/Register";
import PrivateUser from "../PrivateUsers";
import Quiz from "../../page/Quiz";
import Anwser from "../../page/Anwser";
import Result from "../../page/Result";
import Topic from "../../page/Topic";
import Blog from "../../page/Blog";
import Lamlai from "../../page/Lamlai";
import Usage from "../../page/Usage";
export const Router=[
    {
        path:"/",
        element:<LayoutDefault/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"*",
                element:<Error404/>
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/topic",
                element:<Topic/>
            }
            ,
            {
                path:"/blog",
                element:<Blog/>
            }
            ,
            {
                path:"/register",
                element:<Register/>
            },
            {
                path:"/logout",
                element:<Logout/>
            },
            {
                path:"/usage",
                element:<Usage/>
            },
            {
                element:<PrivateUser/>,
                children:[
                    {
                        path:"/quiz/:id",
                        element:<Quiz/>
                    },
                    {
                        path:"/anwser",
                        element:<Anwser/>
                    },
                    {
                        path:"/result/:id",
                        element:<Result/>
                    },
                    {
                        path:"/lamlai/:id",
                        element:<Lamlai/>
                    },
                ]
            },

        ]
    }
]