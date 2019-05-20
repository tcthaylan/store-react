import React, {Component} from 'react'
import axios from 'axios'

export default class DeleteCategory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [] 
        }
    }

    async componentDidMount() {
        try {
            const result = await axios.get('http://10.17.2.110:3000/')

            let categories =[] 
            result.data.forEach(item => {
                if (!categories.includes(item.category)) {
                    categories.push(item.category)
                }
            })   

            this.setState({
                categories
            })
            console.log(categories)  
        } catch (error) {
            console.log(error)
        }
    }

    deleteCategory(e) {
       let itens = document.getElementById('category')

       for (let i = 0; i < itens.length; i++) {
            if (itens[i].selected == true) {
                let optionId = itens[i].id
                return
            }
       }
       axios.delete('')
    }

    render() {
        return(
            <div className="delete-container">
                <h1>Deletar Categoria</h1>
                <p>Selecione uma categoria:</p>
                <select id="category">
                    {this.state.categories.map(item => 
                        <option id={item}>{item}</option>
                    )}
                </select>
                <input type="submit" value="Excluir" onClick={this.deleteCategory}/>
            </div>
        )
    }
}