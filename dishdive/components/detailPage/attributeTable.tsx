import { MdFormatListBulleted } from "react-icons/md";
import {
  getBooleanIcon,
  getNoiseLevelIcon,
  getWifiBooleanIcon,
} from "./iconLoader";
import { RestaurantData } from "@/app/restaurants/[business_id]/page";

const AttributeTable = (restaurantData: RestaurantData) => {
  const {
    alcohol,
    businessAcceptsCreditCards,
    goodForKids,
    hasTV,
    noiseLevel,
    outdoorSeating,
    restaurantsDelivery,
    restaurantsGoodForGroups,
    wiFi,
  } = restaurantData;
  const wifi = wiFi === "o" ? "no" : wiFi === "ree" ? "free" : wiFi;

  return (
    <div className="p-4 mt-2">
      <div className="flex items-center">
        <div className="h-8 w-8 rounded-full bg-blue-400 flex items-center justify-center">
          <MdFormatListBulleted className="text-white" />
        </div>
        <h1 className="ml-2 font-bold text-lg">Attributes</h1>
      </div>
      <table className="min-w-full divide-y divide-gray-200 mt-4">
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-3 py-2 whitespace-nowrap">
              <strong>Alcohol</strong>
            </td>
            <td className="px-3 py-2 whitespace-nowrap">{alcohol}</td>
          </tr>
          <tr>
            <td className="px-3 py-2 whitespace-nowrap">
              <strong>Wifi</strong>
            </td>
            <td className="px-3 py-2 whitespace-nowrap">
              {getWifiBooleanIcon(wifi)}
            </td>
          </tr>
          <tr>
            <td className="px-3 py-2 whitespace-nowrap">
              <strong>Accepts Credit Cards</strong>
            </td>
            <td className="px-3 py-2 whitespace-nowrap">
              {getBooleanIcon(businessAcceptsCreditCards)}
            </td>
          </tr>
          <tr>
            <td className="px-3 py-2 whitespace-nowrap">
              <strong>Good for Kids</strong>
            </td>
            <td className="px-3 py-2 whitespace-nowrap">
              {getBooleanIcon(goodForKids)}
            </td>
          </tr>
          <tr>
            <td className="px-3 py-2 whitespace-nowrap">
              <strong>Has TV</strong>
            </td>
            <td className="px-3 py-2 whitespace-nowrap">
              {getBooleanIcon(hasTV)}
            </td>
          </tr>
          <tr>
            <td className="px-3 py-2 whitespace-nowrap">
              <strong>Noise Level</strong>
            </td>
            <td className="px-3 py-2 whitespace-nowrap">
              {getNoiseLevelIcon(noiseLevel)}
            </td>
          </tr>
          <tr>
            <td className="px-3 py-2 whitespace-nowrap">
              <strong>Outdoor Seating</strong>
            </td>
            <td className="px-3 py-2 whitespace-nowrap">
              {getBooleanIcon(outdoorSeating)}
            </td>
          </tr>
          <tr>
            <td className="px-3 py-2 whitespace-nowrap">
              <strong>Delivery</strong>
            </td>
            <td className="px-3 py-2 whitespace-nowrap">
              {getBooleanIcon(restaurantsDelivery)}
            </td>
          </tr>
          <tr>
            <td className="px-3 py-2 whitespace-nowrap">
              <strong>Good for Groups</strong>
            </td>
            <td className="px-3 py-2 whitespace-nowrap">
              {getBooleanIcon(restaurantsGoodForGroups)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AttributeTable;
