import Image from "next/image";
import Link from "next/link";
import imageOne from "../../public/my_logo/20240109_103944-removebg-preview.png";

export default function Navbar() {
  return (
    <div className="w-[100% h-[10vh] bg-black hidden lg:block ">
      <div className="w-[80%] h-[10vh]  mx-auto text-light bg-black flex items-center justify-center">
        <Link href={"/"}>
          <div className="w-[170px] h-[50px]">
            <Image src={imageOne} className="w-96 pb-1" />
          </div>
        </Link>
      </div>
    </div>
  );
}
