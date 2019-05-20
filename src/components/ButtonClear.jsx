import React, {Component} from 'react'

export default class ButtonClear extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <button onClick={this.props.clear}>Clear</button>
        )
    }
}