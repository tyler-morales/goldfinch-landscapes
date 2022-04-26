import React from 'react'

export default function Services() {
  return (
    <section className="my-28" id="services">
      <h2 className="mb-8 text-3xl font-bold text-center text-primary">
        Design your custom service
      </h2>

      <div className="flex flex-col justify-center gap-6 md:flex-row">
        {/* Maintenance */}
        <div className="p-6 bg-primary">
          <h3 className="mb-4 text-2xl text-center text-white">Maintenance</h3>
          <ul className="flex flex-col gap-2 ml-4 text-white list-disc">
            <li>Zero stress lawn maintenance</li>
            <li>Flexible scheduling (weekly or bi-monthly visits)</li>
            <li>Comprehensive maintenance packages</li>
          </ul>
          <a
            href="#contact"
            className="block w-full py-2 mt-10 text-center rounded-md text-primary bg-secondary">
            Get Your Quote
          </a>
        </div>

        {/* Design/ Build */}
        <div className="p-6 bg-primary">
          <h3 className="mb-4 text-2xl text-center text-white">
            Design/ Build
          </h3>
          <ul className="flex flex-col gap-2 ml-4 text-white list-disc">
            <li>Zero stress lawn maintenance</li>
            <li>Flexible scheduling (weekly or bi-monthly visits)</li>
            <li>Comprehensive maintenance packages</li>
          </ul>
          <a
            href="#contact"
            className="block w-full py-2 mt-10 text-center rounded-md text-primary bg-secondary">
            Get Your Quote
          </a>
        </div>
      </div>
    </section>
  )
}
