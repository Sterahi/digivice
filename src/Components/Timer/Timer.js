import React from "react"
import PropTypes from "prop-types"

export default class Timer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOn: 0, // handling sleep and the like
            time: 60, // temp testing value & fallback, in miliseconds
            action: null // What action will be executed at the end
        }
    }

    init() {
        this.setState({
            isOn: 1,
            time: this.props.time,
            action: this.props.action
        })
    }
    /**
     * Repeating timer for events such as poopin, eatin, and sleepin
     */
    startTimer() {
        let time = 1000
        setInterval(() => {
            if(this.state.time !== 0) {
                this.setState({
                    time: this.state.time - time
                })
            } else {
                this.setState({
                    time: this.props.time
                })
            }
        }, time)
    }

    componentDidMount() {
        this.init()
        this.startTimer()
    }
    render() {
        return(
            <strong>{(this.state.time / 1000)}</strong>
        )
    }
}

Timer.propTypes = {
    time: PropTypes.string.isRequired,
    action: PropTypes.string.isRequired
}
