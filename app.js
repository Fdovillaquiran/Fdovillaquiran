//Deteccion de las @media
MediaQueryList = window.matchMedia('(min-width: 576px)')

MediaQueryList.addListener(responsive)

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

let activo = 'inicio'

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
    activo = 'inicio'
}

function cargueExperiencia() {
    if(!inicio.classList.contains('inicio')){
        inicio.classList.add('inicio')
    }
    if(!estudios.classList.contains('estudios')){
        estudios.classList.add('estudios')
    }
    experiencia.classList.remove('experiencia')
    activo = 'experiencia'
}

function cargueEstudios() {
    if(!experiencia.classList.contains('experiencia')){
        experiencia.classList.add('experiencia')
    }
    if(!referencias.classList.contains('referencias')){
        referencias.classList.add('referencias')
    }
    estudios.classList.remove('estudios')
    activo = 'estudios'
}

function cargueReferencias() {
    estudios.classList.add('estudios')
    referencias.classList.remove('referencias')
    activo = 'referencias'
}

//funcionalidades responsivas
function responsive(e) {
    if(e.matches) {
        // console.log('normal')
        if(activo === 'inicio' || activo === 'experiencia'){
            inicio.classList.remove('inicio')
            experiencia.classList.remove('experiencia')
        }
        else {
            estudios.classList.remove('estudios')
            referencias.classList.remove('referencias')
        }
    }
    else {
        // console.log('mobil')
        if(activo === 'inicio'){
            inicio.classList.remove('inicio')
            if(!experiencia.classList.contains('experiencia')){
                experiencia.classList.add('experiencia')
            }
            if(!estudios.classList.contains('estudios')){
                estudios.classList.add('estudios')
            }
            if(!referencias.classList.contains('referencias')){
                referencias.classList.add('referencias')
            }
        }
        if(activo === 'experiencia'){
            experiencia.classList.remove('experiencia')
            if(!inicio.classList.contains('inicio')){
                inicio.classList.add('inicio')
            }
            if(!estudios.classList.contains('estudios')){
                estudios.classList.add('estudios')
            }
            if(!referencias.classList.contains('referencias')){
                referencias.classList.add('referencias')
            }
        }
        if(activo === 'estudios'){
            estudios.classList.remove('estudios')
            if(!inicio.classList.contains('inicio')){
                inicio.classList.add('inicio')
            }
            if(!experiencia.classList.contains('experiencia')){
                experiencia.classList.add('experiencia')
            }
            if(!referencias.classList.contains('referencias')){
                referencias.classList.add('referencias')
            }
        }
        if(activo === 'referencias'){
            referencias.classList.remove('referencias')
            if(!inicio.classList.contains('inicio')){
                inicio.classList.add('inicio')
            }
            if(!experiencia.classList.contains('experiencia')){
                experiencia.classList.add('experiencia')
            }
            if(!estudios.classList.contains('estudios')){
                estudios.classList.add('estudios')
            }
        }
    }
}


