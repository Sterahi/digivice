import React from "react"
import "./App.scss"

import Timer from "../Timer/Timer"
import Display from "../Display/Display"

export default class App extends React.Component {
    constructor() {
        super()
        this.state = {
            poopCounter: 3
        }
    }
    render() {
        return (
            <>
                <div className = "timers">
                    <div>
                        Hunger: <Timer  action = 'hunger' time = '6000'/>
                    </div>
                    <div>
                        Sleep:  <Timer  action = 'sleep'  time = '100000'/>
                    </div>
                </div>
                <div className = "container">
                    <div className = "poops">
                        <Timer  action = 'poop' time = '12000'/>
                    </div>
                    <div className = "display">
                        <Display />
                    </div>
                    <div className = "needs">

                    </div>
                </div>
            </>
        )
    }
}
