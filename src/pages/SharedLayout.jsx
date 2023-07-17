import { Outlet } from "react-router-dom"
import StyledNavBar from "./components/StyledNavBar"
import Footer from "./components/StyledFooter"

const SharedLayout = () => {
    return (
        <>
            <StyledNavBar />
            <br /><br /><br /><br />
            <Outlet />
            <br /><br />
            <Footer />
        </>
    )
}

export default SharedLayout