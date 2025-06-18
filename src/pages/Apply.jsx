import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Apply() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Apply as a Creator | Zyro House</title>
        <meta name="description" content="Join Zyro House as a creator and scale your influence" />
      </Helmet>
      <Navbar />
      <main className="pt-20 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Apply to Join Zyro House
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            We're looking for creators ready to scale their brand and build sustainable businesses.
          </p>
          
          {/* Application Form */}
          <div className="bg-gray-50 rounded-2xl p-8 text-left max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Primary Platform</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                  <option>Instagram</option>
                  <option>YouTube</option>
                  <option>TikTok</option>
                  <option>Twitter</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Follower Count</label>
                <input type="text" placeholder="e.g. 10K" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Content Niche</label>
                <input type="text" placeholder="e.g. Comedy, Lifestyle, Tech" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tell us about yourself</label>
                <textarea rows="4" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" placeholder="What makes you unique as a creator?"></textarea>
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}