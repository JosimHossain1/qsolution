import Link from "next/link";

const departmentsData = [
  { eSub: "bangla", sub: "বাংলা-১" },
  { eSub: "english", sub: "ইংরেজি-১" },
  { eSub: "math", sub: "ম্যাথমেটিক্স-১" },
  { eSub: "physics", sub: "ফিজিক্স-১" },
  { eSub: "besic-electricity", sub: "বেসিক ইলেক্ট্রিসিটি" },
];

const DepartmentDetailPage = ({ params }: any) => {
  const id = params.id;
  if (isNaN(id)) {
    return <div>Invalid department ID</div>;
  }

  const department = departmentsData[id];

  if (!department) {
    return <div>Department not found</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-white text-3xl border-b-4 mb-4">
        বিষয় নির্বাচন করুন
      </h1>
      <ul className="grid grid-cols-2 md:grid-cols-5 grid-rows-3 mx-auto ">
        {departmentsData.map((department, index) => (
          <Link
            href={`/diploma/${index}/${department.eSub}/${department.eSub}`}
            key={index}
            className="border bg-gray-300 hover:bg-gray-100 p-2 text-2xl rounded text-center cursor-pointer m-6"
          >
            <p>{department.sub}</p>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default DepartmentDetailPage;
