import React, {Component} from 'react'
import { inject, observer } from "mobx-react"

class LoadPage extends Component {

    render(){
        const { slideShowStore } = this.props
        return(
            slideShowStore.page
        )
    }
}

export default inject('slideShowStore')(observer(LoadPage))