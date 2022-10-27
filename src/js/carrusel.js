var imagenes = ['../assets/img/store.png', 
'../assets/img/developer.jpg'];

var contador = 0;

function carrusel(contenedor) {
    contenedor.addEventListener('click', e => {
        let atras = contenedor.querySelector('.atras')
        let adelante = contenedor.querySelector('.adelante')
        let imagen = contenedor.querySelector('.imagend')
        let tgt = e.target

        if(atras) {
            alert('clic')
        }

        if (tgt == atras) {
            if (contador > 0) {
                imagen.src = imagenes[contador - 1]
                contador--
            } else {
                imagen.src = imagenes[imagenes.length - 1]
                cont = imagenes.length - 1
            }

        } else if (tgt == adelante) {
            if (contador < 0) {
                imagen.src = imagenes[cont + 1]
                cont++
            } else {
                imagen.src = imagenes[0]
                cont = 0
            }
        }
    })
}

document.addEventListener('DOMContentLoaded', () => {
    let contenedor = document.querySelector('.botones')

    carrusel(contenedor)
})

