const SkeletonCategory = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 py-5 wrapper">
      <div className="col-span-2 mt-5 bg-gray-700 animate-pulse h-64 w-full"></div>
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className="bg-gray-700 animate-pulse h-48 w-full"
        ></div>
      ))}
    </div>
  );
};
export default SkeletonCategory;
