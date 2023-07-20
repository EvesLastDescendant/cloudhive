import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTentArrowTurnLeft } from "@fortawesome/free-solid-svg-icons"
import blogs from "../databases/BlogsDB"


const Blog = () => {
    return (
        <div className="container-sm mt-5 blog">
            <div className="container-fluid-sm text-center">
                <h3>TheBlog<span>Central</span></h3>
            </div><br />
            <div id="carouselExampleControls" class="container-sm carousel slide carousel-fade text-center" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="container-fluid-sm carousel-inner p-3">
                    {blogs.map(blog => {
                        return (
                            <div class="carousel-item active" data-bs-interval="2000">
                                <img src={blog.blogImage} class="img-fluid rounded" alt={blog.blogCaptionTop} />
                                <div className="carousel-caption">
                                    <h4>{blog.blogCaptionTop}</h4>
                                    <p>{blog.blogCaptionBottom}</p>
                                    <a className="btn btn-outline-light" href="">Read More</a>
                                </div>
                            </div>
                        )
                    })}
                </div>
                {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button> */}
            </div>
            <div className="container-sm">
                <div className="float-end shadow rounded rounded-3 bg-primary box">
                    <Link to="/"><FontAwesomeIcon icon={faTentArrowTurnLeft} className="back-to-home-icon" title="Go back home"/></Link>
                </div>
            </div>
        </div>
    )
}
    
export default Blog