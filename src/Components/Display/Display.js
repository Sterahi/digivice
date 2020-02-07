import React from "react"
import PropTypes from "prop-types"

import kuramon_1 from "./img/kuramon-1.png"
import kuramon_2 from "./img/kuramon-2.png"

export default class Display extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            image: kuramon_1
        }
    }

    animation() {
        setInterval(() => {
            if (this.state.image === kuramon_1) {
                this.setState({
                    image: kuramon_2
                })
            } else {
                this.setState({
                    image: kuramon_1
                })
            }
        }, 500)
    }

    componentDidMount() {
        this.animation()
    }

    render() {
        return (
            <>
                <img src = {this.state.image} />
            </>
        )
    }
}

Display.propTypes = {

}
