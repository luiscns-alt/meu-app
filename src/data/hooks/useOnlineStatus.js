import { useState, useEffect } from "react";

export default function useOnlineStatus() {
  const [isOnline, setOnline] = useState(navigator.onLine);

  const goOnline = () => setOnline(true);
  const goOffile = () => setOnline(false);

  useEffect(() => {
    window.addEventListener("online", goOnline);
    window.addEventListener("offline", goOffile);

    return () => {
      window.removeEventListener("online", goOnline);
            window.removeEventListener("offline", onoffline);
    };
  }, []);

  return isOnline;
}
