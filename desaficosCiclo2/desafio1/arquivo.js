//window.onload = ()=>{

    let produtos = [
        {descricao:"Morango", preco: 7.59},
        {descricao:"Uva", preco: 8.99},
        {descricao:"Banana", preco: 4.20},
        {descricao:"Maçã", preco: 3.28},
        {descricao:"Melancia", preco: 6.89},
    ];

    const listaProdutos = document.querySelector("#produtos");
    function listar(){
        for (let prod of produtos) {
            const filhoLi = document.createElement('li');
            for (let listaP in prod) {
                if(listaP == 'preco') {
                    listaProdutos.appendChild(filhoLi).setAttribute('data-preco', prod[listaP]);
                    listaProdutos.appendChild(filhoLi).setAttribute('class', 'frutas');
                }else{
                    listaProdutos.appendChild(filhoLi).textContent = `${prod[listaP]}`;
                }
            }

        }
    }

    const cesta = document.querySelectorAll(".ulProduto");
    const ulProduto = document.querySelector("#cestaDoCliente");
    
function listarCesta(){ 
    cesta.forEach(lista => {
        lista.addEventListener('click', (elemento)=>{
            let li = document.createElement('li');
            ulProduto.appendChild(li).textContent = elemento.target.innerHTML;
        })
    });
}       


export {listar, listarCesta};
