import React from "react"
import ReactDOM from "react-dom"
import { HashRouter } from "react-router-dom"

import App from "./components/App"
import Counter from "./components/Counter"
ReactDOM.render(
    <div>
        <Counter />
        <HashRouter>
            <App />
        </HashRouter>
    </div>
    ,
    document.getElementById('root')
)