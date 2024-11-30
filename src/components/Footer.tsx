import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Globe } from "lucide-react"

const services = [
  { name: "SEO Services", href: "/services/seo" },
  { name: "PPC Advertising", href: "/services/ppc" },
  { name: "Google Business Profile", href: "/services/google-business" },
  { name: "Social Media Marketing", href: "/services/social-media" },
  { name: "Email Marketing", href: "/services/email" },
  { name: "Content Marketing", href: "/services/content" },
  { name: "Website Design", href: "/services/web-design" },
  { name: "Reputation Management", href: "/services/reputation" },
  { name: "Video Marketing", href: "/services/video" },
  { name: "Analytics & Automation", href: "/services/analytics" },
  { name: "Influencer Marketing", href: "/services/influencer" },
  { name: "Directory Management", href: "/services/directory" }
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold text-white">
              PromoteLocal
            </Link>
            <p className="text-sm">
              Helping local businesses grow their digital presence and connect with their community.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Our Services</h3>
            <div className="grid grid-cols-1 gap-2">
              {services.slice(0, 6).map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className="text-sm hover:text-white transition-colors"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          {/* More Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">More Services</h3>
            <div className="grid grid-cols-1 gap-2">
              {services.slice(6).map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className="text-sm hover:text-white transition-colors"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact & Region */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <div className="space-y-2">
              <p className="text-sm">Email: contact@promoteyourbusinesslocally.com</p>
              <p className="text-sm">Phone: (555) 123-4567</p>
              <p className="text-sm">Address: 123 Business Ave, Suite 100</p>
            </div>
            
            <div className="pt-4">
              <label htmlFor="region" className="block text-sm font-medium mb-1">
                Select Region
              </label>
              <select
                id="region"
                className="w-full bg-gray-800 text-white rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="US">United States</option>
                <option value="UK">United Kingdom</option>
              </select>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm">
              © {new Date().getFullYear()} PromoteLocal. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 