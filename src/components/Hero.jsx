export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute top-40 right-10 w-64 h-64 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
      
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <div className="mb-6">
          <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
            Creator Management Agency
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          Where <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Creators</span>
          <br />
          Become <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Brands</span>
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Zyro House is a next-gen creator management agency, helping digital creators scale their influence into real impact and sustainable businesses.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSenumKRyks7WfLLOffu6DiKnk_8VXkMj-gynFudjlzcRPI8Xg/viewform" 
            className="group bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 px-8 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            Apply as a Creator
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a 
            href="#creators" 
            className="text-gray-700 py-4 px-8 rounded-full font-semibold text-lg hover:text-orange-500 transition-colors duration-300 flex items-center gap-2"
          >
            View Our Creators
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}