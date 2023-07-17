import { Link, useLocation } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendarDays, faClock } from "@fortawesome/free-regular-svg-icons"
import { faLocationDot, faTentArrowTurnLeft } from "@fortawesome/free-solid-svg-icons"
import mic from "../assets/erkanUtu.jpg"
import eventData from "../EventsDB"

const Events = () => {
    const location = useLocation()
    return (
        <section className="container-fluid-sm events">
            <div className="container-fluid-sm">
                <aside className="container-sm shadow p-3">
                    <div className="container-fluid-sm">
                        <div className="container-fluid-sm event-title">
                            <p>Figma or Canva: <br /> are they the same tool or they differ</p>
                        </div>
                        <div className="container-fluid-sm event-speaker">
                            <p>
                                By <br /> <span>Anas Prath</span> <br /> Product Designer <br /> <span>13<sup>th</sup> Dec 2025</span>  <br /> 9:00pm GMT
                            </p>
                        </div>
                    </div>
                    <div className="container-fluid-sm event-pic">
                        <img src={mic} className="img-fluid shadow" alt="microphone" />
                    </div>
                </aside>
                <p className="container-sm mt-5">Upcoming Events</p>
                <div className="container-sm shadow p-3 to-come-events">
                    {eventData.map(event => {
                        return (
                            <div key={event.eventId} className="container-fluid-sm p-3 shadow rounded w-50 text-break event-box">
                                <div className="container-fluid-sm">
                                    <button type="button" className="btn border border-primary" data-bs-toggle="modal" data-bs-target={`#${event.eventId}`} >{event.eventType}</button>
                                </div><br />
                                <div className="container-fluid-sm">
                                    <p className="container-fluid-sm">{event.eventTitle}</p>
                                </div>
                                <div className="modal fade overflow-hidden" id={`${event.eventId}`}>
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                            <div className="modal-body">
                                                <button type="button" className="btn border border-0 float-end close-btn" data-bs-dismiss="modal">&times;</button>
                                                <div className="container-fluid-sm mt-4">
                                                    <p className="container-fluid-sm">{event.eventTitle}</p>
                                                    <p className="container-fluid-sm">{event.eventDescription}</p>
                                                    <img src={event.eventPicture} alt="event's picture" className="img-fluid" />
                                                </div>
                                                <div className="container-fluid-sm event-details">
                                                    <div className="container-fluid-sm">
                                                        <FontAwesomeIcon icon={faCalendarDays} />
                                                    </div>
                                                        <p className="container-fluid-sm">{event.eventDate}</p>
                                                    <div className="container-fluid-sm">
                                                        <FontAwesomeIcon icon={faClock} />
                                                    </div>
                                                        <p className="container-fluid-sm">{event.eventTime}</p>
                                                </div>
                                                <div className="container-fluid-sm event-details">
                                                    <div className="container-fluid-sm">
                                                        <FontAwesomeIcon icon={faLocationDot} />
                                                    </div>
                                                    <p className="container-fluid-sm">{event.eventLocation}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div><br /><br />
                <div className="container-sm">
                    <div className="float-end shadow rounded rounded-3 bg-primary box">
                        <Link to="/"><FontAwesomeIcon icon={faTentArrowTurnLeft} className="back-to-home-icon" title="Go back home"/></Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Events