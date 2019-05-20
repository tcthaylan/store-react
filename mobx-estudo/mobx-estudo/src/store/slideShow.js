import { action, decorate, observable } from 'mobx'
import axios from 'axios'
class slideShowStore {

    nome = ""
    lista = []

    mudarNome(letra) {
        this.nome = letra
    }

    async listaTarefas() {
        let response = await axios.get('http://10.17.2.110:3000/')
        this.lista = response.data
    }

}
decorate(slideShowStore, {
    nome: observable,
    lista: observable,
    mudarNome: action,
    listaTarefas: action,
})

export default new slideShowStore();