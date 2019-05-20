import React from 'react'

export default class SlideAutomatic extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <button onClick={this.props.nextAutomatic}>Automatico</button>
        )
    }
}