import RestaurantCard from "./RestaurantCard";

interface Restaurant {
  name: string;
  stars: number;
  full_address: string;
  business_id: string;
  text: string;
}

interface RestaurantListProps {
  restaurants: Restaurant[];
}



const RestaurantList: React.FC<RestaurantListProps> = ({ restaurants }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {restaurants.map((restaurant, index) => (
        <RestaurantCard
          key={index}
          name={restaurant.name}
          stars={restaurant.stars}
          fullAddress={restaurant.full_address}
          businessId={restaurant.business_id}
          text={restaurant.text}
        />
      ))}
    </div>
  );
};

export default RestaurantList;
