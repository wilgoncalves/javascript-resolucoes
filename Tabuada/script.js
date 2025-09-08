function tabuada() {
    let numero = document.getElementById('txtnumero')
    let tabuada = document.getElementById('selecttabuada')

    if (numero.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let num = Number(numero.value)

        let contador = 1 
        tabuada.innerHTML = ''
        while (contador <= 10) {
            let item = document.createElement('option')
            item.text = `${num} X ${contador} = ${num * contador}`
            item.value = `tabuada${contador}`
            tabuada.appendChild(item)
            contador++
        }
    }

    
}