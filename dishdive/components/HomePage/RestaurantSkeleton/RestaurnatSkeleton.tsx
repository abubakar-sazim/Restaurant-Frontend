const RestaurantSkeleton = () => {
  return (
    <div className="w-3/4 mx-auto my-4 relative">
      <div className="flex rounded-lg overflow-hidden items-start shadow-lg animate-pulse">
        <div className="w-20 h-20 bg-gray-300 rounded-l"></div>
        <div className="flex-grow p-6 flex flex-col justify-between">
          <div className="flex flex-col items-start">
            <div className="font-bold text-xl bg-gray-300 h-6 w-3/4 mb-2 rounded"></div>
            <div className="flex">
              <div className=" bg-gray-300 h-4 w-4 rounded-full"></div>
              <p className="text-md italic bg-gray-300 h-4 w-3/4 rounded"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantSkeleton;
