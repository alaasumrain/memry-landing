export default function ContactPage() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg text-gray-600 mb-8">
          Interested in enterprise features or have questions? Get in touch with our team.
        </p>
        <div className="bg-gray-800 rounded-lg p-8">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">Email</h2>
              <a href="mailto:team@memry.dev" className="text-blue-500 hover:text-blue-400">
                team@memry.dev
              </a>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">GitHub</h2>
              <a 
                href="https://github.com/memry-dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-400"
              >
                github.com/memry-dev
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
