import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail, MdOutlinePhone } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import imageTwo from "../../public/my_logo/20240109_103944-removebg-preview.png";
import imageOne from "../../public/myimage/mine.jpg";

export default function Header() {
  return (
    <div>
      <div className="w-[80%] mx-auto pt-5">
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-[#0e0d0d] bg-[#0e0d0d] lg:hidden  ">
          <div className="collapse-title text-xl font-medium flex items-center justify-around gap-7">
            <div>
              <Image
                src={imageOne}
                className="rounded-full w-[100px] h-[100px] object-cover"
              />
            </div>

            <div className="text-white text-center">
              <Link href={"/"}>
                <div className="flex items-center justify-center">
                  <Image src={imageTwo} className="h-[90px] w-[200px]" />
                </div>
              </Link>

              <div className="w-[200px] h-8 bg-black rounded-lg flex items-center justify-center ">
                <p className="text-sm">Frontend Developer</p>
              </div>
            </div>
          </div>

          <div className="collapse-content">
            <p className="text-white text-sm lg:text-lg mt-4">
              I'm{" "}
              <span
                style={{
                  color: "orange",
                }}>
                Kanishka Pasindu
              </span>
              , a seasoned{" "}
              <span
                style={{
                  color: "orange",
                }}>
                Frontend Developer
              </span>{" "}
              with Two years of experience under my belt. Beyond the
              professional facade, you may know me as{" "}
              <span
                style={{
                  color: "orange",
                }}>
                'Kpdev'
              </span>{" "}
              My journey in the realm of code is more than a career; it's a
              passion. But there's more to me than just programming. I have an
              insatiable love for technology, a fascination with the intricacies
              of{" "}
              <span
                style={{
                  color: "orange",
                }}>
                design,
              </span>{" "}
              and an affinity for all things Apple. When I'm not crafting
              elegant code, you'll find me engrossed in
              <span
                style={{
                  color: "orange",
                }}>
                TV series, grooving to music, and getting my adrenaline fix with
                horror movies.
              </span>
            </p>
            <div className="p-5 flex flex-col items-start justify-start gap-3">
              <div className="flex items-center justify-around gap-3">
                <MdEmail
                  style={{
                    color: "orange",
                  }}
                />
                <p className="text-white">kanishkapasindu6@gmail.com</p>
              </div>
              <div className="flex items-center justify-around gap-3">
                <MdOutlinePhone
                  style={{
                    color: "orange",
                  }}
                />
                <p className="text-white">0772894815</p>
              </div>
              <div className="flex items-center justify-around gap-3">
                <SlCalender
                  style={{
                    color: "orange",
                  }}
                />
                <p className="text-white">15/02/2000</p>
              </div>
              <div className="flex items-center justify-around gap-3">
                <FaMapMarkerAlt
                  style={{
                    color: "orange",
                  }}
                />
                <p className="text-white">No.104/25, Medemulla , Minuwangoda</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
