import {
    createBrowserRouter, RouterProvider,
} from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Components/Home/Home";
import ExploreGardeners from "../Pages/ExploreGardeners/ExploreGardeners";
import BrowseTips from "../Pages/BrowseTips/BrowseTips";
import ShareTip from "../Pages/ShareTip/ShareTip";
import MyTips from "../Pages/MyTips/MyTips";
import TipDetails from "../Pages/TipDetails/TipDetails";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/LogIn/Login";
import PrivateRoute from "../Context/PrivateRoute";
import EditTip from "../Pages/EditTip/EditTip";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [{
            index: true,
            element: <Home></Home>
        },
        {
            path: '/exploreGardeners',
            element: <ExploreGardeners></ExploreGardeners>
        },
        {
            path: "/browseTips",
            element: <BrowseTips></BrowseTips>
        },
        {
            path: '/shareTips',
            element: <PrivateRoute>
                <ShareTip></ShareTip>
            </PrivateRoute>
        },
        {
            path: "/myTips",
            element: <PrivateRoute>
                <MyTips></MyTips>
            </PrivateRoute>
        },
        {
            path: "/tips/:id",
            element: <PrivateRoute>
                <TipDetails></TipDetails>
            </PrivateRoute>
        },
        {
            path:"/signup",
            element:<SignUp></SignUp>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/editTip/:id",
            element:<EditTip></EditTip>
        },
        {
            path:"*",
            element:<ErrorPage></ErrorPage>
        }
        ]
    },
]);
export default router;