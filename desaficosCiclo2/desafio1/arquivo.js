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
const ulProduto = document.querySelector("#cestaDoCliente");
const cestaDoCliente = document.querySelectorAll("#cestaDoCliente");

function listarCesta() {
    let frutas = [];
    for (let prod of produtos) {
        if (frutas.indexOf(prod.descricao) == -1) {
            frutas.push(prod.descricao);
        };
    };
    //console.log(frutas);

    cesta.forEach(lista => {
        lista.addEventListener('click', (elemento) => {
            let li = document.createElement('li');
            ulProduto.appendChild(li).textContent = elemento.target.innerHTML;
        });
    });
};

function somar() {
    const precoProduto = document.querySelectorAll(".precoProduto > li");
    const total = document.querySelector('#mostraTotalCompra');
    let soma = 0;
    precoProduto.forEach(prod => {
        prod.addEventListener('click', (elemento) => {
            soma += Number(prod.dataset.preco);
            total.value = soma.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
        });
    });
};

export { listaDeProdutos, listarCesta, somar };
