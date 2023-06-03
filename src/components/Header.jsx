import { useState, useEffect } from 'react'

import { Nav } from './Nav'
import { NavMobile } from './NavMobile'

import imgLogo from '../assets/img/imgLogo.png'

export function Header() {
  const [bg, setBg] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 80) {
        setBg(true)
      } else {
        setBg(false)
      }
    })
  })
  return (
    <header
      className={`${
        bg && 'bg-white shadow-md py-4'
      } p-8 lg:px-0 w-full fixed  z-10 transition-all duration-300`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#!">
          <img src={imgLogo} alt="/" className="w-20 h-20" />
        </a>
        {/* nav */}
        <Nav />
        {/* nav mobile */}
        <NavMobile />
      </div>
    </header>
  )
}
