let num = document.querySelector('input#txtnumber')
let lista = document.querySelector('select#selectnumeros')
let resultado = document.querySelector('div#resultado')
let valores = []

function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function emLista(n, lista) {
    if (lista.indexOf(Number(n)) != -1) {
        return true 
    } else {
        return false
    }
}

function adicionarNumeros() {
    if (isNumber(num.value) && !emLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        resultado.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista!')
    }
    num.value = ''
    num.focus()
}

function calcular() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for (let posicao in valores) {
            soma += valores[posicao]
            
            if (valores[posicao] > maior) {
                maior = valores[posicao]
            }

            if (valores[posicao] < menor) {
                menor = valores[posicao]
            }
        }
        media = soma / total

        resultado.innerHTML = ''
        resultado.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        resultado.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        resultado.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        resultado.innerHTML += `<p>A soma de todos os números é igual a ${soma}.</p>`
        resultado.innerHTML += `<p>A média de todos os números é igual a ${media}.</p>`
    }
}