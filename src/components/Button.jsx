import React from 'react'
import './css/button.css'
import {inject, observer} from 'mobx-react'

class Button extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <button onClick={this.props.slideShowStore.next} className={this.props.btnClass}>{this.props.btnArrow}</button>
        )
    }
}

export default inject('slideShowStore')(observer(Button))