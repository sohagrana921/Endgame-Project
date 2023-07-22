import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import UserDetails from "../Pages/UserDetails/UserDetails";
import Colleges from "../Pages/Colleges/Colleges";
import CollegeDetails from "../Pages/CollegeDetails/CollegeDetails";
import Admission from "../Pages/Admission/Admission";
import MyCollege from "../Pages/MyCollege/MyCollege";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/userDetails",
        element: <UserDetails></UserDetails>,
      },
      {
        path: "/colleges",
        element: <Colleges></Colleges>,
      },
      {
        path: "/collegeDetails",
        element: <CollegeDetails></CollegeDetails>,
      },
      {
        path: "/admission",
        element: <Admission></Admission>,
      },
      {
        path: "/myCollege",
        element: <MyCollege></MyCollege>,
      },
    ],
  },
]);

export default router;
