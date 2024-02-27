import {
  generateFakename,
  splitTextToSentences,
} from "@/helper/processFunctions";
import Avatar from "react-avatar";

interface AllReviewsProps {
  restaurantReviews: string[];
}

const AllReviews: React.FC<AllReviewsProps> = ({ restaurantReviews }) => {
  if (!Array.isArray(restaurantReviews) || restaurantReviews.length === 0) {
    return <p>No reviews available</p>;
  }
  return (
    <>
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
    </>
  );
};

export default AllReviews;
