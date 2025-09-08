function contar() {
    var inicio = window.document.getElementById('txtinicio')
    var fim = window.document.getElementById('txtfim')
    var passo = window.document.getElementById('txtpasso')
    var resultado = window.document.getElementById('resultado')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        resultado.innerHTML = 'Impossível contar!'
        //window.alert('[ERRO] Faltam dados!')
    } else {
        resultado.innerHTML = 'Contando: <br>'

        var valorInicio = Number(inicio.value)
        var valorFim = Number(fim.value)
        var valorPasso = Number(passo.value)

        if (valorPasso <= 0) {
            window.alert('Passo inválido! Considerando Passo = 1')
            valorPasso = 1
        }

        if (valorInicio < valorFim) {
            // contagem crescente
            for (var cont = valorInicio; cont <= valorFim; cont += valorPasso) {
                resultado.innerHTML += ` ${cont} \u{1F449}`
            }
        } else {
            // contagem decrescente
            for (var cont = valorInicio; cont >= valorFim; cont -= valorPasso) {
                resultado.innerHTML += ` ${cont} \u{1F449}`
            }
        }
        resultado.innerHTML += ` \u{1F3F4}`
    }
}