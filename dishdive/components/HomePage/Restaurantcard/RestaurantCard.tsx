import Link from "next/link";
import Image from "next/image";
import React from "react";
import Rating from "../../Helper/Rating";
import { SlLocationPin } from "react-icons/sl";
import { LG_IMG_URL, SM_IMG_URL } from "./RestaurantCard.constants";
import { generateRandomImage } from "./RestaurantCard.helpers";

interface Restaurant {
  name: string;
  stars: number;
  fullAddress: string;
  businessId: string;
  text: string;
}

const RestaurantCard: React.FC<Restaurant> = ({
  name,
  stars,
  fullAddress,
  businessId,
  text,
}) => {
  return (
    <div className="w-3/4 mx-auto my-2 p-2 relative">
      <Link href={`/restaurants/${businessId}`} className="hover:opacity-50">
        <div className="flex flex-col sm:flex-row rounded-lg overflow-hidden items-start shadow-lg">
          <Image
            className="sm:w-20 h-auto object-cover object-center rounded-t sm:rounded-l"
            height={300}
            width={300}
            src={generateRandomImage()}
            alt="Restaurant"
          />

          <div className="flex-grow ml-4 mt-2 sm:mt-0 flex flex-col justify-between">
            <div className="flex flex-col items-start">
              <div className="font-bold text-xl mb-1">{name}</div>
              <div className="flex items-center">
                <SlLocationPin className="text-green-600 mr-1" />
                <p className="text-md italic">{fullAddress}</p>
              </div>
              <div>
                <p className="text-justify text-xs italic border-l-4 border-gray-500 mb-3 pl-2 py-1 mr-3">
                  "{text}"
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="sm:absolute top-0 right-0 mt-2 mr-2">
                <Rating rating={stars} />
                <div className="mt-4 lg:mt-0"></div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RestaurantCard;
