export default function CaseStudyCard({ title, summary, metrics, color = "orange" }) {
  const colorClasses = {
    orange: "from-orange-500 to-red-500",
    blue: "from-blue-500 to-purple-500",
    green: "from-green-500 to-teal-500"
  };

  return (
    <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-100">
      <div className={`inline-block p-3 rounded-xl bg-gradient-to-r ${colorClasses[color]} mb-6`}>
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-orange-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 mb-6 leading-relaxed">
        {summary}
      </p>
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold text-gray-500">
          {metrics}
        </div>
        <div className="flex items-center text-orange-500 group-hover:text-orange-600 transition-colors">
          <span className="text-sm font-medium mr-1">View Details</span>
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </div>
  );
}