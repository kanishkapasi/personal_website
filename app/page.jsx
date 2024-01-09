"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Navbar from "./components/navbar.component";
import LoadindScreen from "./components/screen_loading";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, 5000);

  return (
    <div>
      {isLoading ? (
        <LoadindScreen />
      ) : (
        <div className="bg-black">
          <Navbar />
          <h1>Export Default Function</h1>
          <Link href={"/contact"}>
            <button>Contact Me</button>
          </Link>
        </div>
      )}
    </div>
  );
}
