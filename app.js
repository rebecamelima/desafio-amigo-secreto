//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let amigoSorteado = []; //Lista temporária 
let ultimoSorteado = null; //Guarda nome do amigo sorteado

const input = document.querySelector("#amigo");
input.addEventListener("keydown", function(event) {
    if(event.key === "Enter") {
        event.preventDefault();
        adicionarAmigo();
    }
});

function adicionarAmigo() {
    let nome = document.querySelector("#amigo").value;
    if (nome != "") { //verifica se não está vazio
        if (amigos.includes(nome)) {
            alert("Este nomejá fi adicionado!");
            return;
        }

        amigos.push(nome); //add array de amigos
        document.querySelector("#amigo").value = ""; //Limpa o input

        listaConteudo("resultado","");
        listaConteudo("listaAmigos", null, amigos);
    } else {
        alert("Atenção: Insira um nome válido.")
    }
}

function sortearAmigo() {
    if (amigos.length == 0) { //verifica se há amigos cadastrado
        alert("Nenhum amigo cadastrado para sortear.");
        return;
    }

    if (amigoSorteado.length === 0) {
        amigoSorteado = [...amigos];
        alert("Todos os amigos já foram sorteados! Reiniciando o sorteio.");
    }

    let posicaoAmigoSorteado = parseInt(Math.random() * amigoSorteado.length); //Sorteia indice aleatório baseado no tamanho do array
    sorteado = amigoSorteado[posicaoAmigoSorteado];

    amigoSorteado.splice(posicaoAmigoSorteado, 1);

    listaConteudo("resultado","Amigo sorteado: " + sorteado); //Exibição com o resultado
}

function listaConteudo(listaId, conteudo, listaDeItems) {
    let elemento = document.querySelector("#" + listaId);
    elemento.innerHTML = "";

    if (listaDeItems != null && listaDeItems.length > 0) {
        listaDeItems.forEach(function(item, index) {
            let li = document.createElement("li");
            li.innerHTML = item;

            let botaoRemover = document.createElement("button");
            botaoRemover.innerHTML = "x";
            botaoRemover.className = "remover";
            botaoRemover.onclick = function() {removerAmigo(index); };

            li.appendChild(botaoRemover);
            elemento.appendChild(li);
        });
        return;
    } else if (conteudo != null) {
        let item = document.createElement("li");
        item.innerHTML = conteudo;
        elemento.appendChild(item);
    }
}

function removerAmigo(index) {
    amigos.splice(index, 1);
    amigoSorteado = amigoSorteado.filter(amigo => amigos.includes(amigo));
    listaConteudo("listaAmigos", null, amigos);
}