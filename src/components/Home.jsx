import React, {Component} from 'react'
import Titulo from './Titulo';
import Slide from './Slide';
import SlideAutomatic from './SlideAutomatic';
import axios from 'axios';
import CheckBox from './Checkbox';
import Button from './Button'
import ButtonClear from './ButtonClear';
import { inject, observer } from 'mobx-react';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            position:0, 
            res: [],
            resFiltrado: [],
            catogories: [],
            currentCheckBox: '',
            lastCategory: ''
        }

        this.interval = null
        this.lista = []

        this.nextAutomatic = this.nextAutomatic.bind(this)
        this.handleCheck = this.handleCheck.bind(this)
        this.renderCheckBox = this.renderCheckBox.bind(this)
        this.clear = this.clear.bind(this)
    }

    async componentDidMount() {
        try {
            const response = await axios.get('http://localhost:3000/')
            let categories = []
            response.data.forEach(item => {
                if (!categories.includes(item.category)) {
                    categories.push(item.category)
                }
            })
            this.lista = response.data
            this.setState({
                res: response,
                resFiltrado: response,
                categories
            })
        } catch (error) {
            console.log(error)
        }
    }

    // next() {

    //     let pos = this.state.position
        
    //     if (pos == this.state.resFiltrado.data.length - 1) {
    //         pos = -1
    //     }

    //     this.setState({
    //         position: pos += 1   
    //     })
    // }

    // prev() {
        
    //     let pos = this.state.position

    //     if (pos == 0) {
	// 		pos = this.state.resFiltrado.data.length
	// 	}

    //     this.setState({
    //         position: pos -= 1   
    //     })
    // }

    handleCheck(e){
        let category =  document.getElementById(e.target.id).getAttribute('data-category')

        let teste = {data: this.state.res.data.filter(item => category == item.category)}

        this.setState({
            resFiltrado: teste,
            position:0,
            lastCategory: category
        })
    }

    renderCheckBox(){
        const { categories } = this.state
        if(categories !== undefined){
           return categories.map(item => (
               <CheckBox name={item} handleCheck={this.handleCheck}/>
           ))
        }
    }

    clear() {
        let listaFiltrada = {data: this.state.res.data}
        this.setState({
            resFiltrado: listaFiltrada
        })

        document.getElementById(this.state.lastCategory).checked=false
    }
    
    nextAutomatic() {
        if (this.interval) { 
            clearInterval(this.interval)
            this.interval = null
        } else {
            this.interval = setInterval(() => {
                this.next()
            }, 2000)
        }
    }

    render() {
    
        return(
            <div>
                <Titulo pos={this.state.position}/> 

                <div className="checkbox-container">
                    {this.renderCheckBox()}
                </div>

                <ButtonClear clear={this.clear}/>

                <div className="slide-container">
                    {/* <Slide image={image.url} title={image.title} category={image.category}/> */}

                    <Button btnClass="prev" btnArrow="&#10094;"/>

                    <Button btnClass="next" btnArrow="&#10095;"/>
                </div>
                <SlideAutomatic nextAutomatic={this.nextAutomatic}/>
            </div>
        )
    }
}

export default Home