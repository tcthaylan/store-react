import React, {Component} from 'react'
import axios from 'axios'
import './css/addSlide.css'

export default class AddSlide extends Component {

    async addSlide() {
        let title = document.getElementById('title').value
        let category = document.getElementById('category').value
        let image = document.getElementById('image').files[0]

        let imageUrl = document.getElementById('image').value;
        const baseUrl = "http://10.17.2.110:3000/public/images/"
        let newimage = baseUrl + imageUrl.split('\\')[2]
        
        if (title != '' && category != '' && image != '') {
            var formData = new FormData();
            formData.append("imagem", image);

            // Salvando imagem
            const response = await axios.post('http://10.17.2.110:3000/addImage', formData, 
            {
                withCredentials:true,
            }).catch((error) => {
                console.log(error)
            })
            
            // Salvando dados da imagem
            if (response.status == 200) {
                await axios.post('http://10.17.2.110:3000/addInfoImage', {
                    title: title,
                    category: category,
                    url: newimage,
                },{
                    withCredentials:true,
                })
            }
        }
    }

    render() {
        return(
            <div>
                <h1 className="form-AddSlide-title">Adicionar Slide</h1>
                <img src="./../images/undraw_subscriber_vabu.svg" className="img-addSlide"/>
                <div className="form-AddSlide">
                    <div>
                        <label>Title</label>
                        <input type="text" id="title"/>
                    </div>
                    <div>
                        <label>Category</label>
                        <input type="text" id="category"/>
                    </div>
                    <div>
                        <label>Image</label>
                        <input type="file" id="image"/>
                    </div>
                    <input type="submit" value="Adicionar" onClick={this.addSlide}/>
                </div>
            </div>
        )
    }
}