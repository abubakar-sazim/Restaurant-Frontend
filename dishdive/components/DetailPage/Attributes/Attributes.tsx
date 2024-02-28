import { MdFormatListBulleted } from "react-icons/md";
import {
  getBooleanIcon,
  getNoiseLevelIcon,
  getWifiBooleanIcon,
} from "./Attributes.helper";
import { RestaurantData } from "../Helper/helper";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";

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

  console.log(businessAcceptsCreditCards);

  return (
    <div className="p-4 mt-2">
      <div className="flex items-center">
        <div className="h-8 w-8 rounded-full bg-blue-400 flex items-center justify-center">
          <MdFormatListBulleted className="text-white" />
        </div>
        <h1 className="ml-2 font-bold text-lg">Attributes</h1>
      </div>
      <TooltipProvider>
        <table className="min-w-full divide-y divide-gray-200 mt-4">
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-3 py-2 whitespace-nowrap">
                <strong>Alcohol</strong>
              </td>
              <td className="px-3 py-2 whitespace-nowrap">
                <Badge variant="outline">{alcohol}</Badge>
              </td>
            </tr>
            <tr>
              <td className="px-3 py-2 whitespace-nowrap">
                <strong>Wifi</strong>
              </td>
              <td className="px-3 py-2 whitespace-nowrap">
                <Tooltip>
                  <TooltipTrigger>{getWifiBooleanIcon(wifi)}</TooltipTrigger>
                  <TooltipContent>
                    <p>{wifi}</p>
                  </TooltipContent>
                </Tooltip>
              </td>
            </tr>
            <tr>
              <td className="px-3 py-2 whitespace-nowrap">
                <strong>Accepts Credit Cards</strong>
              </td>
              <td className="px-3 py-2 whitespace-nowrap">
                <Tooltip>
                  <TooltipTrigger>
                    {getBooleanIcon(businessAcceptsCreditCards)}
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      {businessAcceptsCreditCards ? <p>True</p> : <p>False</p>}
                    </p>
                  </TooltipContent>
                </Tooltip>
              </td>
            </tr>
            <tr>
              <td className="px-3 py-2 whitespace-nowrap">
                <strong>Good for Kids</strong>
              </td>
              <td className="px-3 py-2 whitespace-nowrap">
                <Tooltip>
                  <TooltipTrigger>{getBooleanIcon(goodForKids)}</TooltipTrigger>
                  <TooltipContent>
                    <p>{goodForKids ? <p>True</p> : <p>False</p>}</p>
                  </TooltipContent>
                </Tooltip>
              </td>
            </tr>
            <tr>
              <td className="px-3 py-2 whitespace-nowrap">
                <strong>TV</strong>
              </td>
              <td className="px-3 py-2 whitespace-nowrap">
                <Tooltip>
                  <TooltipTrigger>{getBooleanIcon(hasTV)}</TooltipTrigger>
                  <TooltipContent>
                    <p>{hasTV ? <p>Yes</p> : <p>No</p>}</p>
                  </TooltipContent>
                </Tooltip>
              </td>
            </tr>
            <tr>
              <td className="px-3 py-2 whitespace-nowrap">
                <strong>Noise Level</strong>
              </td>
              <td className="px-3 py-2 whitespace-nowrap">
                <Tooltip>
                  <TooltipTrigger>
                    {getNoiseLevelIcon(noiseLevel)}
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{noiseLevel}</p>
                  </TooltipContent>
                </Tooltip>
              </td>
            </tr>
            <tr>
              <td className="px-3 py-2 whitespace-nowrap">
                <strong>Outdoor Seating</strong>
              </td>
              <td className="px-3 py-2 whitespace-nowrap">
                <Tooltip>
                  <TooltipTrigger>
                    {getBooleanIcon(outdoorSeating)}
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{outdoorSeating ? <p>True</p> : <p>False</p>}</p>
                  </TooltipContent>
                </Tooltip>
              </td>
            </tr>
            <tr>
              <td className="px-3 py-2 whitespace-nowrap">
                <strong>Delivery</strong>
              </td>
              <td className="px-3 py-2 whitespace-nowrap">
                <Tooltip>
                  <TooltipTrigger>
                    {getBooleanIcon(restaurantsDelivery)}
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{restaurantsDelivery ? <p>Yes</p> : <p>No</p>}</p>
                  </TooltipContent>
                </Tooltip>
              </td>
            </tr>
            <tr>
              <td className="px-3 py-2 whitespace-nowrap">
                <strong>Good for Groups</strong>
              </td>
              <td className="px-3 py-2 whitespace-nowrap">
                <Tooltip>
                  <TooltipTrigger>
                    {getBooleanIcon(restaurantsGoodForGroups)}
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      {restaurantsGoodForGroups ? <p>True</p> : <p>False</p>}
                    </p>
                  </TooltipContent>
                </Tooltip>
              </td>
            </tr>
          </tbody>
        </table>
      </TooltipProvider>
    </div>
  );
};

export default AttributeTable;
