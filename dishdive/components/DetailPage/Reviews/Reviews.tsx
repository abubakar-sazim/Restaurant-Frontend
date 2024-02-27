import { MdFeedback } from "react-icons/md";
import HighlightedReview from "./HighlightedReview";
import AllReviews from "./AllReviews";
import React from "react";

interface reviewPageProps {
  businessId: string;
  restaurantReviews: string[];
}

const Reviews: React.FC<reviewPageProps> = ({
  businessId,
  restaurantReviews,
}) => {
  return (
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
        <AllReviews restaurantReviews={restaurantReviews} />
      </div>
    </div>
  );
};

export default Reviews;
