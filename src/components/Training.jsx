import trainingdata from "../databases/trainingDB"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faMobileRetro, faEnvelopeOpenText} from "@fortawesome/free-solid-svg-icons"

const Training = () => {
    return (
        <>
            <div className="container-fluid-sm mt-5 text-center">
                <div className="row g-3 justify-content-around">
                    {
                        trainingdata.map(data => {
                            return (
                                <div key={data.id} className="col">
                                    <button 
                                        className="btn border"
                                        type="button"
                                        data-bs-toggle="modal"
                                        data-bs-target={`#${data.id}`}
                                    >
                                        <p>{data.cousre}</p>
                                    </button>
                                    <div 
                                        className="modal fade text-start"
                                        id={data.id} tabIndex={-1}
                                        aria-labelledby="trainingModalLabel" aria-hidden="true"
                                    >
                                        <div className="modal-dialog modal-dialog-centered">
                                            <div className="modal-content">
                                                <div className="modal-body">
                                                    <p className="h4 fw-bold">
                                                        {data.cousre} <br /> {data.description}
                                                    </p>
                                                    <p>3 Months Hands-on Training Course Features</p>
                                                    <ul>
                                                        <li>Expert Lead</li>
                                                        <li>Hands-on Training</li>
                                                        <li>Conducive Learning Environment Internship (Real life experience)</li>
                                                        <li>Certification</li>
                                                        <li>Job Readiness/Connection</li>
                                                    </ul>
                                                    <p class="tp">N100k per seat Limited seats available</p>
                                                    <div className="container-fluid-sm">
                                                        <div className="row gx-3">
                                                            <div className="col d-flex flex-row">
                                                                <a className="me-1" href="mailto:isaiahAndrew@protonmail.com" target="_blank">
                                                                    <FontAwesomeIcon icon={faEnvelopeOpenText} />
                                                                </a>
                                                                <p>send us a message</p>
                                                            </div>
                                                            <div className="col d-flex flex-row">
                                                                <a className="me-1" href="tel: 09056959085" target="_blank">
                                                                    <FontAwesomeIcon icon={faMobileRetro} />
                                                                </a>
                                                                <p>give us a call</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <FontAwesomeIcon icon={data.icon} /> */}
                                                    
                                                </div>
                                                <div className="modal-footer">
                                                    <button 
                                                        type="button" className="btn"
                                                        data-bs-dismiss="modal" aria-label="Close"
                                                    >
                                                        Close
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Training