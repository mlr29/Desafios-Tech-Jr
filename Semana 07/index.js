function calcular(acao, valor) {

    //referência do input de saída
    const campoResultado = document.getElementById('resultado')

    //limpa a saída em casa de resultado undefined
    if (campoResultado.value === 'undefined') {
        campoResultado.value = ''
    }

    //Funcionalidades para as operações
    if (acao === 'acao') {

        if (valor === 'c') {
            campoResultado.value = ''
        } else if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
            campoResultado.value += valor
        } else if (valor === '=') {
            campoResultado.value = eval(campoResultado.value)
        }
    }

    //O valor do algarismo é concatenado na saída
    if (acao === 'valor') {
        campoResultado.value += valor
    }
}