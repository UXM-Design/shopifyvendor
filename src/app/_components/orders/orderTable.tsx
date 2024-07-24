import React from "react";
import Link from "next/link";

const OrderTable = () => {
  return (
    <>
      <section className="w-full h-auto flex justify-center flex-col items-center">
        <div className="w-full rounded-lg border border-gray-200">
          <div className="overflow-x-auto rounded-t-lg">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
              <thead className="ltr:text-left rtl:text-right">
                <tr>
                  <th className="px-4 py-2">
                    <label htmlFor="SelectAll" className="sr-only">
                      Select All
                    </label>

                    <input
                      type="checkbox"
                      id="SelectAll"
                      className="size-5 rounded border-gray-300"
                    />
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Date of Order
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Order Number
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Order item
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Amount
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200  ">
                <tr>
                  <td className="px-4 py-2 flex justify-center items-center ">
                    <label className="sr-only" htmlFor="Row1">
                      Row 1
                    </label>

                    <input
                      className="size-5 rounded border-gray-300"
                      type="checkbox"
                      id="Row1"
                    />
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                    24/05/2024
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                    IUK98761878UU
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                    blue T-shirt 2xl Mens
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                    ₹ 399.00
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-center">
                    <Link
                      href="#"
                      className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                    >
                      View
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 flex justify-center items-center ">
                    <label className="sr-only" htmlFor="Row1">
                      Row 1
                    </label>

                    <input
                      className="size-5 rounded border-gray-300"
                      type="checkbox"
                      id="Row1"
                    />
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                    24/05/2024
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                    IUK98761878UU
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                    blue T-shirt 2xl Mens
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                    ₹ 399.00
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-center">
                    <Link
                      href="#"
                      className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                    >
                      View
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 flex justify-center items-center ">
                    <label className="sr-only" htmlFor="Row1">
                      Row 1
                    </label>

                    <input
                      className="size-5 rounded border-gray-300"
                      type="checkbox"
                      id="Row1"
                    />
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                    24/05/2024
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                    IUK98761878UU
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                    blue T-shirt 2xl Mens
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                    ₹ 399.00
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-center">
                    <Link
                      href="#"
                      className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                    >
                      View
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 flex justify-center items-center ">
                    <label className="sr-only" htmlFor="Row1">
                      Row 1
                    </label>

                    <input
                      className="size-5 rounded border-gray-300"
                      type="checkbox"
                      id="Row1"
                    />
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                    24/05/2024
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                    IUK98761878UU
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                    blue T-shirt 2xl Mens
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                    ₹ 399.00
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-center">
                    <Link
                      href="#"
                      className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="rounded-b-lg border-t border-gray-200 px-4 py-2">
            <ol className="flex justify-end gap-1 text-xs font-medium">
              <li>
                <a
                  href="#"
                  className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
                >
                  <span className="sr-only">Prev Page</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                >
                  1
                </a>
              </li>

              <li className="block size-8 rounded border-blue-600 bg-blue-600 text-center leading-8 text-white">
                2
              </li>

              <li>
                <a
                  href="#"
                  className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                >
                  3
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                >
                  4
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
                >
                  <span className="sr-only">Next Page</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            </ol>
          </div>
        </div>
      </section>
    </>
  );
};

export default OrderTable;
