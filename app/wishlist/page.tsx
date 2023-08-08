import React from "react";
import { HeartIcon } from "@heroicons/react/24/outline";

const Wishlist = () => {
  return (
    <div className="flex justify-center flex-col px-24">
      <div className="text-center mt-10">
        <HeartIcon className="text-white w-10 m-auto" />
        <h1 className="text-white mt-2 text-[18px] leading-tight">
          My Wishlist
        </h1>
      </div>
      <div>
        <div className="rounded mt-10">
          <table className="w-full text-sm text-left text-gray-500 rounded">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Board Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Year
                </th>
                <th scope="col" className="px-6 py-3">
                  Class
                </th>
                <th scope="col" className="px-6 py-3">
                  Group
                </th>
                <th scope="col" className="px-6 py-3">
                  Subject
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  Dhaka
                </th>
                <td className="px-6 py-4">2022</td>
                <td className="px-6 py-4">HSC</td>
                <td className="px-6 py-4">Science</td>
                <td className="px-6 py-4">Physics</td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-red-600 hover:underline"
                  >
                    Remove
                  </a>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  Dhaka
                </th>
                <td className="px-6 py-4">2022</td>
                <td className="px-6 py-4">HSC</td>
                <td className="px-6 py-4">Science</td>
                <td className="px-6 py-4">Physics</td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-red-600 hover:underline"
                  >
                    Remove
                  </a>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  Dhaka
                </th>
                <td className="px-6 py-4">2022</td>
                <td className="px-6 py-4">HSC</td>
                <td className="px-6 py-4">Science</td>
                <td className="px-6 py-4">Physics</td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-red-600 hover:underline"
                  >
                    Remove
                  </a>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  Dhaka
                </th>
                <td className="px-6 py-4">2022</td>
                <td className="px-6 py-4">HSC</td>
                <td className="px-6 py-4">Science</td>
                <td className="px-6 py-4">Physics</td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-red-600 hover:underline"
                  >
                    Remove
                  </a>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  Dhaka
                </th>
                <td className="px-6 py-4">2022</td>
                <td className="px-6 py-4">HSC</td>
                <td className="px-6 py-4">Science</td>
                <td className="px-6 py-4">Physics</td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-red-600 hover:underline"
                  >
                    Remove
                  </a>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  Dhaka
                </th>
                <td className="px-6 py-4">2022</td>
                <td className="px-6 py-4">HSC</td>
                <td className="px-6 py-4">Science</td>
                <td className="px-6 py-4">Physics</td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-red-600 hover:underline"
                  >
                    Remove
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
