import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
        <nav>
            <menu>
                <Link href='/'>
                    <h3>Inicio</h3>
                </Link>
                <Link href='/about'>
                    <h3>Sobre mí</h3>
                </Link>
            </menu>
        </nav>
    </div>
  )
}

export default Navbar