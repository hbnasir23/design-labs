"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-slate-800">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's Create Something Amazing Together</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Ready to start your next project? Get in touch with us and let's discuss how we can bring your vision to
            life.
          </p>
        </div>

        <div className=" gap-12">
          <div>
            <Card className="bg-teal-800 border-teal-400 text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
                <p className="mb-6 opacity-90">
                  Ready to transform your ideas into reality? Let's discuss your project and create something amazing
                  together.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="opacity-90">hello@designlabsolutions.com</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="opacity-90">+1 (555) 123-4567</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Office</h4>
                    <p className="opacity-90">123 Design Street, Creative City, CC 12345</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  )
}
