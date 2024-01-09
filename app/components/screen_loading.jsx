import RingLoader from "react-spinners/ClipLoader";

export default function LoadindScreen() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-black">
      <RingLoader color="orange" />
    </div>
  );
}
