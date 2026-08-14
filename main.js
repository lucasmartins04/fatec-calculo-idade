'use strict'

const botaoCalcular = document.getElementById('calcular')
    function calcularIdade ( ){
        const anonascimento = document.getElementById("ano-nascimento")
        const anoAtual = 2026
        const caixaResultado = document.getElementById("resultado")

        const idade = anoAtual - anonascimento.value

        caixaResultado.textContent = idade

    }


botaoCalcular.onclick = calcularIdade 