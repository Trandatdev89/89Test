import LayoutDefault from "../../layout/layoutDefault";
import Error404 from "../../page/Error/Error404";
import Home from "../../page/Home";
import Login from "../../page/Login";
import Logout from "../../page/Logout";
import Register from "../../page/Register";
import PrivateUser from "../PrivateUsers";
import Quiz from "../../page/Quiz";
import Result from "../../page/Result";
import Topic from "../../page/Topic";
import Blog from "../../page/Blog";
import Usage from "../../page/Usage";
import LayoutAdmin from "../../layout/layoutAdmin/LayoutAdmin";
import CreateQuestion from "../../layout/layoutAdmin/PrivatePage/CreateQuestion";
import PrivateAdmin from "../PrivateUsers/PrivateAdmin";
import AddQuestion from "../../layout/layoutAdmin/PrivatePage/AddQuestion";
import Fobiden from "../../page/Error/Error403/Fobiden";
import MyInfo from "../../layout/layoutAdmin/PrivatePage/MyInfo";
import History from "../../page/History/History";
import DashBoard from "../../layout/layoutAdmin/PrivatePage/DashBoard";

export const Router = [
  {
    path: "/",
    element: <LayoutDefault />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "*",
        element: <Error404 />,
      },
      {
        path: "/fobiden",
        element: <Fobiden/>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/logout",
        element: <Logout />,
      },
      {
        path: "/usage",
        element: <Usage />,
      },
      {
        element: <PrivateUser allowedRoles={["USER","ADMIN"]}/>,
        children: [
          {
            path: "/quiz/:id",
            element: <Quiz />,
          },
          {
            path: "/topic",
            element: <Topic />,
          },
          {
            path: "/result/:id",
            element: <Result />,
          },
          {
            path: "/my-info",
            element: <MyInfo />,
          },
          {
            path: "/history",
            element: <History />,
          },
        ],
      },
    ],
  },
  {
     
    element: <LayoutAdmin />,
    children: [
      {
        element: <PrivateAdmin allowedRoles={["ADMIN"]}/>,
        children: [
          {
            path: "/admin/dashboard",
            element: <DashBoard />,
          },
          {
            path: "/admin/list-question",
            element: <CreateQuestion />,
          },
          {
            path: "/admin/create-question/:id",
            element: <AddQuestion />,
          },
        ]
      }
    ],
  },
];
