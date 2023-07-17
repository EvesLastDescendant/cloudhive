import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/events">Events</Link>
        </nav>
    )
}

export default NavBar