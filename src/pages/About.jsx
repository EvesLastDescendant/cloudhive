import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUpRightDots, faHourglass, faLockOpen, faTentArrowTurnLeft, faUsersGear, faYinYang } from "@fortawesome/free-solid-svg-icons"
import Values from "./components/Values"
// import Training from "./components/Training"

const About = () => {
    return (
        <div className="about">
            <div className="container-fluid-sm">
                <div className="container-sm mt-5">
                    <h1>Our Mission and Vision</h1>
                    <div className="row justify-content-between">
                        <div className="col-4 pt-3 border border-primary rounded">
                            <p className="fw-semibold">Mission</p>
                            <p>To build the next generation of tech start-up founders.</p>
                        </div>
                        <div className="col-4 pt-3 border border-primary rounded">
                            <p className="fw-semibold">Vision</p>
                            <p>We envision where relevant start-ups come out of the country.</p>
                        </div>
                    </div>
                </div>
                <div className="container-sm shadow-lg rounded-3 p-3 mt-5">
                    <p className="display-6 fw-semibold">Our Core Values</p>
                    <Values />
                </div>
                <div className="container-sm shadow rounded-3 mt-5 p-3">
                    <p className="display-6 fw-semibold">Our Training Services</p>
                    <hr />
                    {/* <Training /> */}
                </div>
                <div className="mt-3 float-end shadow rounded rounded-3 bg-primary box">
                    <Link to="/"><FontAwesomeIcon icon={faTentArrowTurnLeft} className="back-to-home-icon" title="Go back home"/></Link>
                </div>
            </div>
        </div>
    )
}
export default About
