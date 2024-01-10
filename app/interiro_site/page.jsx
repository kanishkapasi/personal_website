import { useEffect, useState } from "react";
import LoadindScreen from "../components/screen_loading";

export default function InteriorSite() {
  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 1100);
  }, []);
  return (
    <div>
      {isLoading ? (
        <LoadindScreen />
      ) : (
        <div>
          <h1>Interior Site</h1>
        </div>
      )}
    </div>
  );
}
