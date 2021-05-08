const derInicio = document.querySelector('#der-inicio')
const menuExperiencia = document.querySelector('#menu-experiencia')
const inicio = document.querySelector('#inicio')
const experiencia = document.querySelector('#experiencia')

eventListener()
function eventListener() {
    derInicio.addEventListener('click', experienciaLaboral)
}

function experienciaLaboral() {
    inicio.classList.add('inicio')
    experiencia.classList.remove('experiencia')
}