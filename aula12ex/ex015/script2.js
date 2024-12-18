const idade = document.getElementById('ano');
const sexo = document.getElementById('sexo');
const botao = document.getElementById('botao');
const resultado = document.getElementById('res');
const imagem = document.getElementById('img');

botao.addEventListener('click', function() {
    const idadeValor = Number(idade.value);

    if (idadeValor >= 0 && idadeValor <= 3) {

        if(document.getElementById('sexom').checked) { 
            resultado.innerHTML = `Detectamos: Homem com ${idadeValor} anos.`

         }else if(document.getElementById('sexof').checked) { 
            resultado.innerHTML = `Detectamos: Mulher com ${idadeValor} anos.`
  
        }else if     

} })

