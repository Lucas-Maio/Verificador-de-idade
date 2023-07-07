function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById("resultado")
    if (Number(fano.value.length) == 0 || Number(fano.value) > ano) {
        window.alert(`[ERRO] Preencha os dados novamente!`)
    } else {
        var fsex = document.getElementsByName("radsexo")
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement("img")
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'menino.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'garoto.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'homem.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'menina.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'garota.png')
            } else if (idade < 50) {
                //adulta
                img.setAttribute('src', 'mulher.png')
            } else {
                //idosa
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
        
        
        
        
    }
}
