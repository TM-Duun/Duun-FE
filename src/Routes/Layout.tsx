import { Outlet } from "react-router-dom"
import Nav from "../Components/Nav/Nav"
import Footer from "../Components/Footer/Footer"

// Nav, Footer는 고정, Outlet에만 컴포넌트 변경되는 구조
export const Layout = () => {
    return (
        <>
            <Nav />
            <Outlet />
            <Footer />
        </>
    )
}