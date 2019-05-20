import React from 'react';
import './css/titulo.css'

class Titulo extends React.Component {
    constructor(props){
        super(props);
    }

    // componentWillUnmount(){
    //     alert('TO SAINDO')
    // }

    render(){
        return<h1>Slide número: {this.props.pos + 1}</h1>
    }
}

export default Titulo

// export default (props) => <h1>{props.nome}!!!! Slide número: {props.aleluia + 1}</h1>
