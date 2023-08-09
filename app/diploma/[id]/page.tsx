import Link from "next/link";

const departmentsData = [
  // {
  //   eYear: "2015",
  //   year: "২০১৫",
  // },
  // { eYear: "2016", year: "২০১৬" },
  // { eYear: "2017", year: "২০১৭" },
  // { eYear: "2018", year: "২০১৮" },
  { eYear: "2019", year: "২০১৯" },
  { eYear: "2020", year: "২০২০" },
  { eYear: "2021", year: "২০২১" },
  { eYear: "2022", year: "২০২২" },
  { eYear: "2023", year: "২০২৩" },
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
      <h1 className="text-white text-3xl border-b-4 mb-4">সাল নির্বাচন করুন</h1>
      <ul className="grid grid-cols-3 md:grid-cols-6 grid-rows-3 mx-auto ">
        {departmentsData.map((department, index) => (
          <Link
            href={`/diploma/${index}/${department.eYear}`}
            key={index}
            className="border bg-gray-300 hover:bg-gray-100 p-2 text-2xl rounded text-center cursor-pointer m-6"
          >
            <p>{department.year}</p>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default DepartmentDetailPage;
