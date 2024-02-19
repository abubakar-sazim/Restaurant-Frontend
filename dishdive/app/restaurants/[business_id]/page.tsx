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
            <strong>Categories:</strong> {categories}
          </p>
          <p>
            <strong>Full Address:</strong> {fullAddress}
          </p>

          <div className="container mx-auto">
            <table className="min-w-full divide-y divide-gray-200 mt-4">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Attribute
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Value
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-3 py-2 whitespace-nowrap">
                    <strong>Alcohol</strong>
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap">{alcohol}</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 whitespace-nowrap">
                    <strong>Accepts Credit Cards</strong>
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap">
                    {businessAcceptsCreditCards}
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 whitespace-nowrap">
                    <strong>Good for Kids</strong>
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap">{goodForKids}</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 whitespace-nowrap">
                    <strong>Has TV</strong>
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap">{hasTV}</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 whitespace-nowrap">
                    <strong>Noise Level</strong>
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap">{noiseLevel}</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 whitespace-nowrap">
                    <strong>Outdoor Seating</strong>
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap">
                    {outdoorSeating}
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 whitespace-nowrap">
                    <strong>Parking</strong>
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap">{parking}</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 whitespace-nowrap">
                    <strong>Delivery</strong>
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap">
                    {restaurantsDelivery}
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 whitespace-nowrap">
                    <strong>Good for Groups</strong>
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap">
                    {restaurantsGoodForGroups}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4">
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
