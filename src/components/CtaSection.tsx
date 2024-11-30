export default function CtaSection() {
  return (
    <section className="relative py-20 bg-blue-600 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -left-10 -top-10 w-40 h-40 bg-white rounded-full" />
        <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-white rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Grow Your Local Business?
          </h2>
          
          <p className="text-lg md:text-xl text-blue-100 mb-8 px-4">
            Get a free consultation and discover how we can help you attract more customers 
            and grow your business in your local market.
          </p>

          <button className="bg-white text-blue-600 px-8 py-4 rounded-md text-lg font-medium 
            hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-transform">
            Schedule Free Consultation
          </button>
        </div>
      </div>
    </section>
  )
} 