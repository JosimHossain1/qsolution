import Image from "next/image";
import comming from "@/assets/coming-soon.bn.png";
const page = () => {
  return (
    <div className="text-center flex justify-center items-center h-screen ">
      <Image src={comming} alt="Comming soon" />
    </div>
  );
};

export default page;

