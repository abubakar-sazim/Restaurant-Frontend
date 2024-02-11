"use client";

import { useChatContext } from "@/context/chatContext";

interface RestaurantPageProps {
  params: {
    business_id: string;
  };
}

const RestaurantDetail: React.FC<RestaurantPageProps> = ({ params }) => {
  const business_id = params.business_id
  const { context } = useChatContext();

  const restaurantData =
    context[`id_0`] && context[`id_0`].business_id === business_id
      ? context[`id_0`]
      : context[`id_1`] && context[`id_1`].business_id === business_id
      ? context[`id_1`]
      : context[`id_2`] && context[`id_2`].business_id === business_id
      ? context[`id_2`]
      : null;

  const name = restaurantData ? restaurantData.name : "N/A";
  const stars = restaurantData ? restaurantData.stars : "N/A";

  return (
    <div>
      <h1>Restaurant Page</h1>
      <p>Business ID: {business_id}</p>
      <h1>Name: {name}</h1>
      <p>Stars: {stars}</p>
    </div>
  );
};

export default RestaurantDetail;
