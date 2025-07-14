function verificar() {
    var dataAtual = new Date()
    var anoAtual = dataAtual.getFullYear()
    var anoFormulario = window.document.getElementById('txtano')
    var resultado = window.document.querySelector('div#resultado')

    if (anoFormulario.value.length == 0 || Number(anoFormulario.value) > anoAtual || Number(anoFormulario.value) == 0) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var generoFormulario = window.document.getElementsByName('radsex')
        var idade = anoAtual - Number(anoFormulario.value)
        
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        if (generoFormulario[0].checked) {
            genero = 'Homem'
            if (idade >= 1 && idade < 10){
                // 
                img.setAttribute('src', 'imagens/bebe-menino.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'imagens/homem-jovem.png')
            } else if (idade < 60) {
                // adulto
                img.setAttribute('src', 'imagens/homem-adulto.png')
            } else {
                // idoso
                img.setAttribute('src', 'imagens/homem-idoso.png')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 1 && idade < 10){
                // criança
                img.setAttribute('src', 'imagens/bebe-menina.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'imagens/mulher-jovem.png')
            } else if (idade < 60) {
                // adulto
                img.setAttribute('src', 'imagens/mulher-adulta.png')
            } else {
                // idoso
                img.setAttribute('src', 'imagens/mulher-idosa.png')
            }
        }

        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        resultado.appendChild(img)
    }
}