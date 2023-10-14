import Image from "next/image";
import heroImage from "@/assets/home/about.png";
import Btn from "../shared/Button";
import { Button, Space } from "antd";
import Link from "next/link";
const HeroArea = () => {
  return (
    <div className="h-screen mt-20 md:mt-6 md:px-24 bg-[#BBE8EB] py-10 md:flex  md:justify-between items-center">
      {/* Left Side */}
      <div className="leftSide w-full text-center">
        <h1 className="text-4xl lg:text-6xl font-bold">
          স্মার্ট <span className="text-primary">এডুকেশন</span> সিস্টেম
        </h1>
        <p className="text-xl my-4 px-12 md:pr-28 text-gray-600 bangla text-center">
          স্মার্ট একটি প্লাটফর্মে পড়াশোনা করো স্মার্ট ভাবে। লাগবে না কোন বই,
          নিতে হবে না খাতায় নোট, খুজতে হবে না বোর্ড প্রশ্ন, সব কিছু পেয়ে যাবে এক
          সাথে।{" "}
        </p>
        {/* Button */}
        <div className="space-x-4 mt-10 ">
          <Link href={"/old-questions"}>
            <Btn
              text={"সকল বোর্ড প্রশ্ন"}
              design={
                "text-xl md:text-2xl py-2 md:py-3 px-3 md:px-6 bg-blue-950 text-white"
              }
            />
          </Link>
          <Button type="primary">Primary Button</Button>
          <Link href={"/books"}>
            <Btn
              text={"সকল বই"}
              design={
                "text-xl md:text-2xl py-2 md:py-3 px-3 md:px-6 bg-blue-950 bg-transparent border border-blue-950 text-blue-950 "
              }
            />
          </Link>
        </div>
        <div></div>
      </div>
      {/* Image */}
      <div className="rightSide">
        <Image
          src={heroImage}
          alt="Hero Banner"
          className="w-[70%] md:w-[100%] h-auto mx-auto"
        />
      </div>
    </div>
  );
};

export default HeroArea;
