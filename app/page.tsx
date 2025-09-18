import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Pricing } from "@/components/pricing"
import { Portfolio } from "@/components/portfolio"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
