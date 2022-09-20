import React from 'react'
import ReactDOM from 'react-dom'
import hamburgerMenu from './js/menu'
import App from './routes/App'

ReactDOM.render(<App/>, document.getElementById('app'))

// const domContainer = document.querySelector('#app')
// const root = ReactDOM.createRoot(domContainer)
// root.render(e())

const d = document

// este método se lo puede llamar desde here because se lo está exportando
// desde su ubicación
d.addEventListener('DOMContentLoaded', (e) => {
    hamburgerMenu('.burger-button', '.nav')
})