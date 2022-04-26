import React, {useState, useEffect} from 'react'
import {Squeeze as Hamburger} from 'hamburger-react'

import Image from 'next/image'
import Link from 'next/link'

export default function Nav() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(0)
  const [isOpen, setOpen] = useState(false)

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
    setOpen(!isOpen)
  }

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth)
    }

    changeWidth()

    window.addEventListener('resize', changeWidth)

    // Close mobile menu on resize (browser increases width)
    if (screenWidth > 1024) {
      setToggleMenu(false)
      setOpen(false)
    }

    return () => {
      window.removeEventListener('resize', changeWidth)
    }
  }, [screenWidth])

  return (
    <nav className="py-4 border-b-2 border-secondary bg-primary">
      <div className="flex flex-col items-center justify-between max-w-5xl px-5 m-auto lg:flex-row">
        {/* Page links */}
        {(toggleMenu || screenWidth > 1024) && (
          <Link href="/episodes">
            <a className="w-full px-4 py-4 text-lg text-center text-white transition-all border-b-2 border-gray-200 hover:text-secondary lg:border-0">
              Services
            </a>
          </Link>
        )}

        {(toggleMenu || screenWidth > 1024) && (
          <Link href="/stations">
            <a className="w-full px-4 py-4 text-lg text-center text-white transition-all border-b-2 border-gray-200 hover:text-secondary lg:border-0">
              Portfolio
            </a>
          </Link>
        )}
        <div className="flex items-center justify-between w-full -order-1 lg:order-[unset]">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-6 group">
              <Image
                src="/images/logo.png"
                width={150}
                height={75}
                layou="responsive"
                alt="Goldfinch Landscapes Logo"
              />
            </a>
          </Link>

          {/* Hamburger Menu Icon */}
          {screenWidth < 1024 && (
            <button onClick={toggleNav}>
              <Hamburger toggled={isOpen} toggle={setOpen} color="#fff" />
            </button>
          )}
        </div>

        {(toggleMenu || screenWidth > 1024) && (
          <Link href="/blog">
            <a className="w-full px-4 py-4 text-lg text-center text-white transition-all border-b-2 border-gray-200 hover:text-secondary lg:border-0">
              About
            </a>
          </Link>
        )}
        {(toggleMenu || screenWidth > 1024) && (
          <Link href="/contact">
            <a className="w-full px-4 py-4 text-lg text-center text-white transition-all border-b-2 border-gray-200 hover:text-secondary lg:border-0">
              Contact
            </a>
          </Link>
        )}
      </div>
    </nav>
  )
}
