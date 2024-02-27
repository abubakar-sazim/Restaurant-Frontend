import { Restaurant } from "./restaurantCard";
import RestaurantCard from "./restaurantCard";

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
          fullAddress={restaurant.fullAddress}
          businessId={restaurant.businessId}
          text={restaurant.text}
        />
      ))}
    </div>
  );
};

export default RestaurantList;
