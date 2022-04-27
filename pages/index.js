import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Nav from '../components/Nav'
import Portfolio from '../components/Portfolio'
import Services from '../components/Services'

import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        {/* Title */}
        <title>
          Goldfinch Landscapes | Maintance and Design/ Build Landscapes in
          Southwest Michigan
        </title>
        <meta
          property="og:title"
          content="Goldfinch Landscapes | Maintance and Design/ Build Landscapes in Southwest Michigan"
        />

        {/* Description */}
        <meta
          name="description"
          content="Goldfinch Landscapes is a landscape maintance and design/ build company in Southwest Michigan. We offer a wide variety of landscape designs in Southwest Michigan. Located in the beautiful city of Union Pier, Michigan, we are a full service landscape company that specializes in providing you with the landscaping experience."
        />

        <meta
          property="og:description"
          content="Goldfinch Landscapes is a landscape maintance and design/ build company in Southwest Michigan. We offer a wide variety of landscape designs in Southwest Michigan. Located in the beautiful city of Union Pier, Michigan, we are a full service landscape company that specializes in providing you with the landscaping experience."
        />

        {/* Misc */}
        <meta name="twitter:card" content="summary" />
        <meta property="og:url" content="https://goldfinchlandscapes.com /" />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/tyler-morales/goldfinch-landscapes/main/public/images/image-card.png"
        />
        <meta property="og:type" content="website" />
      </Head>
      <Nav />
      <main>
        <Hero />
        <section className="bg-gray-200">
          <p className="max-w-xl p-6 py-10 m-auto text-2xl font-bold leading-10 text-center">
            We’re the name of the game when it comes to high quality and
            friendly landscape services
          </p>
        </section>
        <Services />
        <Portfolio />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
