export default function Stats() {
  const stats = [
    { number: "50M+", label: "Total Reach" },
    { number: "25+", label: "Brand Partnerships" },
    { number: "10+", label: "Active Creators" },
    { number: "300%", label: "Average Growth" }
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}