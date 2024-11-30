export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-20 md:py-28">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Grow Your Local Business{" "}
              <span className="text-blue-600">Online</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 px-4">
              Transform your local presence into lasting success. We help small businesses 
              connect with their community through powerful digital marketing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium">
                Get Started
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-md hover:bg-blue-50 transition-colors font-medium">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 