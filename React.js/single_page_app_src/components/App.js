import React from "react"
import { HashRouter as Router, Switch } from "react-router-dom"

import Home from "./Home"
import About from "./About"
import Contact from "./Contact"

function App() {
    return (
        <Switch>
            <Router exact path="/"><Home /></Router>
            <Router exact path="/about"><About /></Router>
            <Router exact path="/contact"><Contact /></Router>
        </Switch>
    )
}

export default App