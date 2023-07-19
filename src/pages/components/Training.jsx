import trainingdata from "./trainingDB"

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
                                                    <p>{data.cousre}</p>
                                                    <p>{data.description}</p>
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