import React from 'react'
import { observer, inject } from 'mobx-react';
import { toJS } from 'mobx';
import Lista from './lista'
class Resultado extends React.Component {

    constructor(props){
        super(props)

    }

    componentWillMount(){
        const { slideShowStore } = this.props
        slideShowStore.listaTarefas()
        console.log(slideShowStore.lista)
    }

    renderLista(){
        const { slideShowStore } = this.props
        if(slideShowStore.lista.length){
            return slideShowStore.lista.map(item => <Lista {...item}/>)
        }
      
    }

    render() {
        console.log(toJS(this.props.slideShowStore))
        return (
            <div>
                {this.props.slideShowStore.nome}
                {this.renderLista()}
            </div>
        )
    }
}

export default inject('slideShowStore')(observer(Resultado))