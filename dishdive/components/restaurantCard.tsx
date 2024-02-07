import Link from "next/link";
import React from "react";

export interface Restaurant {
  name: string;
  stars: number;
  business_id: string;
}

const RestaurantCard: React.FC<Restaurant> = ({ name, stars, business_id }) => {
  return (
    <div className="w-3/4 mx-auto my-4">
      <Link href={`/restaurants/${business_id}`} className="hover:underline">
        <div className="flex rounded-lg overflow-hidden items-center shadow-lg">
          <img
            className="w-20 h-20 object-cover object-center rounded-l"
            src="https://via.placeholder.com/300"
            alt="Restaurant"
          />

          <div className="flex-grow p-6">
            <div className="font-bold text-xl mb-2">{name}</div>

            <div className="flex items-center mb-2">
              <svg
                className="fill-current text-yellow-500 w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 1l2.5 6H18l-4 4 1 6-5-3-5 3 1-6-4-4h5.5L10 1z" />
              </svg>
              <div
                className="bg-yellow-200 h-4 w-full rounded"
                style={{ width: `${(stars / 5) * 100}%` }}
              ></div>
              <span className="ml-2">{stars}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RestaurantCard;
