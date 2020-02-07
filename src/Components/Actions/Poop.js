import React from "react"
import PropTypes from "prop-types"

import poop from "./imgs/poop.png"
import "./Actions.scss"
export default class Poop extends React.Component {
    clean() {

    }
    render() {
        let items = new Array(this.props.counter).fill(null)
        return (
            <>
                {
                    (items).map((item, id) => {
                        return (
                            <img src = {poop} alt = "poop" key = {id} />
                        )
                    })
                }
            </>
        )
    }
}

Poop.propTypes = {
    counter: PropTypes.number.isRequired
}
