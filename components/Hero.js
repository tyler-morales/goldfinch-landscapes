import React from 'react'
import Image from 'next/image'
import useResize from '../hooks/useResize'

export default function Hero() {
  const screenWidth = useResize()

  return (
    <section className="relative">
      <div className="md:p-6">
        <Image
          src="/../public/images/hero.png"
          // height={screenWidth > 640 ? '400px' : '700'}
          height={400}
          width={1000}
          layout="responsive"
          alt="Landscape patio"
          className="object-cover"
        />
      </div>

      {/* CTA */}
      <div className="flex flex-col justify-center h-64 px-8 py-4 bg-primary md:absolute md:bottom-10 md:w-96">
        <p className="mb-4 text-4xl font-bold text-center text-white md:text-left">
          Landscape Maintenance & Design/ Builds
        </p>
        <a
          href="#contact"
          className="w-full px-4 py-2 text-center rounded-md bg-secondary">
          Free Estimate
        </a>
      </div>
    </section>
  )
}
