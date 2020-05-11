import React from "react"
import PropTypes from "prop-types"

import Poop from "../Actions/Poop"

import "./Timer.scss"
export default class Timer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOn: 0, // handling sleep and the like
            time: 60, // temp testing value & fallback, in miliseconds
            action: null, // What action will be executed at the end
            counter: 0
        }
        this.clean = this.clean.bind(this)
    }

    init() {
        this.setState({
            isOn: 1,
            time: this.props.time,
            action: this.props.action,
            counter: 0
        })
    }
    /**
     * Repeating timer for events such as poopin, eatin, and sleepin
     */
    startTimer() {
        let time = 1000
        var { counter } = this.state
        setInterval(() => {
            if(this.state.time !== 0) {
                this.setState({
                    time: this.state.time - time
                })
            } else {
                counter = counter + 1
                this.setState({
                    time: this.props.time,
                    counter: counter
                })
            }
        }, time)
    }

    clean() {
        this.setState({
            counter: 0
        })
    }

    componentDidMount() {
        this.init()
        this.startTimer()
    }
    render() {
        let action, e
        if(this.props.action === "poop") {
            action = <Poop  counter = {this.state.counter} />
            e = <div className = "button-wrapper"><span className = "button" onClick = { this.clean }>Clean</span></div>
        } else {
            action = this.state.time / 1000
        }
        return(
            <>
                {action}
                {e}
            </>
        )
    }
}

Timer.propTypes = {
    time: PropTypes.string.isRequired,
    action: PropTypes.string.isRequired
}
