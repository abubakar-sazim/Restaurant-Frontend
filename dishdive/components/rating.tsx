import React from "react";
import { FaStar } from "react-icons/fa";

interface RatingProps {
  rating: number;
}

const Rating: React.FC<RatingProps> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar className="text-yellow-500 mr-2" key={i} />);
    }
    if (hasHalfStar) {
      stars.push(
        <FaStar
          className="text-yellow-500 mr-2"
          style={{ clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)" }}
          key={fullStars}
        />
      );
    }
    for (let i = 0; i < 5 - fullStars - (hasHalfStar ? 1 : 0); i++) {
      stars.push(
        <FaStar
          className="text-gray-400 mr-2"
          key={fullStars + (hasHalfStar ? 1 : 0) + i}
        />
      );
    }
    return stars;
  };

  return <div className="flex">{renderStars()}</div>;
};

export default Rating;
