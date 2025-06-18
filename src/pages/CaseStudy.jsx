import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CaseStudy = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const caseStudies = [
    {
      id: 1,
      title: "Vineswalaladka × Navi UPI",
      type: "Fintech Awareness via Voxpop",
      stage: "Script Approved – Pending Release",
      platform: "Instagram Reels",
      shortSummary: "Creative script led to brand deal approval and massive reach potential.",
      metrics: "Script Approved • High Engagement Expected",
      color: "orange",
      status: "pre-launch",
      fullContent: {
        objective: "Navi UPI is tapping into youth culture to promote its simple, fast, and secure payment system. The goal? Deliver this message in a tone that doesn't feel like a typical ad — but rather, like something you'd laugh at and still remember.",
        whyCreator: [
          "Voxpop format with natural humor",
          "Strong audience retention, especially in Gen Z", 
          "Perfect balance of comedy + curiosity",
          "Visually engaging, street-based relatability"
        ],
        strategy: [
          "Co-developed the script with brand tone in mind",
          "Balanced creative freedom with brand compliance",
          "Focused on humor-first storytelling with embedded product value",
          "Helped ensure quick approval turnaround via aligned scripting"
        ],
        deliverables: [
          "1 branded reel (voxpop format)",
          "Caption + hashtags optimized for UPI trend recall",
          "Thumbnail visual support if needed"
        ],
        campaignStatus: [
          { task: "Script Development", status: "complete" },
          { task: "Brand Approval", status: "complete" },
          { task: "Creator Confirmation", status: "complete" },
          { task: "Scheduled Shoot", status: "upcoming" },
          { task: "Expected Posting Window", status: "soon" }
        ],
        expectedOutcome: "A high-performing, humorous reel that subtly plugs in Navi UPI — Likely to spark shares, comments, and conversation — with zero forced branding.",
        zyroInvolvement: [
          "Strategic brand-creator matchmaking",
          "Script writing and positioning", 
          "Approval coordination",
          "Campaign management and creator support",
          "Pre- and post-launch assistance"
        ]
      }
    },
    {
      id: 2,
      title: "Rishuexe Engagement Strategy",
      type: "Content Optimization & Growth",
      stage: "Completed Campaign",
      platform: "Instagram & YouTube",
      shortSummary: "Boosted consistency and collabs leading to high content performance.",
      metrics: "300% Growth • 12 Brand Partnerships",
      color: "blue",
      status: "completed",
      fullContent: {
        objective: "Transform Rishuexe's content strategy to achieve consistent posting, higher engagement, and sustainable brand partnerships in the comedy/meme niche.",
        whyCreator: [
          "Strong comedy timing and meme understanding",
          "Authentic personality that resonates with Gen Z",
          "Willing to experiment with different content formats",
          "High potential for viral content creation"
        ],
        strategy: [
          "Developed consistent posting schedule",
          "Created content pillars for better brand alignment",
          "Optimized video formats for maximum engagement",
          "Built strategic collaboration network"
        ],
        deliverables: [
          "Daily content posting schedule",
          "Brand partnership portfolio",
          "Collaboration content series",
          "Audience growth optimization"
        ],
        campaignStatus: [
          { task: "Strategy Development", status: "complete" },
          { task: "Content Optimization", status: "complete" },
          { task: "Brand Partnerships", status: "complete" },
          { task: "Growth Targets", status: "complete" },
          { task: "Ongoing Support", status: "active" }
        ],
        expectedOutcome: "Successfully achieved 300% follower growth, secured 12+ brand partnerships, and established sustainable content creation workflow.",
        zyroInvolvement: [
          "Complete content strategy overhaul",
          "Brand partnership negotiations",
          "Performance tracking and optimization",
          "Creator support and guidance",
          "Ongoing relationship management"
        ]
      }
    }
  ];

  const toggleExpand = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'complete': return '✅';
      case 'upcoming': return '⏳';
      case 'soon': return '🗓';
      case 'active': return '🔄';
      default: return '📋';
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'complete': return 'text-green-600 bg-green-50';
      case 'upcoming': return 'text-yellow-600 bg-yellow-50';
      case 'soon': return 'text-blue-600 bg-blue-50';
      case 'active': return 'text-purple-600 bg-purple-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      <Helmet>
        <title>Case Studies | Zyro House</title>
        <meta name="description" content="Real success stories and campaign results from Zyro House creator partnerships." />
      </Helmet>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-6">
            📈 Success Stories
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 bg-clip-text text-transparent">
            Case Studies
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Real results from our creator partnerships and brand campaigns
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white rounded-3xl shadow-lg border border-orange-100/50 overflow-hidden transition-all duration-300 hover:shadow-xl">
                {/* Card Header */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      study.status === 'pre-launch' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'
                    }`}>
                      {study.status === 'pre-launch' ? '🚀 Pre-Launch' : '✅ Completed'}
                    </span>
                    <span className="text-gray-500 text-sm">{study.platform}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{study.title}</h3>
                  <p className="text-orange-600 font-medium mb-4">{study.type}</p>
                  <p className="text-gray-600 mb-4">{study.shortSummary}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-700">{study.metrics}</span>
                    <button
                      onClick={() => toggleExpand(study.id)}
                      className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                      {expandedCard === study.id ? 'Show Less' : 'Read More'}
                    </button>
                  </div>
                </div>

                {/* Expanded Content */}
                {expandedCard === study.id && (
                  <div className="border-t border-gray-100 bg-gray-50 p-8 space-y-8">
                    {/* Campaign Objective */}
                    <div>
                      <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                        🧠 Campaign Objective
                      </h4>
                      <p className="text-gray-600 leading-relaxed">{study.fullContent.objective}</p>
                    </div>

                    {/* Why This Creator */}
                    <div>
                      <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                        🤝 Why This Creator?
                      </h4>
                      <ul className="space-y-2">
                        {study.fullContent.whyCreator.map((reason, index) => (
                          <li key={index} className="flex items-center gap-2 text-gray-600">
                            <span className="text-orange-500">•</span>
                            {reason}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Strategy */}
                    <div>
                      <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                        🎬 Zyro House Strategy
                      </h4>
                      <ul className="space-y-2">
                        {study.fullContent.strategy.map((item, index) => (
                          <li key={index} className="flex items-center gap-2 text-gray-600">
                            <span className="text-orange-500">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Deliverables */}
                    <div>
                      <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                        📋 Deliverables
                      </h4>
                      <ul className="space-y-2">
                        {study.fullContent.deliverables.map((item, index) => (
                          <li key={index} className="flex items-center gap-2 text-gray-600">
                            <span className="text-orange-500">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Campaign Status */}
                    <div>
                      <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                        ⚙️ Campaign Status
                      </h4>
                      <div className="space-y-3">
                        {study.fullContent.campaignStatus.map((item, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
                            <span className="font-medium text-gray-700">{item.task}</span>
                            <span className={`px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 ${getStatusColor(item.status)}`}>
                              {getStatusIcon(item.status)} {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Expected Outcome */}
                    <div>
                      <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                        🌟 Expected Outcome
                      </h4>
                      <p className="text-gray-600 leading-relaxed">{study.fullContent.expectedOutcome}</p>
                    </div>

                    {/* Zyro House Involvement */}
                    <div>
                      <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                        💼 Zyro House Involvement
                      </h4>
                      <ul className="space-y-2">
                        {study.fullContent.zyroInvolvement.map((item, index) => (
                          <li key={index} className="flex items-center gap-2 text-gray-600">
                            <span className="text-orange-500">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Let's build your next campaign together
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

      <Footer />
    </div>
  );
};

export default CaseStudy;