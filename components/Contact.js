import React from 'react'

export default function Contact() {
  return (
    <section className="max-w-3xl p-6 m-auto my-28 text-primary" id="contact">
      <h2 className="mb-8 text-3xl font-bold text-center">Contact</h2>
      <p className="text-2xl md:text-center">
        Have more questions? Working on a unique project? Reach out to us via
        email or phone.
      </p>

      <div>
        <div className="mt-6 text-center">
          Phone:{' '}
          <a href="tel:+1-630-640-3540" className="text-blue-500 underline">
            1-630-640-3540
          </a>
        </div>
        <div className="mt-3 text-center">
          Email:{' '}
          <a
            href="mailto:info@goldfinch-us.com"
            className="text-blue-500 underline">
            goldfinch-us@gmail.com
          </a>
        </div>
      </div>
    </section>
  )
}
