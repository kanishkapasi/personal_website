import Image from "next/image";
import Link from "next/link";
import interiorOne from "../../public/interiror_site/desktop-view.png";
import interiroTwo from "../../public/interiror_site/desktopview2.png";
import interiorThree from "../../public/interiror_site/desktopview3.png";
import interiorFour from "../../public/interiror_site/desktopview4.png";
import interiorFive from "../../public/interiror_site/desktopview5.png";
import interiorSix from "../../public/interiror_site/mobileView.png";
import interiorSeven from "../../public/interiror_site/mobileview2.png";

const data = [
  {
    id: "1",
    description: "",
    image: [
      {
        imageOne: interiorOne,
      },
      {
        imageTwo: interiroTwo,
      },
      {
        imageThree: interiorThree,
      },
      {
        imageFour: interiorFour,
      },
      {
        imageFive: interiorFive,
      },
      {
        imageSix: interiorSix,
      },
      {
        imageSeven: interiorSeven,
      },
    ],
  },
];

export default function RecentPosts() {
  return (
    <div className="lg:w-[95%] w-[80%] mx-auto bg-[#0e0d0d] mt-8 rounded-[20px] h-[30vh]">
      <h1>posts</h1>
      {data.map((e) => {
        return (
          <div>
            <Link href={"/recent_post/" + e.id}>
              <Image
                src={e.image[0].imageOne}
                className="w-[300px] object-cover"
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
}
