let nomes = [];

function adicionarAmigo(){

    let nome = document.getElementById('amigo').value.trim();

    if (nome === '') {
        alert('Por favor, digite um nome no campo abaixo antes de adicionar.');
        return;
    }

    nomes.push(nome);
    console.log(nomes);
      
    mostrar();
    
    document.getElementById('amigo').value = ''; 
}

function mostrar(){
    let lista = document.querySelector('.name-list');
    lista.innerHTML = "";

    for(let ultimonome of nomes) {
        lista.innerHTML += "<li>" + ultimonome + "</li>";
    }
    
}

function sortearAmigo(){

    let lista = document.querySelector('.name-list');
    document.querySelector('.result-list').value = '';
    lista.innerHTML = "";

    let random = Math.floor(Math.random() * nomes.length);
    document.querySelector('.result-list').innerHTML = "O amigo secreto sorteado é: " + nomes[random];

}
