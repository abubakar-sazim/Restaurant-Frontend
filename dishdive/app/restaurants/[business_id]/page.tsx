"use client";

import { useChatContext } from "@/context/chatContext";
import { FaStar } from "react-icons/fa";

interface RestaurantPageProps {
  params: {
    business_id: string;
  };
}

const RestaurantDetail: React.FC<RestaurantPageProps> = ({ params }) => {
  const business_id = params.business_id;
  const { context } = useChatContext();

  const restaurantData =
    context[`id_0`] && context[`id_0`].business_id === business_id
      ? context[`id_0`]
      : context[`id_1`] && context[`id_1`].business_id === business_id
      ? context[`id_1`]
      : context[`id_2`] && context[`id_2`].business_id === business_id
      ? context[`id_2`]
      : null;

  const alcohol = restaurantData ? restaurantData.Alcohol : "N/A";
  const name = restaurantData ? restaurantData.name : "N/A";
  const stars = restaurantData ? restaurantData.stars : "N/A";
  const businessAcceptsCreditCards = restaurantData
    ? restaurantData.BusinessAcceptsCreditCards
    : "N/A";
  const goodForKids = restaurantData ? restaurantData.GoodForKids : "N/A";
  const hasTV = restaurantData ? restaurantData.HasTV : "N/A";
  const noiseLevel = restaurantData ? restaurantData.NoiseLevel : "N/A";
  const outdoorSeating = restaurantData ? restaurantData.OutdoorSeating : "N/A";
  const parking = restaurantData ? restaurantData.Parking : "N/A";
  const restaurantsDelivery = restaurantData
    ? restaurantData.RestaurantsDelivery
    : "N/A";
  const restaurantsGoodForGroups = restaurantData
    ? restaurantData.RestaurantsGoodForGroups
    : "N/A";
  const categories = restaurantData ? restaurantData.categories : "N/A";
  const city = restaurantData ? restaurantData.city : "N/A";
  const fullAddress = restaurantData ? restaurantData.full_address : "N/A";
  const review = restaurantData ? restaurantData.text : "N/A";

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {restaurantData ? (
        <>
          <h1 className="text-3xl font-semibold mb-4">{name}</h1>
          <div className="flex items-center mb-4">
            <FaStar className="text-yellow-500 mr-2" />
            <span>{stars}</span>
          </div>
          <p>
            <strong>Alcohol:</strong> {alcohol}
          </p>
          <p>
            <strong>Business Accepts Credit Cards:</strong>{" "}
            {businessAcceptsCreditCards}
          </p>
          <p>
            <strong>Good for Kids:</strong> {goodForKids}
          </p>
          <p>
            <strong>Has TV:</strong> {hasTV}
          </p>
          <p>
            <strong>Noise Level:</strong> {noiseLevel}
          </p>
          <p>
            <strong>Outdoor Seating:</strong> {outdoorSeating}
          </p>
          <p>
            <strong>Parking:</strong> {parking}
          </p>
          <p>
            <strong>Restaurants Delivery:</strong> {restaurantsDelivery}
          </p>
          <p>
            <strong>Restaurants Good for Groups:</strong>{" "}
            {restaurantsGoodForGroups}
          </p>
          <p>
            <strong>Categories:</strong> {categories}
          </p>
          <p>
            <strong>City:</strong> {city}
          </p>
          <p>
            <strong>Full Address:</strong> {fullAddress}
          </p>
          <p>
            <strong>Review:</strong> {review}
          </p>
        </>
      ) : (
        <p>No data found for this restaurant.</p>
      )}
    </div>
  );
};

export default RestaurantDetail;
