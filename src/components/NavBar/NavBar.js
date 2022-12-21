import React from 'react'
import Link from 'next/link'

const NavBar = () => {
  return (
    
        <nav>
            <menu>         
                <Link href='/'>Inicio</Link>       
                <Link href='/Profile'>Sobre mí</Link>                
            </menu>
        </nav>
    
  )
}

export default NavBar