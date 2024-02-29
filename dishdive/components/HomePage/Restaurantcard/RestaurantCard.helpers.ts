import { LG_IMG_URL, SM_IMG_URL } from "./RestaurantCard.constants";

export const generateRandomImage = () => {
  const randomImageIndex = Math.floor(Math.random() * 1000);
  const query = encodeURIComponent("restaurant food");
  const screenWidth = window.innerWidth;
  const isSmallScreen = screenWidth <= 640;

  if (isSmallScreen) {
    return `${SM_IMG_URL}${query}&sig=${randomImageIndex}`;
  } else {
    return `${LG_IMG_URL}${query}&sig=${randomImageIndex}`;
  }
};
