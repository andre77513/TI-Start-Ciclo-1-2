//window.onload = function(){

let produtos = [
    { 'descricao': 'Morango', 'preco': 7.49 },
    { 'descricao': 'Uva', 'preco': 8.99 },
    { 'descricao': 'Banana', 'preco': 4.25 },
    { 'descricao': 'Maçã', 'preco': 3.28 },
    { 'descricao': 'Melancia', 'preco': 6.89 },
];

const listaProdutos = document.querySelector('#produtos');

function listaDeProdutos() {
    for (let prod of produtos) {
        const filhoLi = document.createElement('li');

        for (let listaP in prod) {
            if (listaP == 'preco') {
                listaProdutos.appendChild(filhoLi).setAttribute('data-preco', prod[listaP]);
            } else {
                listaProdutos.appendChild(filhoLi).textContent = `${prod[listaP]} R$: ${prod.preco}`;
            };
        };
    };
};

const cesta = document.querySelectorAll('#produtos');
const cestaDoCliente = document.querySelector('#cestaDoCliente');
const total = document.querySelector('#mostraTotalCompra');

function listarCesta() {
    let arrayCesta = [];
    let soma = 0;
    cesta.forEach(lista => {
        lista.addEventListener('click', (elemento) => {
            const li = document.createElement('li');
            let alvo = elemento.target.innerHTML;
            let a = `R$: ${elemento.target.dataset.preco}`;

            if (arrayCesta.indexOf(alvo) == -1) {
                arrayCesta.push(alvo);
                cestaDoCliente.appendChild(li).textContent = alvo.replace(a, ' ');
                let valor = Number(elemento.target.dataset.preco);
                soma += valor;
                total.value = soma.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
            } else {
                alert(`O item ${alvo.replace(a, ' ')}já existe na sua cesta!`);
            };
        });
    });
};

export { listaDeProdutos, listarCesta };
