import { useEffect, useState } from "react";
//Export online check status
export const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);
  // check if the user is online
  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);

  return onlineStatus;
};
