import React from 'react'
import { inject, observer } from 'mobx-react';

class Form extends React.Component {

    constructor(props) {
        super(props)    
        this.salvar = this.salvar.bind(this)
    }

    salvar() {
        // const { slideShowStore } = this.props
        // slideShowStore.mudarNome(e.target.value)
        // const array = ['nome', 'categoria']
        // let obj = {}
        // array.forEach(item => {
        //     obj[item] = document.getElementById(item).value
        // })
        // console.log(obj)
        const inputs = document.querySelectorAll('input')
        let obj = {}
        inputs.forEach(item => {
            obj[item.id] = document.getElementById(item.id).value
        })
        console.log(obj)
    }

    render() {
        return (
            // <input id="teste" onChange={this.mudarNomeStore} />
            <div>
                <input id="nome" placeholder="nome"/>
                <input id="categoria" placeholder="categoria"/>
                <button onClick={this.salvar}>salvar</button>
            </div>
        )
    }
}

export default inject('slideShowStore')(observer(Form))