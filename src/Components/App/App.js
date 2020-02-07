import React from "react"
import "./App.scss"

import Timer from "../Timer/Timer"
import Display from "../Display/Display"

function App() {
    return (
        <>
            Poop:   <Timer  action = 'poop'   time = '12000'/> <br />
            Hunger: <Timer  action = 'hunger' time = '6000'/> <br />
            Sleep:  <Timer  action = 'sleep'  time = '100000'/> <br />
            <Display />
        </>
    )
}

export default App
