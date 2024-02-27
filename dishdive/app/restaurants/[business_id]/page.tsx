"use client"

import DetailPage from "@/components/DetailPage/DetailPage";

interface RestaurantPageProps {
  params: {
    business_id: string;
  };
}

const RestaurantDetail: React.FC<RestaurantPageProps> = ({ params }) => {
  const businessId = params.business_id;

  return (
    <DetailPage businessId={businessId} />
  );
};

export default RestaurantDetail;
