import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUpRightDots, faHourglass, faLockOpen, faTentArrowTurnLeft, faUsersGear, faYinYang } from "@fortawesome/free-solid-svg-icons"

const Values = () => {
    return (
        <>
            <div className="container-fluid-sm mt-5 text-center">
                <div className="row g-3 justify-content-between">
                    <div className="col-4">
                        <div className="circle mx-auto border border-3 border-primary p-1">
                            <FontAwesomeIcon icon={faUsersGear} size="2xl"/>
                            <p>Teamwork</p>
                        </div>
                        <p>
                            Lorem ipsum dolor sit, <br /> 
                            amet consectetur adipisicing elit. <br />
                            officia quos quis!
                        </p>
                    </div>
                    <div className="col-4">
                        <div className="circle mx-auto border border-3 border-primary p-1">
                            <FontAwesomeIcon icon={faLockOpen} size="2xl"/>
                            <p>Transparency</p>
                        </div>
                        <p>
                            Lorem ipsum dolor sit, <br /> 
                            amet consectetur adipisicing elit. <br />
                            officia quos quis!
                        </p>
                    </div>
                    <div className="col-4">
                        <div className="circle mx-auto border border-3 border-primary p-1">
                            <FontAwesomeIcon icon={faYinYang} size="2xl"/>
                            <p>Respect</p>
                        </div>
                        <p>
                            Lorem ipsum dolor sit, <br />  
                            amet consectetur adipisicing elit. <br />
                            officia quos quis!
                    </p>
                    </div>
                    <div className="col-6">
                        <div className="circle mx-auto border border-3 border-primary p-1">
                            <FontAwesomeIcon icon={faArrowUpRightDots} size="2xl"/>
                            <p>Growth</p>
                        </div>
                        <p>
                            Lorem ipsum dolor sit, <br />
                            amet consectetur adipisicing elit. <br />
                            officia quos quis!
                    </p>
                    </div>
                    <div className="col-6">
                        <div className="circle mx-auto border border-3 border-primary p-1">
                            <FontAwesomeIcon icon={faHourglass} size="2xl"/>
                            <p>Empathy</p>
                        </div>
                        <p>
                            Lorem ipsum dolor sit, <br />  
                            amet consectetur adipisicing elit. <br />
                            officia quos quis!
                    </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Values