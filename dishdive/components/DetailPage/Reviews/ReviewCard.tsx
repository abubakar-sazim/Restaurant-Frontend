import { useChatContext } from "@/context/chatContext";
import { generateFakename, splitTextToSentences } from "@/utils/textHelpers";
import Avatar from "react-avatar";
import FakeReviewers from "./FakeReviewer";

interface reviewCardProps {
  params: {
    businessId: string;
  };
  restaurantReviews: string[];
}

const ReviewCard: React.FC<reviewCardProps> = ({
  restaurantReviews,
  params,
}) => {
  const { context, reviews } = useChatContext();
  const businessId = params.businessId;
  let highlightedReview = "N/A";

  if (!Array.isArray(restaurantReviews) || restaurantReviews.length === 0) {
    return <p>No reviews available above 3.0 rating</p>;
  }

  if (context != null) {
    const restaurantData =
      context[`id_0`] && context[`id_0`].business_id === businessId
        ? context[`id_0`]
        : context[`id_1`] && context[`id_1`].business_id === businessId
        ? context[`id_1`]
        : context[`id_2`] && context[`id_2`].business_id === businessId
        ? context[`id_2`]
        : null;

    highlightedReview = restaurantData ? restaurantData.text : "N/A";
  }

  return (
    <>
      {highlightedReview !== "N/A" && (
        <div className="bg-orange-100 border border-gray-300 p-2 mr-4 rounded-md text-sm">
          <FakeReviewers />
          <p className="text-sm ml-3 text-justify">{highlightedReview}</p>
        </div>
      )}
      <div>
        {restaurantReviews.map((review: string) => (
          <>
            <FakeReviewers />
            <p className="text-sm ml-3 text-justify">
              {splitTextToSentences(review.trim())}
            </p>
          </>
        ))}
      </div>
    </>
  );
};

export default ReviewCard;
