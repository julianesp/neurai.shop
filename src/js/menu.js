/**
 * Los elementos que va a llevar esta función son:
 * - Botón que activa: panelBtn
 * - El panel es el elemento que se va a mover: panel
 */

export default function hamburgerMenu(panelBtn, panel) {
    const d = document
    
    // se agregará un evento
    d.addEventListener('click', e => {
        /**
         * si el objeto que origina el evento, coincide con el selector
         * que me das en la variable panelBtn
         *  */ 
        if (e.target.matches(panelBtn)) {
            // here se intercambia esa clase 'is-active' para quitarla o ponerla
            d.querySelector(panel).classList.toggle('is-active')
        }
    })    
}


// Todo lo que tenga que ver con el DOM se maneja con "document"