import Image from "next/image";
import Link from "next/link";
import data from "../data/data";

export default function RecentPosts() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="lg:w-[95%] w-[80%] mx-auto bg-[#0e0d0d] mt-8 rounded-[20px] h-[100%] p-3 pb-10">
      <h1 className="text-start">Recently Applications</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 place-items-center w-[100%] h-[100%]">
        {data.map((e) => {
          return (
            <div key={e.id} className="w-[100%] rounded-[20px]">
              <Link href={e.pageUrl}>
                <div className="w-[100%] h-[250px] bg-orange-500 rounded-[20px]">
                  <Image
                    src={e.image[0].imageOne}
                    className="object-cover rounded-[20px]"
                  />
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
