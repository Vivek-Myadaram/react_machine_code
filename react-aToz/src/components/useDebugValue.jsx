import { useState, useEffect, useDebugValue } from "react";

function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  // This line shows a helpful label in DevTools
  useDebugValue(isOnline, (value) => `Internet Connection: ${value}`);

  useEffect(() => {
    const handleStatusChange = () => setIsOnline(navigator.onLine);
    window.addEventListener("online", handleStatusChange);
    window.addEventListener("offline", handleStatusChange);

    return () => {
      window.removeEventListener("online", handleStatusChange);
      window.removeEventListener("offline", handleStatusChange);
    };
  }, []);

  return isOnline;
}

export default useOnlineStatus;
