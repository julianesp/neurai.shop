var imagenes = ['../assets/img/aleatorias/bosque.jpg',
                '../assets/img/aleatorias/cisne.jpg']

var contador = 0

function carrusel(contenedor) {
    contenedor.addEventListener('click', e => {
        // variables to traer a las etiquetas de HTML
        let atras = contenedor.querySelector('.atras')
        let adelante = contenedor.querySelector('.adelante')
        let img = contenedor.querySelector('img')
        let tgt = e.target

        if (tgt == atras) {
            if (contador > 0) {
                img.src = imagenes[contador - 1]
                contador--
            } else {
                img.src = imagenes[imagenes.length - 1]
                contador = imagenes.length - 1
            }
        } else if (tgt == adelante) {
            if (contador < imagenes.length - 1) {
                img.src = imagenes[contador + 1]
                contador++
            } else {
                img.src = imagenes[0]
                contador = 0
            }            
        }
    })
}

document.addEventListener('DOMContentLoaded', () => {
    let containr = document.querySelector('.negocios-contenedor')

    carrusel(containr)
})