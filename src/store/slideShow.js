import React from 'react'
import { action, decorate, observable, computed } from 'mobx'
import Home from './../components/Home'
import AddSlide from './../components/AddSlide'
import DeleteCategory from './../components/DeleteCategory'
import axios from 'axios'

class slideShowStore {
    constructor() {
        this.page = <Home />
        this.position = 0   
        this.res = []
        this.resFiltrado = []
        this.categories = []
        this.currentCheckBox = ''
        this.lastCategory = ''

        this.prev = this.prev.bind(this)
        this.next = this.next.bind(this)
    }

    async componentDidMount() {
        try {
            const response = await axios.get('http://10.17.2.110:3000/')
            
            response.data.forEach(item => {
                if (!this.categories.includes(item.category)) {
                    this.categories.push(item.category)
                }
            })
            
            this.res = response.data
            this.resFiltrado = response.data
        } catch (error) {
            console.log(error)
        }
    }

    alterPage(page) {
        this.page = page
    }

    prev() {
        // let pos = this.position

        // if (pos == 0) {
        //     // pos = this.resFiltrado.data.length
        //     pos = 5
		// }

        // this.position = pos - 1
        
    }

    next() {
        // let pos = this.position
        
        // // if (pos == this.resFiltrado.data.length - 1) {
        // //     pos = -1
        // // }
        // if (pos == 5) {
        //     pos = 0
        // }

        // this.position = pos + 1
        console.log(this.res)
    }
}

decorate(slideShowStore, {
    page: observable,
    position: observable,
    res: observable,
    resFiltrado: observable,
    categories: observable,
    currentCheckBox: observable,
    lastCategory: observable,
    alterPage: action,
    funcaoTeste: action,
    prev: action,
    next: action,
    getCategories: computed
})

export default new slideShowStore();