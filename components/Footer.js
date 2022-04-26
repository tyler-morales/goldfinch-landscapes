import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="p-6 m-auto text-white mt-28 bg-primary">
      <div className="flex flex-col items-center justify-between max-w-3xl gap-6 m-auto md:flex-row">
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <Link href="/">
          <a className="flex items-center order-first gap-6 md:order-none">
            <Image
              src="/images/logo.png"
              width={150}
              height={75}
              layou="responsive"
              alt="Goldfinch Landscapes Logo"
            />
          </a>
        </Link>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
      <h6 className="mt-8 text-xs text-center">
        Copyright © 2022 Goldfinch Landscapes LLC. All rights reserved.
      </h6>
    </footer>
  )
}
