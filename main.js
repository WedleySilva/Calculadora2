
function multiplicar(valor1, valor2, valor3) {
    return valor1 * valor2 * valor3
}
function somar(valor1, valor2, valor3) {
    return valor1 + valor2 + valor3
}

function dividir(valor1, valor2, valor3) {
    return valor1 / valor2 / valor3
}

function subtrair(valor1, valor2, valor3) {
    return valor1 - valor2 - valor3
}

function handleBtMult() {
    const v1 = Number(document.getElementById('valor1').value)
    const v2 = Number(document.getElementById('valor2').value)
    const valor3 = Number(document.getElementById('valor3').value)
    document.getElementById('resultado').innerHTML = multiplicar(v1, v2, v3)
}

function handleBtSomar () {
    const v1 = Number(document.getElementById('valor1').value)
    const v2 = Number(document.getElementById('valor2').value)
    const valor3 = Number(document.getElementById('valor3').value)
    document.getElementById('resultado').innerHTML = somar(v1, v2, v3)
}

function handleBtSub () {
    const v1 = Number(document.getElementById('valor1').value)
    const v2 = Number(document.getElementById('valor2').value)
    const valor3 = Number(document.getElementById('valor3').value)
    document.getElementById('resultado').innerHTML = subtrair(v1, v2, v3)
}

function handleBtDiv () {
    const v1 = Number(document.getElementById('valor1').value)
    const v2 = Number(document.getElementById('valor2').value)
    const valor3 = Number(document.getElementById('valor3').value)
    document.getElementById('resultado').innerHTML = dividir(v1, v2, v3)
}

document.getElementById('btMult').addEventListener('click',handleBtMult)
document.getElementById('btSomar').addEventListener('click', handleBtSomar)
document.getElementById('btDiv').addEventListener('click', handleBtDiv)
document.getElementById('btSub').addEventListener('click', handleBtSub)