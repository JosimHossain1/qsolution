import Image from "next/image";
import heroImage from "@/assets/home/about.png";
import Button from "../shared/Button";
import Link from "next/link";
const HeroArea = () => {
  return (
    <div className=" mt-16 lg:mt-6 md:px-24 bg-[#BBE8EB] py-10 flex justify-between items-center">
      {/* Left Side */}
      <div className="leftSide w-1/2">
        <h1 className="text-6xl font-bold">
          স্মার্ট <span className="text-primary">এডুকেশন</span> সিস্টেম
        </h1>
        <p className="text-xl my-4 pr-28 text-gray-600 bangla">
          স্মার্ট একটি প্লাটফর্মে পড়াশোনা করো স্মার্ট ভাবে। লাগবে না কোন বই,
          নিতে হবে না খাতায় নোট, খুজতে হবে না বোর্ড প্রশ্ন, সব কিছু পেয়ে যাবে এক
          সাথে।{" "}
        </p>
        {/* Button */}
        <div className="space-x-4 mt-10">
          <Link href={"/old-questions"}>
            <Button
              text={"সকল বোর্ড প্রশ্ন"}
              design={"text-2xl py-3 px-6 bg-blue-950 "}
            />
          </Link>
          <Link href={"/books"}>
            <Button
              text={"সকল বই"}
              design={"text-2xl py-3 px-6 bg-blue-950 "}
            />
          </Link>
        </div>
        <div></div>
      </div>
      {/* Image */}
      <div className="rightSide">
        <Image src={heroImage} alt="Hero Banner" />
      </div>
    </div>
  );
};

export default HeroArea;
