//window.onload = function(){

let produtos = [
    { descricao: "Morango", preco: 7.49 },
    { descricao: "Uva", preco: 8.99 },
    { descricao: "Banana", preco: 4.25 },
    { descricao: "Maçã", preco: 3.28 },
    { descricao: "Melancia", preco: 6.89 },
];

const listaProdutos = document.querySelector("#produtos");

function listaDeProdutos() {
    for (let prod of produtos) {
        const filhoLi = document.createElement('li');

        for (let listaP in prod) {
            if (listaP == 'preco') {
                listaProdutos.appendChild(filhoLi).setAttribute('data-preco', prod[listaP]);
            } else {
                listaProdutos.appendChild(filhoLi).textContent = `${prod[listaP]}`;
                console.log();
            };
        };
    };
};

const cesta = document.querySelectorAll("#produtos");
const cestaDoCliente = document.querySelector("#cestaDoCliente");
const total = document.querySelector('#mostraTotalCompra');

function listarCesta() {
    let soma = 0;
    cesta.forEach(lista => {
        lista.addEventListener('click', (elemento) => {
            if (elemento.target.innerHTML === 0) {
                alert(`O item ${elemento.target.innerHTML} já existe na sua cesta.`)
            } else {
                let li = document.createElement('li');
                cestaDoCliente.appendChild(li).textContent = elemento.target.innerHTML;
                let valor = Number(elemento.target.dataset.preco);
                soma += valor;
                total.value = soma.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
            };
        });
    });
};

export { listaDeProdutos, listarCesta };
