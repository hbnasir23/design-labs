"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-white">DESIGN<span className="text-teal-400">LAB</span> SOLUTIONS</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-300 hover:text-teal-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-300 hover:text-teal-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-gray-300 hover:text-teal-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-gray-300 hover:text-teal-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-300 hover:text-teal-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-300 hover:text-teal-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-teal-400"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-900 border-t border-slate-800">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-300 hover:text-teal-400 block px-3 py-2 text-base font-medium w-full text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-300 hover:text-teal-400 block px-3 py-2 text-base font-medium w-full text-left"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-gray-300 hover:text-teal-400 block px-3 py-2 text-base font-medium w-full text-left"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-gray-300 hover:text-teal-400 block px-3 py-2 text-base font-medium w-full text-left"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-300 hover:text-teal-400 block px-3 py-2 text-base font-medium w-full text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-300 hover:text-teal-400 block px-3 py-2 text-base font-medium w-full text-left"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
