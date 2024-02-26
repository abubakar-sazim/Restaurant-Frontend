"use client";

import MapComponent from "@/components/map";
import Rating from "@/components/rating";
import { Badge } from "@/components/ui/badge";
import { useChatContext } from "@/context/chatContext";
import { SlLocationPin } from "react-icons/sl";
import { MdFeedback } from "react-icons/md";
import { MdFormatListBulleted } from "react-icons/md";
import { faker } from "@faker-js/faker";
import Avatar from "react-avatar";
import MapContainer from "@/components/map";

interface RestaurantPageProps {
  params: {
    business_id: string;
  };
}

const generateFakename = () => {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  return `${firstName} ${lastName}`;
};

const splitTextToSentences = (text: string) => {
  const sentences = text.split(/\. |\.\n|\.$/);
  const firstThreeSentences = sentences.slice(0, 3);
  return firstThreeSentences.join(". ");
};

const RestaurantDetail: React.FC<RestaurantPageProps> = ({ params }) => {
  const business_id = params.business_id;
  const { context, reviews } = useChatContext();

  const restaurantData =
    context[`id_0`] && context[`id_0`].business_id === business_id
      ? context[`id_0`]
      : context[`id_1`] && context[`id_1`].business_id === business_id
      ? context[`id_1`]
      : context[`id_2`] && context[`id_2`].business_id === business_id
      ? context[`id_2`]
      : null;

  const businessReviews = reviews[business_id];

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
  let wifi = restaurantData ? restaurantData.WiFi : "N/A";
  if (wifi === "o") {
    wifi = "no";
  } else if (wifi === "ree") {
    wifi = "free";
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 grid grid-rows-auto gap-y-10">
      {restaurantData ? (
        <>
          <div className="grid grid-rows-auto gap-y-4">
            <h1 className="text-3xl font-semibold mb-4">{name}</h1>
            <div className="flex items-center">
              <div className="absolute h-8 w-8 rounded-full bg-blue-400 flex items-center justify-center">
                <SlLocationPin className="text-white" />
              </div>
              <p className="text-md italic ml-10">{fullAddress}</p>
            </div>
            <div>
              <strong>Categories:</strong>{" "}
              {categories.split(",").map((category: string) => (
                <Badge key={category} variant="outline">
                  {category.trim()}
                </Badge>
              ))}
            </div>
            <div>
              <Rating rating={stars} size={40} />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="col-span-1">
              <div className="p-2 flex items-center">
                <div className="relative flex items-center">
                  <div className=" h-8 w-8 rounded-full bg-blue-400 flex items-center justify-center">
                    <SlLocationPin className="text-white" />
                  </div>
                  <h1 className="ml-2 text-center font-bold text-lg">
                    Location
                  </h1>
                </div>
              </div>
              <div className="p-2 flex items-center justify-center">
                <MapContainer location={fullAddress} />
              </div>

              <div className="p-4 mt-2">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-blue-400 flex items-center justify-center">
                    <MdFormatListBulleted className="text-white" />
                  </div>
                  <h1 className="ml-2 font-bold text-lg">Attributes</h1>
                </div>
                <table className="min-w-full divide-y divide-gray-200 mt-4">
                  <thead className="bg-blue-200">
                    <tr>
                      <th className="px-3 py-2 text-left text-xs font-lg uppercase tracking-wider">
                        Attribute
                      </th>
                      <th className="px-3 py-2 text-left text-xs font-lg uppercase tracking-wider">
                        Value
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-3 py-2 whitespace-nowrap">
                        <p>Alcohol</p>
                      </td>
                      <td className="px-3 py-2 whitespace-nowrap">{alcohol}</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 whitespace-nowrap">
                        <p>Wifi</p>
                      </td>
                      <td className="px-3 py-2 whitespace-nowrap">{wifi}</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 whitespace-nowrap">
                        <p>Accepts Credit Cards</p>
                      </td>
                      <td className="px-3 py-2 whitespace-nowrap">
                        {businessAcceptsCreditCards}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 whitespace-nowrap">
                        <p>Good for Kids</p>
                      </td>
                      <td className="px-3 py-2 whitespace-nowrap">
                        {goodForKids}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 whitespace-nowrap">
                        <p>Has TV</p>
                      </td>
                      <td className="px-3 py-2 whitespace-nowrap">{hasTV}</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 whitespace-nowrap">
                        <p>Noise Level</p>
                      </td>
                      <td className="px-3 py-2 whitespace-nowrap">
                        {noiseLevel}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 whitespace-nowrap">
                        <p>Outdoor Seating</p>
                      </td>
                      <td className="px-3 py-2 whitespace-nowrap">
                        {outdoorSeating}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 whitespace-nowrap">
                        <p>Parking</p>
                      </td>
                      <td className="px-3 py-2 whitespace-nowrap">{parking}</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 whitespace-nowrap">
                        <p>Delivery</p>
                      </td>
                      <td className="px-3 py-2 whitespace-nowrap">
                        {restaurantsDelivery}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 whitespace-nowrap">
                        <p>Good for Groups</p>
                      </td>
                      <td className="px-3 py-2 whitespace-nowrap">
                        {restaurantsGoodForGroups}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="col-span-1">
              <div className=" p-4">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-blue-400 flex items-center justify-center">
                    <MdFeedback className="text-white" />
                  </div>
                  <h1 className="ml-2 font-bold text-lg">Reviews</h1>
                </div>
                <div className="mt-4">
                  {review && (
                    <>
                      <div className="flex items-center mb-2">
                        <Avatar name={generateFakename()} size="30" round />
                        <h1 className="ml-3 font-medium">
                          {generateFakename()}
                        </h1>
                      </div>
                      <p className="text-sm ml-3">
                        {splitTextToSentences(review)}
                      </p>
                    </>
                  )}
                  <br />
                  {businessReviews.map((review: string) => (
                    <>
                      <>
                        <div className="flex items-center mb-2">
                          <Avatar name={generateFakename()} size="30" round />
                          <h1 className="ml-3 font-medium">
                            {generateFakename()}
                          </h1>
                        </div>
                        <p className="text-sm ml-3">
                          {splitTextToSentences(review.trim())}
                        </p>
                      </>
                      <br />
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>No data found for this restaurant.</p>
      )}
    </div>
  );
};

export default RestaurantDetail;
