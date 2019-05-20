import React from 'react';
import Form from './component/form'
import Resultado from './component/resultado'
import './App.css';


class App extends React.Component{
  render(){
    return(
      <div>
        <h1 style={{textAlign: 'center'}}>Mobx</h1>
        <Form />
        <Resultado />
      </div>
    )
  }
}

export default App;
