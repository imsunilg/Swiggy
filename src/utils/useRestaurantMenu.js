import { useEffect, useState } from "react";
import {
  CORS_TOKEN,
  CORS_URL,
  RESTAURANT_MENU_API_URL,
} from "../utils/constants";

export const useRestaurantMenu = (resID) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_MENU_API_URL + resID);

    const json = await data.json();
    console.log(json.data);
    setResInfo(json.data);
  };

  return resInfo;
};

//export default useRestaurantMenu;
