import { Card, CardContent } from "@/components/ui/card"
import { Palette, Monitor, Smartphone, Globe } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: <Palette className="w-8 h-8 text-teal-400" />,
      title: "Brand Design",
      description:
        "Complete brand identity design including logos, color schemes, and brand guidelines that make your business stand out.",
    },
    {
      icon: <Monitor className="w-8 h-8 text-teal-400" />,
      title: "Web Design",
      description:
        "Modern, responsive websites that convert visitors into customers. We focus on user experience and performance.",
    },
    {
      icon: <Smartphone className="w-8 h-8 text-teal-400" />,
      title: "App Design",
      description:
        "Mobile app interfaces that are intuitive and engaging. We design for both iOS and Android platforms.",
    },
    {
      icon: <Globe className="w-8 h-8 text-teal-400" />,
      title: "Digital Marketing",
      description: "Strategic digital marketing campaigns that drive results. From social media to email marketing.",
    },
  ]

  return (
    <section id="services" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Design Services</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            We offer comprehensive design solutions to help your business grow and succeed in the digital world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-slate-700 border-slate-600 hover:border-teal-500 transition-colors group">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
