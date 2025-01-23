let nomeAmigos = []; 

function adicionarAmigo() {
    let pegarNome = document.getElementById('amigo'); 
    let listaAmigos = document.getElementById('listaAmigos');

    if (pegarNome.value.trim() === "") {
        alert("Por favor, digite um nome antes de adicionar.");
    } else {
        nomeAmigos.push(pegarNome.value.trim());
        let itemLista = document.createElement('li');
        itemLista.textContent = pegarNome.value.trim();
        listaAmigos.appendChild(itemLista);
        pegarNome.value = "";
        pegarNome.focus();
    }
}

function sortearAmigo() {
    let resultado = document.getElementById('resultado');

    if (nomeAmigos.length === 0) {
        resultado.innerHTML = "<li>Não é possível sortear, pois não há nomes na lista.</li>";
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * nomeAmigos.length);
    let amigoSorteado = nomeAmigos[indiceSorteado];
    resultado.innerHTML = `<li>O amigo sorteado foi: <strong>${amigoSorteado}</strong></li>`;
}

function limparCampos() {
    document.getElementById('amigo').value = ""; 
    document.getElementById('resultado').innerHTML = "";

}

document.getElementById('amigo').addEventListener('focus', limparCampos);
