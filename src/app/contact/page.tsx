import { Container } from "@/components/ui/container"

export default function ContactPage() {
  return (
    <Container className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Other Ways to Reach Us</h2>
          <div className="space-y-3">
            <p>Email: contact@yourbusiness.com</p>
            <p>Phone: (555) 123-4567</p>
            <p>Address: 123 Business Street, City, State 12345</p>
          </div>
        </div>
      </div>
    </Container>
  )
} 