import React from "react"

class Counter extends React.Component{
    constructor(){
        super()
        this.state = {
            value: 0
        }
        this.addOne = this.addOne.bind(this)
    }

    addOne(){
        this.setState(prevState => {
            return {value: prevState.value+1}
        })
    }

    render(){
        return (
            <div>
                <h3>{this.state.value}</h3>
                <button onClick={this.addOne}>Add one</button>
            </div>
        )
    }
}

export default Counter