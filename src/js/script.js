async function buscarCEP(){
    let dados = document.getElementById('dado').value.replace("-", "");
    const cep = await fetch(`https://viacep.com.br/ws/${dados}/json/`).then((Response) => Response.json());
    mostrarCEP(cep);
}
function mostrarCEP(cep){
    document.getElementById('resultado').style.display = "block";
    document.getElementById('logradouro').textContent = cep.logradouro;
    document.getElementById('bairro').textContent = cep.bairro;
    document.getElementById('cidade').textContent = cep.localidade;
    document.getElementById('uf').textContent = cep.uf;
}