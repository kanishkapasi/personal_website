"use client";
import { useEffect, useState } from "react";
import Header from "./components/header.component";
import Navbar from "./components/navbar.component";
import LoadindScreen from "./components/screen_loading";
import SideBar from "./components/sidebar.component";

// Images
import Image from "next/image";
import codeImage from "../public/my_logo/icon-dev.svg";

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
        <div className="w-[100%] bg-black h-[100%]">
          <Navbar />

          <Header />
          <div className="flex items-center justify-between">
            <SideBar />
            <div className="mt-4 bg-[#0e0d0d] lg:w-[60%] w-[80%] mx-auto h-[80vh] rounded-[30px]">
              <h2 className="text-center text-white text-2xl mt-3">Services</h2>
              <div className="w-[90%] mx-auto h-[100%] grid lg:grid-cols-3 gap-3 md:grid-cols-2 grid-cols-1 mt-4">
                <div className="w-[100%] h-[20vh] lg:h-[30vh]  rounded-[20px] bg-black p-2 flex items-start justify-around gap-1 pt-5">
                  <Image src={codeImage} />
                  <div className="w-[80%] flex-col items-center justify-center">
                    <h3 className="text-white text-md md:text-xl">
                      Website Development
                    </h3>
                    <div className="w-[100%] border-b-4 border-[#0e0d0d]"></div>
                    <p className="text-white">
                      Ecommerce websites,Personal websites,Portfolio
                      websites,Small business websites,Blog websites.
                    </p>
                  </div>
                </div>
                <div className="w-[100%] h-[20vh] lg:h-[30vh] rounded-[20px] bg-black p-2 flex items-start justify-around gap-1 pt-5">
                  <Image src={codeImage} />
                  <div className="w-[80%] flex-col items-center justify-center">
                    <h3 className="text-white text-2xl">Website Development</h3>
                    <div className="w-[100%] border-b-4 border-[#0e0d0d]"></div>
                    <p className="text-white">
                      Ecommerce websites,Personal websites,Portfolio
                      websites,Small business websites,Blog websites.
                    </p>
                  </div>
                </div>
                <div className="w-[100%] h-[20vh] lg:h-[30vh] rounded-[20px] bg-black p-2 flex items-start justify-around gap-1 pt-5">
                  <Image src={codeImage} />
                  <div className="w-[80%] flex-col items-center justify-center">
                    <h3 className="text-white text-2xl">Website Development</h3>
                    <div className="w-[100%] border-b-4 border-[#0e0d0d]"></div>
                    <p className="text-white">
                      Ecommerce websites,Personal websites,Portfolio
                      websites,Small business websites,Blog websites.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Page */}
        </div>
      )}
    </div>
  );
}
