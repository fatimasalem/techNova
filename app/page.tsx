import {
  Hero,
  About,
  Benefits,
  Products,
  Testimonials,
  Pricing,
  FAQs,
  Contact
} from "@/components"

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
        <About />
        <Benefits />
        <Products />
        <Testimonials />
        <Pricing />
        <FAQs />
        <Contact />
      </div>
    </main>
  )
}