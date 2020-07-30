import React from "react"
import Helmet from "react-helmet"
import { Link } from "react-router-dom"

const About = () => {
    return (
        <div>
            <Helmet>
                <title>About</title>
            </Helmet>
            <h1>This is about page.</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    )
}

export default About