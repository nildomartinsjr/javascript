var numero = document.getElementById('txtnumero')
var tab = document.getElementById('seltab')
var botao = document.getElementById('botao')

botao.addEventListener('click', function(){
if(numero.value.length == 0) {
    window.alert('Por favor, digite um número!')
} else {
    var num = Number(numero.value) 
    let c = 1
    tab.innerHTML = ""
    while (c <=10) {
        let item = document.createElement('option')
        item.text = `${num} x ${c} = ${num*c}`
        item.value = `tab${c}`
        tab.appendChild(item)
        c++

    }
}})


