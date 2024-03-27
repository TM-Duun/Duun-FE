import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import LoginComplete from "../Pages/Login/LoginComplete";
import MyPage from "../Pages/MyPage/MyPage";
import SignUp1 from "../Pages/SignUp/SignUp1";
import SignUp2 from "../Pages/SignUp/SignUp2";
import SignUp3 from "../Pages/SignUp/SignUp3";
import SignUpComplete from "../Pages/SignUp/SignUpComplete";
import Term1 from "../Pages/Term/Term1";
import Term2 from "../Pages/Term/Term2";
import Term3 from "../Pages/Term/Term3";

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
        path:"/LoginComplete",
        Element: <LoginComplete />
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
        path:"/signUpComplete",
        Element: <SignUpComplete />
    },
    
    {
        path:"/Term1",
        Element: <Term1 />
    },
    {
        path:"/Term2",
        Element: <Term2 />
    },    {
        path:"/Term3",
        Element: <Term3 />
    },
    {
        path: "/mypage",
        Element: <MyPage />
    }
]