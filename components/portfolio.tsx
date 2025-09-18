export function Portfolio() {
  const projects = [
    {
      title: "E-Commerce App",
      category: "Mobile Design",
      image: "/modern-ecommerce-mobile-app-interface.jpg",
    },
    {
      title: "Brand Identity",
      category: "Branding",
      image: "/creative-brand-identity-design-mockup.jpg",
    },
    {
      title: "Web Platform",
      category: "Web Design",
      image: "/modern-web-platform-dashboard.jpg",
    },
    {
      title: "Product Design",
      category: "UI/UX Design",
      image: "/product-design-interface-mockup.jpg",
    },
    {
      title: "Corporate Website",
      category: "Web Design",
      image: "/corporate-website-design.png",
    },
    {
      title: "Mobile Banking",
      category: "App Design",
      image: "/mobile-banking-app.png",
    },
  ]

  return (
    <section id="portfolio" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Creative Portfolio</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Take a look at some of our recent work and see how we've helped businesses transform their digital presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg bg-slate-700">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg mb-1">{project.title}</h3>
                  <p className="text-teal-400 text-sm">{project.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
