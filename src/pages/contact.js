import Head from 'next/head'
import Header from '../components/Header'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Холбоо барих | MBD TAX TACTIC TMZ</title>
        <meta
          name="description"
          content="MBD TAX TACTIC-тэй холбогдож татвар, нягтлан бодох бүртгэл болон санхүүгийн зөвлөгөө аваарай."
        />
        <meta
          name="keywords"
          content="MBD TAX TACTIC, татварын зөвлөгөө, нягтлан бодох бүртгэл, холбоо барих"
        />
      </Head>

      <div className="min-h-screen bg-gray-950 text-white">
        <Header />

        <main
          id="contact"
          className="relative overflow-hidden"
        >
          {/* Background decoration */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
          >
            <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />
            <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
          </div>

          {/* Contact content */}
          <section
            aria-labelledby="contact-title"
            className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
          >
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <span className="mb-4 inline-block rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
                MBD TAX TACTIC TMZ
              </span>

              <h1
                id="contact-title"
                className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
              >
                Бидэнтэй{' '}
                <span className="text-blue-500">
                  холбоо бариарай
                </span>
              </h1>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
                Татвар, нягтлан бодох бүртгэл болон санхүүгийн
                асуудлаар мэргэжлийн зөвлөгөө авах бол бидэнд
                мэдээллээ үлдээгээрэй.
              </p>
            </div>

            <div className="mx-auto max-w-5xl">
              <ContactForm />
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  )
}