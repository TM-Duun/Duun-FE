import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyPage from "../Pages/MyPage/MyPage";
import SignUp from "../Pages/SignUp/SignUp";

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
    }
]