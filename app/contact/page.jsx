"use client";
import { useEffect, useState } from "react";
import Navbar from "../components/navbar.component";
import LoadindScreen from "../components/screen_loading";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <div>
      {isLoading ? (
        <LoadindScreen />
      ) : (
        <div>
          <Navbar />
          <h1>Contact Page</h1>
        </div>
      )}
    </div>
  );
}
