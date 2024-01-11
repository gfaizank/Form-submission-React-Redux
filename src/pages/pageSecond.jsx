import React from "react";
import { connect } from "react-redux";

const PageSecond = ({ tableData }) => {
  return (
    <div className="grid lg:grid-cols-1 gap-5 mt-6 mb-4 p-4 rounded-lg bg-white">
      <h2 className="flex items-center mt-2 mr-10 ml-6 text-2xl font-bold text-[#186ace]">
        Table Data in Page Second
      </h2>
      <div className="relative shadow-md sm:rounded-lg mt-4">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Phone Number
              </th>
              <th scope="col" className="px-6 py-3">
                Country
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {row.name}
                </td>
                <td className="px-6 py-4">{row.email}</td>
                <td className="px-6 py-4">{row.phoneNumber}</td>
                <td className="px-6 py-4">{row.country}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tableData: state.tableData,
});

export default connect(mapStateToProps)(PageSecond);
