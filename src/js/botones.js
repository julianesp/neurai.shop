var imagenes = ['../assets/img/aleatorias/bosque.jpg','../assets/img/aleatorias/cisne.jpg']

var contador = 0

function carrusel(contenedor) {
    contenedor.addEventListener('click', e => {
        // variables to traer a las etiquetas de HTML
        let atras = contenedor.querySelector('.atras')
        let adelante = contenedor.querySelector('.adelante')
        let img = contenedor.querySelector('img')
        let target = e.target


        if (target == atras) {
            if (contador > 0) {
                img.src = imagenes[contador - 1]
                contador--
                console.log(contador)
            } else {
                img.src = imagenes[imagenes.length - 1]
                contador = imagenes.length - 1
                console.log(contador)
            }
        } else if (target == adelante) {
            if (contador < imagenes.length - 1) {
                img.src = imagenes[contador + 1]
                contador++
                console.log(contador)
            } else {
                img.src = imagenes[0]
                contador = 0
                console.log(contador)
            }            
        }
    })
}

document.addEventListener('DOMContentLoaded', () => {
    let cont = document.querySelector('.negocios')

    carrusel(cont)
})