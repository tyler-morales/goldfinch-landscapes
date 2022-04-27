import Image from 'next/image'
import React from 'react'

export default function Portfolio() {
  return (
    <section className="my-28" id="portfolio">
      <h2 className="mb-8 text-3xl font-bold text-center text-primary">
        Our latest projects
      </h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Image
          src="/../public/images/hero.png"
          width={900}
          height={500}
          alt="1"
          className="object-cover"
        />
        <Image
          src="/../public/images/project_02.jpg"
          width={900}
          height={500}
          alt="1"
          className="object-cover object-top"
        />
        <Image
          src="/../public/images/project_03.jpg"
          width={900}
          height={500}
          alt="1"
          className="object-cover"
        />
        <Image
          src="/../public/images/project_04.jpg"
          width={900}
          height={500}
          alt="1"
          className="object-cover"
        />
      </div>
    </section>
  )
}
