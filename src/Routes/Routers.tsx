import Counsel from "../Pages/Counsel/Counsel";
import Faq from "../Pages/FAQ/Faq";
import Likes from "../Pages/Likes/Likes";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyInfo from "../Pages/MyInfo/MyInfo";
import MyPage from "../Pages/MyPage/MyPage";
import MyReview from "../Pages/MyReview/MyReview";
import Order from "../Pages/Order/Order";
import Payment from "../Pages/Payment/Payment";
import Refund from "../Pages/Refund/Refund";
import SignUp from "../Pages/SignUp/SignUp";
import Category from "../Pages/Category/Category";
import Cart from "../Pages/Cart/Cart";
import Detail from "../Pages/Detail/Detail";

// Router path경로 지정 파일, 필요시 params도 넣을것
export const routers = [
    {
        path:"/",
        Element: <Home />
    },
    {
        path:"/login",
        Element: <Login />
    },
    {
        path:"/signup",
        Element: <SignUp />
    },
    {
        path: "/mypage",
        Element: <MyPage />
    },
    {
        path:"/category",
        Element:<Category />
    },
    {
        path:"/cart",
        Element: <Cart />
    },
    {
        path:"/detail",
        Element: <Detail />
    },
    {
        path: "/likes",
        Element: <Likes />
    },
    {
        path: "/payment",
        Element: <Payment />
    },
    {
        path: "/myreview",
        Element: <MyReview />
    },
    {
        path: "/order",
        Element: <Order />
    },
    {
        path: "/refund",
        Element: <Refund />
    },
    {
        path: "/faq",
        Element: <Faq />
    },
    {
        path: "/counsel",
        Element: <Counsel />
    },
    {
        path: "/myinfo",
        Element: <MyInfo />
    }
]