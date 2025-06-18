import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  const [activeTab, setActiveTab] = useState('company');

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      <Helmet>
        <title>About Us | Zyro House</title>
        <meta name="description" content="Zyro House - Where Creators Become Brands. Learn about our company and founder Krishna Verma." />
      </Helmet>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-orange-100/40 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative">
          <div className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-6">
            🚀 Our Story
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 bg-clip-text text-transparent">
            Get to Know
            <br />
            <span className="text-gray-800">Zyro House</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Discover the vision behind the brand and the mind that built it
          </p>
        </div>
      </section>

      {/* Tab Selector */}
      <section className="py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-lg border border-orange-100/50 p-2">
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab('company')}
                className={`flex-1 py-4 px-6 rounded-2xl font-semibold text-lg transition-all duration-300 bg-white ${
                  activeTab === 'company'
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                    : 'text-gray-600 hover:text-orange-500 hover:bg-orange-50/50'
                }`}
              >
                <span className="flex items-center justify-center gap-2">
                  🏢 Company Story
                </span>
              </button>
              <button
                onClick={() => setActiveTab('founder')}
                className={`flex-1 py-4 px-6 rounded-2xl font-semibold text-lg transition-all duration-300 bg-white ${
                  activeTab === 'founder'
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                    : 'text-gray-600 hover:text-orange-500 hover:bg-orange-50/50 '
                }`}
              >
                <span className="flex items-center justify-center gap-2 ">
                  🧠 Meet the Founder
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Content */}
      {activeTab === 'company' && (
        <>
          
          {/* Vision Cards */}
          <section className="py-16 px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  We're Building More Than An Agency
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Zyro House is a launchpad for those who dream big, break norms, and speak their truth in the most creative ways possible.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {[
                  {
                    icon: "🎯",
                    title: "Dream Big",
                    description: "We support creators who aren't afraid to push boundaries and chase ambitious goals that transform industries."
                  },
                  {
                    icon: "💥",
                    title: "Break Norms",
                    description: "Traditional rules don't apply here. We celebrate creators who challenge conventions and create new standards."
                  },
                  {
                    icon: "🎨",
                    title: "Speak Truth",
                    description: "Authenticity is our foundation. We amplify creators who stay true to their voice and values."
                  },
                  {
                    icon: "🚀",
                    title: "Creative Ways",
                    description: "Innovation drives everything we do. We help creators express themselves through the most creative methods possible."
                  }
                ].map((item, index) => (
                  <div key={index} className="group bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-orange-100/50 hover:border-orange-200 transform hover:scale-105">
                    <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">{item.icon}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{item.title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Aspirations Section */}
          <section className="py-16 px-6 bg-gradient-to-r from-orange-500 to-red-500">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Our Aspirations
                </h2>
                <p className="text-xl text-orange-100 max-w-3xl mx-auto">
                  These are the goals that drive us every single day
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    icon: "💰",
                    title: "Monetize & Grow Fearlessly",
                    description: "Enable creators to monetize their art and grow fearlessly without compromising their creative vision."
                  },
                  {
                    icon: "🤝",
                    title: "Originality Meets Brands",
                    description: "Build a system where brands meet originality, not just reach — creating authentic partnerships."
                  },
                  {
                    icon: "📖",
                    title: "Push Storytelling Boundaries",
                    description: "Push storytelling boundaries across comedy, commentary, lifestyle, and voice-over skits."
                  },
                  {
                    icon: "🎯",
                    title: "Unshakeable Support",
                    description: "Help every talent rise with strategy, structure, and unshakeable support throughout their journey."
                  }
                ].map((aspiration, index) => (
                  <div 
                    key={index}
                    className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    <div className="text-4xl mb-4">{aspiration.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-4">{aspiration.title}</h3>
                    <p className="text-orange-100 text-lg leading-relaxed">{aspiration.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Founder Content */}
      {activeTab === 'founder' && (
        <>
          {/* Founder Hero */}
          <section className="py-16 px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-orange-100/50 p-8 md:p-12 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl flex items-center justify-center mx-auto mb-8">
                  <span className="text-4xl">🧠</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  Krishna Verma
                </h2>
                <p className="text-xl text-gray-600 mb-6">Founder | Builder | Vision-led Strategist</p>
                <div className="bg-orange-50 rounded-2xl p-6 mb-8">
                  <p className="text-lg font-medium text-gray-800 italic">
                    "Creating what I can't find. Building what I believe should exist."
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Who I Am */}
          <section className="py-16 px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-lg border border-orange-100/50 p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mr-4">
                      <span className="text-2xl">🌱</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Who I Am</h3>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed mb-4">
                    I'm Krishna Verma, a <span className="font-semibold text-orange-600">17-year-old founder</span> and multi-domain aspirant — currently building Zyro House, a creator-first agency helping digital storytellers become scalable brands.
                  </p>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    My journey isn't backed by legacy, but by <span className="font-semibold text-orange-600">vision, relentless execution, and the refusal to stay ordinary.</span>
                  </p>
                </div>

                <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl shadow-lg p-8 text-white">
                  <h4 className="text-2xl font-bold mb-4">My Philosophy</h4>
                  <p className="text-xl text-orange-100 mb-6 italic">
                    "I don't just dream about the future — I'm building my place in it."
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">⚡</span>
                      <span className="text-lg">Speed > Approval</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🚀</span>
                      <span className="text-lg">Start now, polish later</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">👥</span>
                      <span className="text-lg">People over pedigree</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Current Projects */}
          <section className="py-16 px-6 bg-gradient-to-r from-gray-50 to-orange-50">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Current Projects</h2>
                <p className="text-xl text-gray-600">What I'm building right now</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-lg border border-orange-100/50 p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6">
                    <span className="text-2xl">🏢</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Zyro House</h3>
                  <p className="text-gray-600 leading-relaxed">
                    A creator management firm turning creators into monetizable brands with structure, strategy, and storytelling.
                  </p>
                </div>

                <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-lg border border-orange-100/50 p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6">
                    <span className="text-2xl">👕</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">FrenzyFits</h3>
                  <p className="text-gray-600 leading-relaxed">
                    <span className="text-orange-600 font-medium">(upcoming)</span> A creator-led fashion and lifestyle brand launching soon, blending digital influence with wearable culture.
                  </p>
                </div>

                <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-lg border border-orange-100/50 p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Global Aspirations</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Preparing for higher education in Cybersecurity, Computer Science, and Innovation Management globally.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Future Vision */}
          <section className="py-16 px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  Future Vision
                </h2>
                <p className="text-xl text-gray-600">What I want to achieve</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl shadow-2xl p-8 text-white">
                  <div className="flex items-center mb-6">
                    <span className="text-3xl mr-4">🎯</span>
                    <h3 className="text-2xl font-bold">By Age 25</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="text-orange-200 mt-1">•</span>
                      <span className="text-lg">Lead ventures in fintech, cybersecurity, and content infrastructure</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange-200 mt-1">•</span>
                      <span className="text-lg">Establish automated businesses that solve real market needs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange-200 mt-1">•</span>
                      <span className="text-lg">Launch initiatives for climate action and marine conservation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange-200 mt-1">•</span>
                      <span className="text-lg">Build a reputation that competes with monopolies, not joins them</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-lg border border-orange-100/50 p-8">
                  <div className="flex items-center mb-6">
                    <span className="text-3xl mr-4">🌟</span>
                    <h3 className="text-2xl font-bold text-gray-800">By Age 35</h3>
                  </div>
                  <div className="space-y-6">
                    <div className="p-4 bg-orange-50 rounded-2xl">
                      <p className="text-lg text-gray-700 font-medium">
                        Creates frameworks that reshape economies
                      </p>
                    </div>
                    <div className="p-4 bg-orange-50 rounded-2xl">
                      <p className="text-lg text-gray-700 font-medium">
                        Isn't known for one thing — but for impact across systems
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* What Sets Me Apart */}
          <section className="py-16 px-6 bg-gradient-to-r from-orange-500 to-red-500">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                What Sets Me Apart
              </h2>
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  <div className="space-y-4">
                    <p className="text-orange-100 text-lg">
                      ✨ I'm not waiting for college to make a mark
                    </p>
                    <p className="text-orange-100 text-lg">
                      💻 Learning Linux and programming while pitching to brands
                    </p>
                  </div>
                  <div className="space-y-4">
                    <p className="text-orange-100 text-lg">
                      👥 Building teams from DMs, planning life balance
                    </p>
                    <p className="text-orange-100 text-lg">
                      🚀 Combining business, creativity, and activism
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-2xl font-bold text-white">
                And I've only just begun.
              </p>
            </div>
          </section>
        </>
      )}

      {/* Common CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-orange-100/50 p-12">
            <div className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-6">
              ✨ Join The Movement
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              For Creators With A Spark
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Zyro House is a place for creators with a spark — and a drive to ignite the world. 
              <br />
              <span className="font-semibold text-gray-800">We're just getting started.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSenumKRyks7WfLLOffu6DiKnk_8VXkMj-gynFudjlzcRPI8Xg/viewform" 
                target="_blank"
                rel="noopener noreferrer"
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition-all duration-300"></div>
                <div className="relative bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 px-8 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-orange-400/20">
                  <span className="flex items-center justify-center gap-3">
                    Join Our Family
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </a>
              
              <a 
                href="/contact" 
                className="border-2 border-orange-500 text-orange-500 py-4 px-8 rounded-2xl font-bold text-lg hover:bg-orange-500 hover:text-white transform hover:scale-105 transition-all duration-300"
              >
                Learn More
              </a>
            </div>

            <div className="inline-block px-6 py-3 bg-gradient-to-r from-orange-100 to-red-100 rounded-full">
              <span className="text-lg font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                #WhereCreatorsBecomeBrands
              </span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}