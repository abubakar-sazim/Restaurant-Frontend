"use client";

import Rating from "@/components/rating";
import { Badge } from "@/components/ui/badge";
import { SlLocationPin } from "react-icons/sl";
import { MdFeedback } from "react-icons/md";
import MapContainer from "@/components/detailPage/map";
import axios from "axios";
import { useEffect, useState } from "react";
import HighlightedReview from "@/components/detailPage/highlightedReview";
import AttributeTable from "@/components/detailPage/attributeTable";
import AllReviews from "@/components/detailPage/allReviews";

interface RestaurantPageProps {
  params: {
    business_id: string;
  };
}

export interface RestaurantData {
  alcohol: string;
  name: string;
  stars: number;
  businessAcceptsCreditCards: boolean;
  goodForKids: boolean;
  hasTV: boolean;
  noiseLevel: string;
  outdoorSeating: boolean;
  restaurantsDelivery: boolean;
  restaurantsGoodForGroups: boolean;
  categories: string;
  city: string;
  fullAddress: string;
  text: string;
  wiFi: string;
}

const mapColumnsToCamelCase = (data: any): RestaurantData => {
  return {
    alcohol: data.Alcohol,
    name: data.name,
    stars: data.stars,
    businessAcceptsCreditCards: data.BusinessAcceptsCreditCards,
    goodForKids: data.GoodForKids,
    hasTV: data.HasTV,
    noiseLevel: data.NoiseLevel,
    outdoorSeating: data.OutdoorSeating,
    restaurantsDelivery: data.RestaurantsDelivery,
    restaurantsGoodForGroups: data.RestaurantsGoodForGroups,
    categories: data.categories,
    city: data.city,
    fullAddress: data.full_address,
    text: data.text,
    wiFi: data.WiFi,
  };
};

const RestaurantDetail: React.FC<RestaurantPageProps> = ({ params }) => {
  const businessId = params.business_id;
  const [restaurantData, setRestaurantData] = useState<RestaurantData | null>(
    null
  );
  const [restaurantReviews, setRestaurantReviews] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRestaurantData = () => {
      axios
        .get(`${process.env.NEXT_PUBLIC_BE_URL}/restaurant/${businessId}`)
        .then((response) => {
          const formattedData = mapColumnsToCamelCase(response.data);
          setRestaurantData(formattedData);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching restaurant data:", error);
          setLoading(false);
        });
    };

    const fetchRestaurantReviews = () => {
      axios
        .get(`${process.env.NEXT_PUBLIC_BE_URL}/restaurant/${businessId}/reviews`)
        .then((response) => {
          setRestaurantReviews(response.data);
        })
        .catch((error) => {
          console.error("Error fetching restaurant reviews:", error);
        });
    };

    fetchRestaurantData();
    fetchRestaurantReviews();
  }, [businessId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!restaurantData) {
    return <p>No data found for this restaurant.</p>;
  }

  const { name, stars, categories, fullAddress } = restaurantData;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 grid grid-rows-auto gap-y-10">
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

              <AttributeTable {...restaurantData} />
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
                  <HighlightedReview
                    params={{
                      business_id: businessId,
                    }}
                  />
                  <AllReviews restaurantReviews={restaurantReviews}/>
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
