import { Link } from "react-router-dom"

const Error = () => {
    return (
        <section className="error">
            <h2>404</h2>
            <h4>page not found</h4>
            <Link to="/">Go back to the homepage</Link>
        </section>
    )
}

export default Error