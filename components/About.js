import React from 'react'
import Image from 'next/image'

export default function About() {
  return (
    <section className="p-6 m-auto my-28 text-primary" id="about">
      <h2 className="mb-8 text-3xl font-bold text-center ">About us</h2>

      <div className="max-w-3xl m-auto">
        <p className="mb-6 text-xl md:text-center">
          Started in 2016 with pulling weeds, the team at Goldfinch Landscapes
          has evolved to designing and building custom hard/softscapes.{' '}
        </p>

        <p className="text-xl md:text-center">
          We are dedicated towards delivering excellent and friendly services.
          We not only want to remodel exteriors, but also the joy it brings to
          our clients.
        </p>
      </div>

      <div className="grid gap-8 mt-8 md:grid-cols-3 md:flex-row">
        <Image
          src="/../public/images/team.jpg"
          width={300}
          height={200}
          layout="responsive"
          alt="1"
          className="object-cover"
        />
        <Image
          src="/../public/images/grady.jpg"
          width={300}
          height={300}
          layout="responsive"
          alt="1"
          className="object-cover"
        />
        <Image
          src="/../public/images/karl.jpg"
          width={300}
          height={200}
          layout="responsive"
          alt="1"
          className="object-cover object-top"
        />
      </div>
    </section>
  )
}
