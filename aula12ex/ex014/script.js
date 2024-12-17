
    window.onload = function carregar() {
        const msg = document.getElementById('msg')
        const img = document.getElementById('imagem')
        const body = document.querySelector('body')
        const data = new Date()
        const hora = data.getHours()
   
        msg.innerHTML = `Agora são ${hora} horas.`

        if(hora >=0 && hora < 12) {
            //BOM DIA!
            img.src = 'manha.PNG'
            body.style.background = 'rgb(120, 177, 211)'
            
        }else if(hora >=12 && hora <= 18) {
            //BOA TARDE!
            img.src = 'tarde.PNG'
            body.style.background = 'rgb(182, 137, 120)'
        }else{
            //BOA NOITE!
            img.src = 'noite.PNG'
            body.style.background = 'rgb(15, 14, 59)'

    }
}
