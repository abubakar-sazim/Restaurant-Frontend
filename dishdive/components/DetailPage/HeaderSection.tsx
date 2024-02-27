import { SlLocationPin } from "react-icons/sl";
import { Badge } from "../ui/badge";
import Rating from "../Helper/Rating";

interface headerPageProps {
  name: string;
  categories: string;
  fullAddress: string;
  numReviews: number;
  avgStars: number;
}

const DetailHead: React.FC<headerPageProps> = ({
  name,
  categories,
  fullAddress,
  numReviews,
  avgStars,
}) => {
  return (
    <div className="grid grid-rows-auto gap-y-4">
      <h1 className="text-3xl font-semibold mb-4">{name}</h1>
      <div className="flex items-center">
        <div className="absolute h-8 w-8 rounded-full bg-blue-400 flex items-center justify-center">
          <SlLocationPin className="text-white" />
        </div>
        <p className="text-md italic ml-10">{fullAddress}</p>
      </div>
      <div>
        <strong>Categories:</strong>{" "}
        {categories.split(",").map((category: string) => (
          <Badge key={category} variant="outline">
            {category.trim()}
          </Badge>
        ))}
      </div>
      <div className="flex items-center">
        <Rating rating={avgStars} size={40} />
        <h1 className="text-2xl">({numReviews} Reviews)</h1>
      </div>
    </div>
  );
};

export default DetailHead;
