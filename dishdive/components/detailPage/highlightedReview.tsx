import { useChatContext } from "@/context/chatContext";

interface RestaurantPageProps {
  params: {
    business_id: string;
  };
}

const HighlightedReview: React.FC<RestaurantPageProps> = ({ params }) => {
  const { context, reviews } = useChatContext();
  const business_id = params.business_id;

  if (!context) {
    return null;
  }

  const restaurantData =
    context[`id_0`] && context[`id_0`].business_id === business_id
      ? context[`id_0`]
      : context[`id_1`] && context[`id_1`].business_id === business_id
      ? context[`id_1`]
      : context[`id_2`] && context[`id_2`].business_id === business_id
      ? context[`id_2`]
      : null;

  const review = restaurantData ? restaurantData.text : "N/A";
  return (
    <div className="bg-orange-100 border border-gray-300 p-4 rounded-md text-sm">
      {review}
    </div>
  );
};

export default HighlightedReview;
