import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons"
import { Link, NavLink } from "react-router-dom"
import logo from "../assets/logo.jpg"  

const StyledNavBar = () => {
    return (
        <nav className='container-fluid bg-white navbar navbar-expand-sm position-fixed shadow' id="navbar">
            <div className="container-sm">
                <div className="container-fluid-sm logo-brand">
                    <Link
                        to='/'
                        className="navbar-brand brand"
                        >
                            <div className="container-fluid-sm">
                                <p className="brand-name">CloudHive</p>
                            </div>
                            <div className=" container-fluid-sm logo">
                                <img src={logo} className="img-fluid" alt="logo" width="50px" />
                            </div>
                    </Link>
                </div>
                <button className="navbar-toggler border-0" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <FontAwesomeIcon icon={faBars}/>
                </button>
                <div className="container-fluid-sm offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavlabel">
                    <div className="container-fluid-sm offcanvas-header">
                        <div className="container-fluid-sm offcanvas-title">
                            <Link
                                to='/'
                                className="navbar-brand brand"
                            >
                                <div className="container-fluid-sm">
                                    <p className="brand-name">CentralHub</p>
                                </div>
                                <div className=" container-fluid-sm logo">
                                    <img src={logo} className="img-fluid" alt="logo" width="70px" />
                                </div>
                            </Link>
                        </div>
                        <button className="border-0 btn btn-dark" data-bs-dismiss="offcanvas" aria-label="Close">
                            <FontAwesomeIcon icon={faClose}/>
                        </button>
                    </div>
                    <div className="container-fluid-sm offcanvas-body">
                        <div className="container-fluid-sm navbar-nav w-75 navDiv">
                            <div className="container-fluid-sm">
                                <NavLink
                                    to='/'
                                    className={({ isActive }) => (isActive ? 'text-primary link active' : 'text-secondary active')}
                                >
                                    Home
                                </NavLink>
                            </div>
                            <div className="container-fluid-sm">
                                <NavLink
                                    to='/about'
                                    className={({ isActive }) => (isActive ? 'text-primary link active' : 'text-secondary active')}
                                >
                                    About
                                </NavLink>
                            </div>
                            <div className="container-fluid-sm">
                                <NavLink
                                    to='/events'
                                    className={({ isActive }) => (isActive ? 'text-primary link active' : 'text-secondary active')}
                                >
                                    Events
                                </NavLink>
                            </div>
                            <div className="container-fluid-sm">
                                <NavLink
                                to='/blog'
                                className={({isActive}) => (isActive ? 'text-primary link active' : 'text-secondary active')}
                                >
                                    Blog
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
    
    export default StyledNavBar
    