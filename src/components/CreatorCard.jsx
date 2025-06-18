export default function CreatorCard({ name, followers, niche, image, isPlaceholder = false }) {
  if (isPlaceholder) {
    return (
      <div className="group border-2 border-dashed border-gray-300 rounded-2xl p-6 text-center hover:border-orange-400 transition-all duration-300 cursor-pointer">
        <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
          <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-400 mb-2">{name}</h3>
        <p className="text-sm text-gray-400 mb-1">{followers}</p>
        <p className="text-sm text-gray-400">{niche}</p>
        <div className="mt-4">
          <a href="/apply" className="text-orange-500 hover:text-orange-600 font-medium">
            This could be you →
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="group bg-white border rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 text-center">
      <div className="relative mb-4">
        <img 
          src={image} 
          alt={name}
          className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-orange-100 group-hover:border-orange-300 transition-all duration-300"
        />
        
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
        {name}
      </h3>
      <p className="text-sm text-gray-600 mb-1 font-medium">{followers}</p>
      <p className="text-sm text-gray-500 mb-4">{niche}</p>
      <div className="flex justify-center space-x-2">
        <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-medium">
          Active
        </span>
        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
          Growing
        </span>
      </div>
    </div>
  );
}