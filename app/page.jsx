"use client";
import { useEffect, useState } from "react";
import Header from "./components/header.component";
import Navbar from "./components/navbar.component";
import LoadindScreen from "./components/screen_loading";
import SideBar from "./components/sidebar.component";

// Images
import Image from "next/image";
import codeImage from "../public/my_logo/icon-dev.svg";
import RecentPosts from "./recent_post/page";

const data = [
  {
    id: "1",
    h3: "Website Development",
    p: "Ecommerce websites,Personal websites,Portfolio websites,Small business websites,Blog websites.",
  },
  {
    id: "2",
    h3: "Graphic Designing",
    p: "Flayer & Cover Designs , ,Logo Designs ,Intro Animation ",
  },
  {
    id: "3",
    h3: "Ui/Ux Designing",
    p: "Application and Websites",
  },
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1100);
  }, 5000);

  return (
    <div>
      {isLoading ? (
        <LoadindScreen />
      ) : (
        <div className="w-[100%] bg-black  md:h-[100%] h-[100%] pb-10">
          <Navbar />
          <Header />
          <div className="flex items-start justify-between mx-auto">
            <SideBar />

            <div className="mt-4 lg:mt-0 bg-[#0e0d0d] lg:w-[60%] w-[80%] mx-auto h-[100%] pb-10 rounded-[30px]">
              <h2 className="text-center text-white text-2xl mt-3">Services</h2>
              <div className="w-[90%] mx-auto grid lg:grid-cols-3 gap-3 md:grid-cols-2 grid-cols-1 mt-4">
                {data.map((e) => (
                  <div
                    className="w-[100%] h-[100%] pb-8  rounded-[20px] bg-black p-2 flex items-start justify-around gap-1 pt-5"
                    key={e.id}>
                    <Image src={codeImage} className="w-[40px]" />
                    <div className="w-[80%] flex-col items-center justify-center">
                      <h3 className="text-white text-md md:text-xl">{e.h3}</h3>
                      <div className="w-[100%] border-b-4 border-[#0e0d0d] mt-2"></div>
                      <p className="text-white text-sm mt-5">{e.p}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Second Page */}
          <RecentPosts />
        </div>
      )}
    </div>
  );
}
