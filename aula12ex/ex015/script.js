document.getElementById("btn-verificar").addEventListener("click", verificar);

function verificar() {
    const data = new Date();
    const ano = data.getFullYear();
    const fano = document.getElementById("txtano");
    const res = document.querySelector("div#res");

    if (fano.value.length === 0 || Number(fano.value) > ano) {
        window.alert("[ERRO] Verifique os dados e tente novamente!");
    } else {
        const fsex = document.getElementsByName("radsex");
        const idade = ano - Number(fano.value);
        let gênero = "";
        const img = document.createElement("img");
        img.setAttribute("id", "foto");

        if (fsex[0].checked) {
            gênero = "Homem";
            if (idade >= 0 && idade < 10) {
                img.setAttribute("src", "menino.png");
            } else if (idade >= 10 && idade <= 21) {
                img.setAttribute("src", "jovemh.png");
            } else if (idade < 50) {
                img.setAttribute("src", "homem.png");
            } else {
                img.setAttribute("src", "idoso.png");
            }
        } else if (fsex[1].checked) {
            gênero = "Mulher";
            if (idade >= 0 && idade < 10) {
                img.setAttribute("src", "menina.png");
            } else if (idade >= 10 && idade <= 21) {
                img.setAttribute("src", "jovemm.png");
            } else if (idade < 50) {
                img.setAttribute("src", "mulher.png");
            } else {
                img.setAttribute("src", "idosa.png");
            }
        }

        res.style.textAlign = "center";
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`;
        res.appendChild(img);
    }
}
