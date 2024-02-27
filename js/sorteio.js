class Sorteio {

    constructor() {
        this.listaDeNomes = [];
    }
    inserir() {
        let cpNome = document.getElementById('nome');
        if (cpNome.value != '') {
            this.listaDeNomes.push(cpNome.value);
            let nomeStr = this.listaDeNomes.join('; ');
            localStorage.listaDeNomes = nomeStr;
            cpNome.value = '';
            this.exibir();
        }
    }

    exibir() {
        let lista = document.getElementById('listaDeNomes');
        lista.innerHTML = '';
        for(let i = 0; i < this.listaDeNomes.length; i++){
            let item = document.createElement("li");
            item.innerHTML = this.listaDeNomes[i];

            lista.appendChild(item);
        }
    }

    recuperarLista() {
        let listaStr = localStorage.listaDeNomes;
         if  (listaStr != 'undefined'){
            this.listaDeNomes = listaStr.split(';');
         }
         this.exibir();
    }

    apagarLista() {

    }

    sortear() {

    }

}

var s = new Sorteio();
window.onload = () => {
    s.recuperarLista();
};