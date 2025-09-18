import { Button } from "@/components/ui/button"
import { Users, Award, Clock, Heart } from "lucide-react"

export function About() {
  const stats = [
    { icon: <Users className="w-6 h-6" />, value: "500+", label: "Happy Clients" },
    { icon: <Award className="w-6 h-6" />, value: "50+", label: "Awards Won" },
    { icon: <Clock className="w-6 h-6" />, value: "6", label: "Years Experience" },
    { icon: <Heart className="w-6 h-6" />, value: "1000+", label: "Projects Done" },
  ]

  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Crafting Visual
              <br />
              <span className="text-teal-400">Excellence Since 2019</span>
            </h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              We are a passionate team of designers and developers who believe in the power of great design. Our mission
              is to help businesses create meaningful connections with their audience through exceptional visual
              experiences.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              From startups to established enterprises, we've helped hundreds of clients transform their ideas into
              reality. Our approach combines creativity with strategy to deliver results that not only look great but
              also drive business growth.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2 text-teal-400">{stat.icon}</div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            <Button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-lg font-medium">
              Learn More
            </Button>
          </div>

          <div className="relative">
            <img src="/creative-team-working-on-design-projects-in-modern.jpg" alt="Our creative team at work" className="rounded-lg shadow-2xl" />
            <div className="absolute -bottom-6 -right-6 bg-teal-500 rounded-lg p-4 shadow-lg">
              <div className="text-white text-center">
                <div className="text-2xl font-bold">6+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
