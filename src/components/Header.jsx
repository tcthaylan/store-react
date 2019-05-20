import React, {Component} from 'react'
import {inject, observer} from 'mobx-react'
import Home from './Home';
import DeleteCategory from './DeleteCategory'
import AddSlide from './AddSlide'
import './css/header.css'

class Header extends Component {
    constructor(props) {
        super(props)
        this.page = this.page.bind(this)
    }

    page(e){
        const { slideShowStore } = this.props
        
        // slideShowStore.alterPage(e.target.id)

        if (e.target.id == "Home") {
            slideShowStore.alterPage(<Home/>)
        } else if (e.target.id == 'AddSlide') {
            slideShowStore.alterPage(<AddSlide/>)
        } else if (e.target.id == "DeleteCategory") {
            slideShowStore.alterPage(<DeleteCategory/>)
        }
    }

    render() {
        return(
            <header>
                <h1>SlideShow</h1>
                <nav>
                    <ul>
                        <li>
                            <a id="Home" onClick={this.page}>Home</a>
                        </li>
                        <li>
                            <a id="AddSlide" onClick={this.page}>Add Slide</a>
                        </li>
                        <li>
                            <a id="DeleteCategory" onClick={this.page}>Excluir categoria</a>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default inject('slideShowStore')(observer(Header))