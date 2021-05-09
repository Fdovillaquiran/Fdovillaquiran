const derInicio = document.querySelector('#der-inicio')
const menuExperiencia = document.querySelector('#menu-experiencia')
const izqExperiencia = document.querySelector('#izq-experiencia')
const derExperiencia = document.querySelector('#der-experiencia')
const menuEstudios = document.querySelector('#menu-estudios')
const izqEstudios = document.querySelector('#izq-estudios')
const derEstudios = document.querySelector('#der-estudios')
const menuReferencias = document.querySelector('#menu-referencias')
const izqReferencias = document.querySelector('#izq-referencias')

const inicio = document.querySelector('#inicio')
const experiencia = document.querySelector('#experiencia')
const estudios = document.querySelector('#estudios')
const referencias = document.querySelector('#referencias')

eventListener()
function eventListener() {
    derInicio.addEventListener('click', cargueExperiencia)
    menuExperiencia.addEventListener('click', cargueInicio)
    izqExperiencia.addEventListener('click', cargueInicio)
    derExperiencia.addEventListener('click', cargueEstudios)
    menuEstudios.addEventListener('click', cargueInicio)
    izqEstudios.addEventListener('click', cargueExperiencia)
    derEstudios.addEventListener('click', cargueReferencias)
    menuReferencias.addEventListener('click', cargueInicio)
    izqReferencias.addEventListener('click', cargueEstudios)
}

function cargueInicio() {
    if(!experiencia.classList.contains('experiencia')){
        experiencia.classList.add('experiencia')
    }
    if(!estudios.classList.contains('estudios')){
        estudios.classList.add('estudios')
    }
    if(!referencias.classList.contains('referencias')){
        referencias.classList.add('referencias')
    }
    
    inicio.classList.remove('inicio') 
}

function cargueExperiencia() {
    if(!inicio.classList.contains('inicio')){
        inicio.classList.add('inicio')
    }
    if(!estudios.classList.contains('estudios')){
        estudios.classList.add('estudios')
    }
    experiencia.classList.remove('experiencia')
}

function cargueEstudios() {
    if(!experiencia.classList.contains('experiencia')){
        experiencia.classList.add('experiencia')
    }
    if(!referencias.classList.contains('referencias')){
        referencias.classList.add('referencias')
    }
    
    estudios.classList.remove('estudios')
}

function cargueReferencias() {
    estudios.classList.add('estudios')
    referencias.classList.remove('referencias')
}