import imgOne from "../assets/people-and-technology.png"
import imgTwo from "../assets/people-collaborating-with-tech-.png"
import imgTr from "../assets/data-security-threat.png"
import imgFo from "../assets/person-working-collaboratively-online.png"


const Home = () => {
    return (
        <section className="container-fluid-sm home">
            <div className="container-fluid-sm px-3">
                <aside className="container-sm p-4 shadow">
                    <div className="container-fluid-sm img-div">
                        <img src={imgOne} className="img-fluid" alt="people and technology" />
                    </div>
                    <div className="container-fluid-sm intro-text">
                        <p>
                            <span className="main-word">Cloud</span><span className="suffix-word">Hive</span> is a IT organisation that deals in 
                            mostly open-source projects <br /> as it contributes and renders 
                            solutions to Front end, Back end and <br /> Full Stack developers.
                        </p>
                    </div>
                </aside>
                <br />
                <div className="container-sm p-5 shadow detail">
                    <div className="container-fluid-sm">
                        <p>We offer</p>
                    </div>
                    <details className="container-fluid-sm">
                        <div className="container-sm" id="detail-box">
                            <div className="container-fluid-sm detail-box-content shadow">
                                <div className="container-fluid-sm">
                                    <p className="ps-3">Collaboration with Technology(Artificial Intelligence)</p> 
                                </div>
                                <div className="container-fluid-sm">
                                    <img src={imgTwo} className="img-fluid" alt="people collaborating with technology" />
                                </div>
                            </div>
                            <div className="container-fluid-sm detail-box-content shadow">
                                <div className="container-fluid-sm">
                                    <p className="ps-3">Data Security and Firewall</p> 
                                </div>
                                <div className="container-fluid-sm">
                                    <img src={imgTr} className="img-fluid" alt="data security and threat" />
                                </div>
                            </div>
                            <div className="container-fluid-sm detail-box-content shadow">
                                <div className="container-fluid-sm">
                                    <p className="ps-3">Contributions to Open-source projects</p> 
                                </div>
                                <div className="container-fluid-sm">
                                    <img src={imgFo} className="img-fluid" alt="people working collaboratively online" />
                                </div>
                            </div>
                        </div>
                    </details>
                </div>
            </div>
        </section>
    )
}

export default Home