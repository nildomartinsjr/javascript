const inicio1 = document.getElementById("txtinicio")
const fim1 = document.getElementById('txtfim')
const passo1 = document.getElementById('txtpasso')
const botao = document.getElementById('botao')
const resultado = document.getElementById('res')

botao.addEventListener("click", function() {
    
    if(inicio1.value.length === 0 || fim1.value.length === 0 || passo1.value.length === 0) {
        resultado.innerHTML = 'Impossível contar!'
      
    } else {
       resultado.innerHTML = 'Contando: <br>'
        const inicio = Number(inicio1.value)
        const fim = Number(fim1.value)
        let passo = Number(passo1.value)
        if (passo <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
             passo = 1
        }
        if (inicio < fim) 
            //Contagem crescente
            {for (let c = inicio; c <= fim; c += passo) {
                resultado.innerHTML += `${c} \u{1F449}`
             }
        } else {
            //Contagem regressiva
            for(let c = inicio; c >= fim; c -= passo) {
                resultado.innerHTML += `${c} \u{1F449}`
            }
        }
        resultado.innerHTML += `\u{1F3C1}`
            
    }
    
})