import DQuetion from "@/components/diploma/DQuetion";

const departmentsData = [
  { eSub: "bangla", sub: "বাংলা-১" },
  { eSub: "english", sub: "ইংরেজি-১" },
  { eSub: "math", sub: "ম্যাথমেটিক্স-১" },
  { eSub: "physics", sub: "ফিজিক্স-১" },
  { eSub: "besic-electricity", sub: "বেসিক ইলেক্ট্রিসিটি" },
];

const DepartmentDetailPage = ({ params }: any) => {
  return (
    <div className="flex flex-col items-center justify-center  text-white">
      <DQuetion />
    </div>
  );
};

export default DepartmentDetailPage;
