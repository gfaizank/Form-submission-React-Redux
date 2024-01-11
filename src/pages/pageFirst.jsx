import React, { useState } from "react";
import { connect } from "react-redux";
import { addRow } from "../Actions/action";
import { Link } from "react-router-dom";

const PageFirst = ({ tableData, addRow }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [country, setCountry] = useState("");

  const handleSubmit = () => {
    if (name && email && number && country) {
      const newRow = {
        name: name,
        email: email,
        phoneNumber: number,
        country: country,
      };

      // Dispatch the addRow action
      addRow(newRow);

      // Clear the input fields
      setName("");
      setEmail("");
      setNumber("");
      setCountry("");
    } else {
      alert("Please fill in all fields before submitting.");
    }
  };

  return (
    <>
      <div className="grid lg:grid-cols-1 gap-5 mt-6 mb-4 p-4 rounded-lg bg-white">
        <h2 className="flex items-center mt-2 mr-10 ml-6 text-2xl font-bold text-[#186ace]">
          Enter the following details
        </h2>
        <div className="flex flex-col">
          <label className="mb-2 text-gray-500 text-sm">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded bg-gray-100 h-12 w-1/4 px-4 shadow-sm"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-2 text-gray-500 text-sm">Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded bg-gray-100 h-12 w-1/4 px-4 shadow-sm"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-2 text-gray-500 text-sm">Phone Number</label>
          <input
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="rounded bg-gray-100 h-12 w-1/4 px-4 shadow-sm"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-2 text-gray-500 text-sm">Country</label>
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="rounded bg-gray-100 h-12 w-1/4 px-4 shadow-sm"
          />
        </div>
        <div className="flex items-center mt-2 mr-10">
          <button
            type="button"
            onClick={handleSubmit}
            className=" ml-4 mr-2 w-1/4 bg-gradient-to-r from-[#13bf92] via-[#48bf9b] to-[#186ace] text-white rounded h-12 hover:bg-[#13bf92]"
          >
            Submit
          </button>
        </div>

        {/* table */}
        <div className="flex flex-col mt-4">
          <div className="relative shadow-md sm:rounded-lg">
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
        <div className="flex items-center mt-4 mr-10">
  <Link
    to="/page-second"
    className="ml-4 mr-2 px-6 py-2 bg-gradient-to-r from-[#13bf92] via-[#48bf9b] to-[#186ace] text-white rounded-full hover:bg-[#13bf92] transition duration-300 ease-in-out"
  >
    Go to Second Page
  </Link>
</div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  tableData: state.tableData,
});

const mapDispatchToProps = (dispatch) => ({
  addRow: (rowData) => dispatch(addRow(rowData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PageFirst);
