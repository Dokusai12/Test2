const SkeletonProfile = () => (
  <div className="max-w-2xl mx-auto px-4 py-8 animate-pulse" aria-hidden="true">
    <div className="flex items-center gap-6 mb-8">
      <div className="w-32 h-32 rounded-full bg-gray-200" />
      <div className="flex-1">
        <div className="h-6 w-40 bg-gray-200 rounded mb-2" />
        <div className="h-4 w-24 bg-gray-100 rounded mb-2" />
        <div className="h-4 w-28 bg-gray-100 rounded" />
      </div>
    </div>
    <div className="h-4 w-1/2 bg-gray-200 rounded mb-3" />
    <div className="h-4 w-2/3 bg-gray-100 rounded mb-3" />
    <div className="h-4 w-1/3 bg-gray-100 rounded" />
    <div className="mt-8 h-10 w-1/4 bg-gray-200 rounded" />
  </div>
);

export default SkeletonProfile;