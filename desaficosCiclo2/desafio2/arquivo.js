//window.onload = ()=>{
    //https://viacep.com.br/ws/${cep}/json/

    function resultadoCep(dadosCep){
        for (const campo in dadosCep) {
            if (document.querySelector(`#${campo}`)) {
                document.querySelector(`#${campo}`).value = dadosCep[campo];
            }
        }
    }

    let dadosCep = async function(cep){
        let url = `https://viacep.com.br/ws/${cep}/json/`;
        try {
            let dadosFetch = await fetch(url);
            let dadosJason = await dadosFetch.json();
            resultadoCep(dadosJason);
        } catch (error) {
            alert("Por favor digite um número de cep válido");
        }
    }

    const btnBuscar = document.querySelector("#buscarCep");
    const cep_ = document.querySelector("#numeroCep");

    btnBuscar.addEventListener('click', ()=>{
        dadosCep(cep_.value);
    })
//}
export {resultadoCep};