import {
    createBrowserRouter, RouterProvider,
} from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Components/Home/Home";
import TipCard from "../Components/TipCard";
import ExploreGardeners from "../Pages/ExploreGardeners/ExploreGardeners";
import BrowseTips from "../Pages/BrowseTips/BrowseTips";
import ShareTip from "../Pages/ShareTip/ShareTip";
import MyTips from "../Pages/MyTips/MyTips";
const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [{
            index: true,
            element: <Home></Home>
        },
        {
            path:'/exploreGarden',
            element:<ExploreGardeners></ExploreGardeners>
        },
        {
            path:"/browseTips",
            element:<BrowseTips></BrowseTips>
        },
        {
            path:'/shareTips',
            element:<ShareTip></ShareTip>
        },
        {
            path:"/myTips",
            element:<MyTips></MyTips>
        }
        ]
    },
]);
export default router;