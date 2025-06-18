import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const faqs = [
    {
      question: "What is Zyro House?",
      answer: "Zyro House is a next-gen creator management agency that helps digital creators evolve into full-scale brands. We provide strategy, structure, brand deals, creative planning, and monetization support — all under one roof."
    },
    {
      question: "Who can join Zyro House?",
      answer: "We work with vox-pop creators, skit & comedy influencers, live streamers, meme pages & digital entertainers, and AI/voiceover content creators. If you're consistently posting, have a unique vibe, and want to scale — we want to hear from you."
    },
    {
      question: "What do creators get?",
      answer: "When you join Zyro House, you get brand deal pitching and management, weekly content strategy and scripting help, campaign execution and optimization, access to visual assets and content prompts, and creative freedom with structured support."
    },
    {
      question: "Do I have to pay to join?",
      answer: "No. We work on a commission-based model — typically 25% of any deal we bring you. No fixed fees unless we agree on a custom plan."
    },
    {
      question: "What's the difference between 'managed' and 'commission' creators?",
      answer: "Managed Creator: You get full weekly support, pitch priority, creative planning, and hands-on help. Commission Creator: We connect you with brands occasionally, but do not offer content guidance or regular check-ins."
    },
    {
      question: "How do you find brand deals?",
      answer: "We actively pitch creators to agencies like Skylark, Ripple Links, BigBang, etc., direct-to-brand via campaigns, proposals, and cold outreach, plus our growing network in fashion, UPI/fintech, lifestyle, and apps."
    },
    {
      question: "How do I apply?",
      answer: "Just fill our application form and we'll get in touch if you're a good fit. No minimum followers required — just potential + consistency."
    },
    {
      question: "Can I leave if I change my mind?",
      answer: "Yes. While we sign an agreement to work together, creators are free to exit the program with a simple notice. We believe in collaboration — not control."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-r from-orange-50 to-red-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-6">
            ❓ Got Questions?
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about joining Zyro House
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-orange-100 overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-orange-50 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">Q</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 pr-4">
                    {faq.question}
                  </h3>
                </div>
                <div className={`transform transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : 'rotate-0'
                }`}>
                  <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-6 bg-gray-50">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-gray-400 to-gray-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">A</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-3xl shadow-lg border border-orange-100 p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Get in touch with us directly
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="mailto:zyrohouse@gmail.com"
                className="flex items-center gap-2 text-orange-500 hover:text-orange-600 font-semibold transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                zyrohouse@gmail.com
              </a>
              <span className="text-gray-400 hidden sm:block">•</span>
              <a 
                href="https://instagram.com/zyrohouse"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-orange-500 hover:text-orange-600 font-semibold transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.40z"/>
                </svg>
                @zyrohouse
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;