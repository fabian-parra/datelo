import React from 'react'

import '../styles/header.less'

const Header = () => {
  return (
    <header className='header'>
      <div className='header-container'>
        <section className='nav-container'>
          <a href='#'>Inicio</a>
          <a href='#aboutUs'>Sobre nosotros</a>
          <a href='#motivation'>Motivacion</a>
          <a href='#feedback'>Opine</a>
        </section>
        <section className='login-container'>
          <div className='sign'>
            <a href='#sign'>Inscribete</a>
          </div>
          <div className='login'>
            <a href='#login'>Entra</a>
          </div>
        </section>
      </div>
    </header>
  )
}

export default Header
