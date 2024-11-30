import { Container } from "@/components/ui/container"

const services = [
  {
    title: "Local SEO",
    description: "Improve your local search rankings and get found by customers in your area.",
    icon: "🎯",
  },
  {
    title: "Social Media Management",
    description: "Engage with your local community through strategic social media presence.",
    icon: "📱",
  },
  {
    title: "Content Marketing",
    description: "Create compelling content that resonates with your local audience.",
    icon: "✍️",
  },
  {
    title: "Online Advertising",
    description: "Targeted advertising campaigns to reach your ideal local customers.",
    icon: "📢",
  },
  {
    title: "Business Consulting",
    description: "Expert advice to help your business grow and succeed locally.",
    icon: "💡",
  },
  {
    title: "Analytics & Reporting",
    description: "Track and measure the success of your local marketing efforts.",
    icon: "📊",
  },
]

export default function ServicesPage() {
  return (
    <Container className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="border rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg mb-6">
            Ready to grow your local business? Contact us today for a free consultation.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
          >
            Get Started
          </a>
        </div>
      </div>
    </Container>
  )
} 