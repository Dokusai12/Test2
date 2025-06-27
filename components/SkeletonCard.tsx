const SkeletonCard = () => (
  <div
    className="bg-white rounded-xl shadow-sm p-4 flex flex-col items-center animate-pulse"
    style={{ minWidth: 250 }}
    aria-hidden="true"
  >
    <div className="w-24 h-24 rounded-full bg-gray-200 mb-2" />
    <div className="h-5 w-32 bg-gray-200 rounded mb-1" />
    <div className="h-4 w-14 bg-gray-100 rounded mb-1" />
    <div className="h-4 w-16 bg-gray-100 rounded mb-3" />
    <div className="h-8 w-full bg-gray-200 rounded" />
  </div>
);

export default SkeletonCard;