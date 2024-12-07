import {
  Search,
  MousePointerClick,
  MapPin,
  Share2,
  Mail,
  FileText,
  Laptop,
  Star,
  Video,
  BarChart2,
  Users,
  FolderTree
} from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "./ui/card"

const services = [
  {
    title: "SEO Services",
    description: "Improve your local search rankings and get found by more customers in your area.",
    icon: <Search className="w-6 h-6 text-blue-600" />
  },
  {
    title: "PPC Advertising",
    description: "Target local customers actively searching for your services with paid advertising.",
    icon: <MousePointerClick className="w-6 h-6 text-blue-600" />
  },
  {
    title: "Google Business Profile",
    description: "Optimize your Google presence and stand out in local search results.",
    icon: <MapPin className="w-6 h-6 text-blue-600" />
  },
  {
    title: "Social Media Marketing",
    description: "Build community engagement and brand awareness on social platforms.",
    icon: <Share2 className="w-6 h-6 text-blue-600" />
  },
  {
    title: "Email Marketing",
    description: "Stay connected with customers through targeted email campaigns.",
    icon: <Mail className="w-6 h-6 text-blue-600" />
  },
  {
    title: "Content Marketing",
    description: "Create valuable content that attracts and engages your local audience.",
    icon: <FileText className="w-6 h-6 text-blue-600" />
  },
  {
    title: "Website Design",
    description: "Create a stunning, mobile-friendly website that converts visitors into customers.",
    icon: <Laptop className="w-6 h-6 text-blue-600" />
  },
  {
    title: "Reputation Management",
    description: "Monitor and improve your online reputation through reviews and feedback.",
    icon: <Star className="w-6 h-6 text-blue-600" />
  },
  {
    title: "Video Marketing",
    description: "Engage your audience with professional video content and advertising.",
    icon: <Video className="w-6 h-6 text-blue-600" />
  },
  {
    title: "Analytics & Automation",
    description: "Track performance and automate marketing tasks for better efficiency.",
    icon: <BarChart2 className="w-6 h-6 text-blue-600" />
  },
  {
    title: "Influencer Marketing",
    description: "Partner with local influencers to expand your reach and credibility.",
    icon: <Users className="w-6 h-6 text-blue-600" />
  },
  {
    title: "Directory Management",
    description: "Maintain consistent business information across all online directories.",
    icon: <FolderTree className="w-6 h-6 text-blue-600" />
  }
]

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive solutions to grow your local business
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 
                transform hover:-translate-y-1 overflow-hidden border border-gray-100"
            >
              <div className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors 
                  flex items-center group">
                  Learn More 
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 