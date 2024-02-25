import Link from "next/link";
import React from "react";
import Rating from "./rating";
import { SlLocationPin } from "react-icons/sl";

export interface Restaurant {
  name: string;
  stars: number;
  full_address: string;
  business_id: string;
}

const RestaurantCard: React.FC<Restaurant> = ({
  name,
  stars,
  full_address,
  business_id,
}) => {
  const generateRandomImage = () => {
    const randomImageIndex = Math.floor(Math.random() * 1000);
    const query = encodeURIComponent("restaurant food");
    return `https://source.unsplash.com/random/300x300/?${query}&sig=${randomImageIndex}`;
  };

  return (
    <div className="w-3/4 mx-auto my-2 relative">
      <Link href={`/restaurants/${business_id}`} className="hover:opacity-50">
        <div className="flex rounded-lg overflow-hidden items-start shadow-lg">
          <img
            className="w-20 object-cover object-center rounded-l"
            src={generateRandomImage()}
            alt="Restaurant"
          />

          <div className="flex-grow ml-4 mt-2 flex flex-col justify-between">
            <div className="flex flex-col items-start">
              <div className="font-bold text-xl mb-1">{name}</div>
              <div className="flex items-center">
                <SlLocationPin className="text-green-600 mr-1" />
                <p className="text-md italic">{full_address}</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="absolute top-0 right-0 mt-2 mr-2">
                <Rating rating={stars} />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RestaurantCard;
