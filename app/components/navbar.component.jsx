import Image from "next/image";
import imageOne from "../../public/my_logo/20240109_103944-removebg-preview.png";

export default function Navbar() {
  return (
    <div>
      <Image src={imageOne} />
      <h1>Navbar</h1>
    </div>
  );
}
