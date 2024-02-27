import { useEffect, useState } from "react";
import { RestaurantData, mapColumnsToCamelCase } from "./Helper/helper";
import axios from "axios";
import { Progress } from "@radix-ui/react-progress";
import Reviews from "./Reviews/Reviews";
import AttributeTable from "./Attributes/Attributes";
import DetailHead from "./HeaderSection";
import LocationSection from "./LocationSection";

interface DetailPageProps {
  businessId: string;
}

interface RestaurantReviewsData {
  numReviews: number;
  avgStars: number;
}

const DetailPage: React.FC<DetailPageProps> = ({ businessId }) => {
  const [restaurantData, setRestaurantData] = useState<RestaurantData | null>(
    null
  );
  const [restaurantReviews, setRestaurantReviews] = useState<string[]>([]);
  const [restaurantAvgStarsAndNumReviews, setRestaurantAvgStarsAndNumReviews] =
    useState<RestaurantReviewsData>();
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
        .get(
          `${process.env.NEXT_PUBLIC_BE_URL}/restaurant/${businessId}/reviews`
        )
        .then((response) => {
          setRestaurantReviews(response.data);
        })
        .catch((error) => {
          console.error("Error fetching restaurant reviews:", error);
        });
    };

    const fetchAvgRestaurantStars = () => {
      axios
        .get(
          `${process.env.NEXT_PUBLIC_BE_URL}/restaurant/${businessId}/reviews/count`
        )
        .then((response) => {
          const transformedData: RestaurantReviewsData = {
            numReviews: response.data.number_of_reviews,
            avgStars: response.data.avg_stars,
          };

          setRestaurantAvgStarsAndNumReviews(transformedData);
        })
        .catch((error) => {
          console.error("Error fetching restaurant reviews:", error);
        });
    };

    fetchRestaurantData();
    fetchRestaurantReviews();
    fetchAvgRestaurantStars();
  }, [businessId]);

  if (loading) {
    return (
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-200 bg-opacity-50">
        <div className="w-20">
          <Progress value={70} />
        </div>
      </div>
    );
  }

  if (!restaurantData) {
    return <p>No data found for this restaurant.</p>;
  }

  if (!restaurantAvgStarsAndNumReviews) {
    return <p>No reviews data found for this restaurant.</p>;
  }

  const { name, categories, fullAddress } = restaurantData;
  const { numReviews, avgStars } = restaurantAvgStarsAndNumReviews;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 grid grid-rows-auto gap-y-10">
      {restaurantData ? (
        <>
          <DetailHead
            name={name}
            categories={categories}
            fullAddress={fullAddress}
            numReviews={numReviews}
            avgStars={avgStars}
          />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="col-span-1">
              <LocationSection fullAddress={fullAddress} />
              <AttributeTable {...restaurantData} />
            </div>

            <div className="col-span-1">
              <Reviews
                businessId={businessId}
                restaurantReviews={restaurantReviews}
              />
            </div>
          </div>
        </>
      ) : (
        <p>No data found for this restaurant.</p>
      )}
    </div>
  );
};

export default DetailPage;
