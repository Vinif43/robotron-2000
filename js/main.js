const controle = document.querySelectorAll(".controle-ajuste")
const estatisticas = document.querySelectorAll("[data-estatistica]")

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -14
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        atualizaEstaticas(evento.target.dataset.controles, evento.target.dataset.pecas, evento.target.parentNode)
        manipulaDados(evento.target.dataset.controles, evento.target.parentNode)
    })
})


function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]")


    if(operacao === "-"  && parseInt(peca.value) > 0) {
        peca.value = parseInt(peca.value) - 1
    } 
    else if (operacao === "+") {
        peca.value = parseInt(peca.value) + 1
    }
}

function atualizaEstaticas(operacao, peca, controle) {
    const pecal = controle.querySelector("[data-contador]")

    if(operacao === "-" && parseInt(pecal.value) > 0) {

        estatisticas.forEach( (elemento) => {
            elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica]
        })
    }
    if(operacao === "+") {
        estatisticas.forEach( (elemento) => {
            elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
        })
    }
}

// outro metedo com menos codigo:

// function atualizaEstaticas(operacao, peca, controle) {
//     const pecal = controle.querySelector("[data-contador]")

//     if(operacao === "-" && parseInt(pecal.value) > 0) {
//         pecal.value = parseInt(pecal.value) - 1

//         estatisticas.forEach( (elemento) => {
//             elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica]
//         })
//     }
//     if(operacao === "+") {
//         pecal.value = parseInt(pecal.value) + 1
//         estatisticas.forEach( (elemento) => {
//             elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
//         })
//     }
// }


