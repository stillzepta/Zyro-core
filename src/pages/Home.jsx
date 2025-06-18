import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CreatorCard from '../components/CreatorCard';
import CaseStudyCard from '../components/CaseStudyCard';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import FAQ from '../components/FAQ';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      <Helmet>
        <title>Zyro House | Where Creators Become Brands</title>
        <meta name="description" content="Zyro House - Premier Creator Management Agency helping digital creators scale their influence into real impact." />
      </Helmet>
      <Navbar />
      <Hero />
      <Stats />
      <main>
        {/* Meet Our Creators Section */}
        <section id="creators" className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Meet Our Creators
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Talented individuals who are transforming their passion into powerful brands
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <CreatorCard 
                name="Rishuexe" 
                followers="5.4K IG / 3.3K YT" 
                niche="Comedy, Meme Skits"
                image="/public/rishu.jpg"
              />
              <CreatorCard 
                name="Vineswalaladka" 
                followers="12.3K IG" 
                niche="Voxpop, Public Humor"
                image="/public/vines.jpg"
              />
              <CreatorCard 
                name="Coming Soon..." 
                followers="Your Brand Here" 
                niche="Your Niche"
                isPlaceholder={true}
              />
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section id="case-studies" className="py-20 px-6 bg-gradient-to-r from-gray-50 to-orange-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
                Success Stories
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Real results from our creator partnerships
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <CaseStudyCard 
                title="Vineswalaladka x Navi UPI" 
                summary="Creative script led to brand deal approval and massive reach potential."
                metrics="Script Approved • High Engagement Expected"
                color="orange"
              />
              <CaseStudyCard 
                title="Rishuexe Engagement Strategy" 
                summary="Boosted consistency and collabs leading to high content performance."
                metrics="300% Growth • 12 Brand Partnerships"
                color="blue"
              />
            </div>
            <div className="text-center">
              <a 
                href="/case-studies"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-8 rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                View All Case Studies
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ />

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-orange-500 to-red-500 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Scale Your Influence?
            </h2>
            <p className="text-xl mb-8 text-orange-100">
              Join the next generation of creators who are building real businesses
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSenumKRyks7WfLLOffu6DiKnk_8VXkMj-gynFudjlzcRPI8Xg/viewform" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-orange-500 py-4 px-8 rounded-full font-semibold text-lg hover:bg-orange-50 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Apply as a Creator
              </a>
              <a 
                href="/contact" 
                className="border-2 border-white text-white py-4 px-8 rounded-full font-semibold text-lg hover:bg-white hover:text-orange-500 transform hover:scale-105 transition-all duration-300"
              >
                Partner with Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}