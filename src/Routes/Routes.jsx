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
            element: <ShareTip></ShareTip>
        },
        {
            path: "/myTips",
            element: <MyTips></MyTips>
        },
        {
            path: "/tips/:id",
            element: <TipDetails></TipDetails>
        },
        {
            path:"signup",
            element:<SignUp></SignUp>
        },
        {
            path:"login",
            element:<Login></Login>
        }
        ]
    },
]);
export default router;