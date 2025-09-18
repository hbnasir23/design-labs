'use client'
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { useState } from "react"

export function Hero() {
  const [isOpen, setIsOpen] = useState(false)
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }
  return (
    <section id="home" className="min-h-screen bg-slate-900 flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
              <span className="text-teal-400 text-sm font-medium">DESIGN AGENCY</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Transform Your
              <br />
              <span className="text-teal-400">Ideas</span>
              <br />
              Into Reality
            </h1>

            <p className="text-gray-300 text-lg mb-8 max-w-lg leading-relaxed">
              We are a creative design agency that helps businesses transform their ideas into stunning visual
              experiences. From branding to digital design, we bring your vision to life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-teal-800 hover:bg-teal-700 text-white px-8 py-3 rounded-lg 
              font-medium flex items-center gap-2" onClick={() => scrollToSection("pricing")}>
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Button>
              
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-teal-500/20 to-blue-600/20 rounded-2xl p-8 backdrop-blur-sm border border-teal-500/30">
              <div className="bg-white rounded-lg p-6 shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="space-y-3">

                  {/* <div className="h-4 bg-teal-200 rounded w-2/3"></div> */}
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="font-bold">We sell designs that elevate brands.</div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-8 bg-teal-500 rounded w-1/3 mt-6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
