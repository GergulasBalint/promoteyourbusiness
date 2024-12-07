export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] bg-gray-50">
      <div className="text-center p-8 rounded-lg bg-white shadow-lg max-w-md mx-4">
        <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <a 
          href="/" 
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md 
            hover:bg-blue-700 transition-colors duration-200 font-medium
            shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
        >
          Return Home
        </a>
      </div>
    </div>
  );
} 
