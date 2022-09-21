const grande = document.querySelector('.grande')
const punto = document.querySelectorAll('.punto')

// Recorrer todos los puntos
punto.forEach( (cadaPunto , i ) => {
    punto[i].addEventListener('click',()=>{
        //save position of that point
        let posicion = i
    
        // calculando el espacio que debe desplazarse el grande
        let operacion = posicion * -20
    
        // Movemos el grande 
        grande.style.transform = `translateX(${ operacion }%)`
    
        // Recorremos todos los puntos 
        punto.forEach( ( cadaPunto , i ) => {
            // quitamos la clase activo a todos los puntos 
            punto[i].classList.remove('activo')
        })
    
        // añadir la clase activo en el punto que hemos hecho click 
        punto[i].classList.add('activo')
    })
})