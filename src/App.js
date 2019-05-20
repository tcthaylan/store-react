import React, {Component} from 'react';
import './App.css';
import './styles.css'
import Header from './components/Header';
import Home from './components/Home';
import AddSlide from './components/AddSlide'
import DeleteCategory from './components/DeleteCategory'
import LoadPage from './components/LoadPage'
import MobxDevtools from 'mobx-react-devtools'

class App extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
        <div className="App">
            <Header />
            <LoadPage />
            <MobxDevtools />
        </div>
        )
    }
}

export default App