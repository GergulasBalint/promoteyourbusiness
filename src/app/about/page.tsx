import { Container } from "@/components/ui/container"

export default function AboutPage() {
  return (
    <Container className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        
        <div className="prose prose-lg">
          <p className="mb-6">
            Welcome to [Your Business Name], your trusted partner in local business promotion. 
            With years of experience in digital marketing and local business development, 
            we understand what it takes to make your business stand out in your community.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
          <p className="mb-6">
            Our mission is to help local businesses thrive by providing effective, 
            affordable, and innovative marketing solutions that connect them with 
            their target audience.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Why Choose Us</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Local market expertise</li>
            <li>Customized marketing strategies</li>
            <li>Proven track record of success</li>
            <li>Dedicated support team</li>
            <li>Cost-effective solutions</li>
          </ul>
        </div>
      </div>
    </Container>
  )
} 