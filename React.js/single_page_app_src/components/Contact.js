import React from "react"
import Helmet from "react-helmet"
import { Link } from "react-router-dom"

const Contact = () => {
    return (
        <div>
            <Helmet>
                <title>Contact</title>
            </Helmet>
            <h1>This is contact page.</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    )
}

export default Contact