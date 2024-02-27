import { Restaurant } from "./RestaurantCard";
import RestaurantCard from "./RestaurantCard";

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
          full_address={restaurant.full_address}
          business_id={restaurant.business_id}
          text={restaurant.text}
        />
      ))}
    </div>
  );
};

export default RestaurantList;
