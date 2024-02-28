"use client";

import DetailPage from "@/components/DetailPage/DetailPage";

interface RestaurantPageProps {
  params: {
    businessId: string;
  };
}

const RestaurantDetail: React.FC<RestaurantPageProps> = ({ params }) => {
  const businessId = params.businessId;

  return <DetailPage businessId={businessId} />;
};

export default RestaurantDetail;
