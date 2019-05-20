import React from 'react'
import './css/slide.css'
import { inject, observer } from 'mobx-react';

class Slide extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {slideShowStore} = this.props

        let image = slideShowStore.resFiltrado.data === undefined ? '' : slideShowStore.resFiltrado.data[this.state.position]

        return(
            <div className="slide">
                <img src={image.url}/>
                <div className="desc">
                    <h3>{this.props.category}</h3>
                    <h1>{this.props.title}</h1>
                </div>
            </div>
        )
    }
}

export default inject('slideShowStore')(observer(Slide))