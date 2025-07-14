function carregar() {
    var mensagem = document.getElementById('mensagem')
    var imagem = document.getElementById('imagem')

    var data = new Date()
    var hora = data.getHours()
    mensagem.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        imagem.src = 'imagens/manha.png'
        document.body.style.background = '#BF5D24'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        imagem.src = 'imagens/tarde.png'
        document.body.style.background = '#B7BDBD'
    } else {
        // BOA NOITE!
        imagem.src = 'imagens/noite.png'
        document.body.style.background = '#223A40'
    }
}

