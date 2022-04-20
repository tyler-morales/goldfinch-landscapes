import Hero from '../components/Hero'
import Nav from '../components/Nav'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <section className="bg-gray-200">
          <p className="max-w-xl p-6 py-10 m-auto text-2xl font-bold leading-10 text-center">
            We’re the name of the game when it comes to high quality and
            friendly landscape services
          </p>
        </section>
      </main>
    </>
  )
}
