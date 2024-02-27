export interface RestaurantData {
    alcohol: string;
    name: string;
    stars: number;
    businessAcceptsCreditCards: boolean;
    goodForKids: boolean;
    hasTV: boolean;
    noiseLevel: string;
    outdoorSeating: boolean;
    restaurantsDelivery: boolean;
    restaurantsGoodForGroups: boolean;
    categories: string;
    city: string;
    fullAddress: string;
    text: string;
    wiFi: string;
  }

export const mapColumnsToCamelCase = (data: any): RestaurantData => {
    return {
      alcohol: data.Alcohol,
      name: data.name,
      stars: data.stars,
      businessAcceptsCreditCards: data.BusinessAcceptsCreditCards,
      goodForKids: data.GoodForKids,
      hasTV: data.HasTV,
      noiseLevel: data.NoiseLevel,
      outdoorSeating: data.OutdoorSeating,
      restaurantsDelivery: data.RestaurantsDelivery,
      restaurantsGoodForGroups: data.RestaurantsGoodForGroups,
      categories: data.categories,
      city: data.city,
      fullAddress: data.full_address,
      text: data.text,
      wiFi: data.WiFi,
    };
  };