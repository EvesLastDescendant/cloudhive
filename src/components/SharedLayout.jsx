import { Outlet } from "react-router-dom"
import StyledNavBar from "./StyledNavBar"
import Footer from "./StyledFooter"

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