import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUpRightDots, faHourglass, faLockOpen, faTentArrowTurnLeft, faUsersGear, faYinYang } from "@fortawesome/free-solid-svg-icons"

const Values = () => {
    return (
        <>
            <div className="container-fluid-sm mt-5 text-center">
                <div className="row g-3 justify-content-between">
                    <div className="col-4">
                        <div className="circle mx-auto border border-3 border-primary p-1">
                            <FontAwesomeIcon icon={faUsersGear} fade size="2xl"/>
                            <p>Teamwork</p>
                        </div>
                        <p>value value value value value</p>
                    </div>
                    <div className="col-4">
                        <div className="circle mx-auto border border-3 border-primary p-1">
                            <FontAwesomeIcon icon={faLockOpen} fade size="2xl"/>
                            <p>Transparency</p>
                        </div>
                        <p>value value value value value</p>
                    </div>
                    <div className="col-4">
                        <div className="circle mx-auto border border-3 border-primary p-1">
                            <FontAwesomeIcon icon={faYinYang} fade size="2xl"/>
                            <p>Respect</p>
                        </div>
                        <p>value value value value valu</p>
                    </div>
                    <div className="col-6">
                        <div className="circle mx-auto border border-3 border-primary p-1">
                            <FontAwesomeIcon icon={faArrowUpRightDots} fade size="2xl"/>
                            <p>Growth</p>
                        </div>
                        <p>value value value value valu</p>
                    </div>
                    <div className="col-6">
                        <div className="circle mx-auto border border-3 border-primary p-1">
                            <FontAwesomeIcon icon={faHourglass} fade size="2xl"/>
                            <p>Empathy</p>
                        </div>
                        <p>value value value value valu</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Values