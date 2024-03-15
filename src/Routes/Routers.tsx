import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyPage from "../Pages/MyPage/MyPage";
import SignUp1 from "../Pages/SignUp/SignUp1";
import SignUp2 from "../Pages/SignUp/SignUp2";
import SignUp3 from "../Pages/SignUp/SignUp3";
import SignUpComplete from "../Pages/SignUp/SignUpComplete";

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
        path:"/signup1",
        Element: <SignUp1 />
    },
    {
        path:"/signup2",
        Element: <SignUp2 />
    },
    {
        path:"/signup3",
        Element: <SignUp3 />
    },
    {
        path:"/SignUpComplete",
        Element: <SignUpComplete />
    },
    {
        path: "/mypage",
        Element: <MyPage />
    }
]