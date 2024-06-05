const btnAncora = document.querySelectorAll('.botões__ancora')
const btnVisitados = document.querySelectorAll ('.tópicos__link')

btnAncora.forEach (function (btn) {
    btn.addEventListener ('mouseover', () => {
        
        btn.classList.remove ('botões__ancora')
        btn.classList.add ('botões__ancora__efeito')

    })

    btn.addEventListener ('mouseout', () => {
        
        btn.classList.remove ('botões__ancora__efeito')
        btn.classList.add ('botões__ancora')

    })
})

btnVisitados.forEach (function (visitado) {
    visitado.addEventListener ('mouseover', () => {
        
        visitado.classList.remove ('tópicos__link')
        visitado.classList.add ('tópicos__link__efeito')

    })

    visitado.addEventListener ('mouseout', () => {
        
        visitado.classList.remove ('tópicos__link__efeito')
        visitado.classList.add ('tópicos__link')

    })
})