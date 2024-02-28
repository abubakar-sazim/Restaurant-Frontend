import { useChatContext } from "@/context/chatContext";
import { generateFakename, splitTextToSentences } from "@/utils/textHelpers";
import Avatar from "react-avatar";

interface reviewCardProps {
  params: {
    business_id: string;
  };
  restaurantReviews: string[];
}

const ReviewCard: React.FC<reviewCardProps> = ({
  restaurantReviews,
  params,
}) => {
  const { context, reviews } = useChatContext();
  const business_id = params.business_id;
  let highlightedReview = "N/A";

  if (!Array.isArray(restaurantReviews) || restaurantReviews.length === 0) {
    return <p>No reviews available above 3.0 rating</p>;
  }

  if (context != null) {
    const restaurantData =
      context[`id_0`] && context[`id_0`].business_id === business_id
        ? context[`id_0`]
        : context[`id_1`] && context[`id_1`].business_id === business_id
        ? context[`id_1`]
        : context[`id_2`] && context[`id_2`].business_id === business_id
        ? context[`id_2`]
        : null;

    highlightedReview = restaurantData ? restaurantData.text : "N/A";
  }

  return (
    <>
      {highlightedReview !== "N/A" && (
        <div className="bg-orange-100 border border-gray-300 p-2 rounded-md text-sm">
          <div className="flex items-center mb-2">
            <Avatar name={generateFakename()} size="25" round />
            <h1 className="ml-3 font-medium">{generateFakename()}</h1>
          </div>
          <p className="text-sm ml-3 text-justify">{highlightedReview}</p>
        </div>
      )}
      <div>
        {restaurantReviews.map((review: string) => (
          <>
            <>
              <div className="flex items-center mt-3 mb-2">
                <Avatar name={generateFakename()} size="25" round />
                <h1 className="ml-3 font-medium">{generateFakename()}</h1>
              </div>
              <p className="text-sm ml-3 text-justify">
                {splitTextToSentences(review.trim())}
              </p>
            </>
            <br />
          </>
        ))}
      </div>
    </>
  );
};

export default ReviewCard;
