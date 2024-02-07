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
          business_id={restaurant.business_id}
        />
      ))}
    </div>
  );
};

export default RestaurantList;
