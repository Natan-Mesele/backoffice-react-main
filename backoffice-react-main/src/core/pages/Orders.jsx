import React, { useState, useRef, useEffect } from "react";
import {
  FaRocket,
  FaUtensils,
  FaArrowUp,
  FaSearch,
  FaChevronDown,
  FaStore,
  FaMoneyBillWave,
  FaCar,
} from "react-icons/fa";

const tableData = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    phone: "123-456-7890",
    city: "New York",
    country: "USA",
    status: "Active",
    role: "Admin",
  },
];

function Orders() {
  const [storeOpen, setStoreOpen] = useState(false);
  const [paymentOpen, setPaymentOpen] = useState(false);
  const [statusOpen, setStatusOpen] = useState(false);
  const storeRef = useRef(null);
  const paymentRef = useRef(null);
  const statusRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (storeRef.current && !storeRef.current.contains(e.target)) {
        setStoreOpen(false);
      }
      if (paymentRef.current && !paymentRef.current.contains(e.target)) {
        setPaymentOpen(false);
      }
      if (statusRef.current && !statusRef.current.contains(e.target)) {
        setStatusOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="p-6 w-full max-w-[100vw] bg-gray-200 dark:bg-gray-900 min-h-screen">
      {/* Header with white background */}
      <div className="flex justify-between flex-row items-center mb-6 bg-white dark:bg-gray-800 p-4 sm:p-6 shadow rounded-lg w-full">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              Food orders
            </h1>
            <FaRocket className="text-primary text-lg sm:text-xl" />
          </div>
          <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mt-1">
            Order Monitoring and History
          </span>
        </div>
        <div className="flex items-center space-x-4 cursor-pointer border border-gray-300 dark:border-gray-600 rounded-md p-2">
          <img
            src="https://www.app.menutigr.com/static/media/copy.f4a907cfacfdd8f91d823668cd6856bb.svg"
            alt="Copy Icon"
            className="w-6 h-6"
          />
          <img
            src="https://www.app.menutigr.com/static/media/qr.d9e8c248e7e8438effce3b671c66f607.svg"
            alt="QR Icon"
            className="w-6 h-6"
          />
          <button
            className="bg-primary text-white px-5 py-2 rounded-md flex items-center hover:bg-teal-700 transition-colors duration-200"
            onClick={() => alert("Open App clicked!")}
          >
            <FaUtensils className="mr-2" />
            Open App
          </button>
        </div>
      </div>

      {/* Table section with white background */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        {/* Full-width filter row */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 mb-4 w-full">
          {/* Invoice input */}
          <div className="relative w-full">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 pointer-events-none" />
            <input
              type="text"
              placeholder="Invoice ID"
              className="pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md w-full bg-white dark:bg-gray-800 text-sm text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-0 focus:border-primary"
            />
          </div>

          {/* Store dropdown */}
          <div className="relative w-full" ref={storeRef}>
            <div
              className="flex items-center w-full px-10 py-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-sm text-gray-800 dark:text-gray-100 cursor-pointer"
              onClick={() => setStoreOpen(!storeOpen)}
            >
              <FaStore className="absolute left-3 text-gray-400 dark:text-gray-500" />
              <span className="ml-2">Store</span>
              <FaChevronDown className="absolute right-3 text-gray-400 dark:text-gray-500" />
            </div>
            {storeOpen && (
              <div className="absolute z-10 mt-1 w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg">
                {["All", "Store 1", "Store 2", "Store 3"].map((item) => (
                  <div
                    key={item}
                    className="px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Payment dropdown */}
          <div className="relative w-full" ref={paymentRef}>
            <div
              className="flex items-center w-full px-10 py-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-sm text-gray-800 dark:text-gray-100 cursor-pointer"
              onClick={() => setPaymentOpen(!paymentOpen)}
            >
              <FaMoneyBillWave className="absolute left-3 text-gray-400 dark:text-gray-500" />
              <span className="ml-2">Payment</span>
              <FaChevronDown className="absolute right-3 text-gray-400 dark:text-gray-500" />
            </div>
            {paymentOpen && (
              <div className="absolute z-10 mt-1 w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg">
                {["All", "Paid", "Unpaid", "Partial"].map((item) => (
                  <div
                    key={item}
                    className="px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Status dropdown */}
          <div className="relative w-full" ref={statusRef}>
            <div
              className="flex items-center w-full px-10 py-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-sm text-gray-800 dark:text-gray-100 cursor-pointer"
              onClick={() => setStatusOpen(!statusOpen)}
            >
              <FaCar className="absolute left-3 text-gray-400 dark:text-gray-500" />
              <span className="ml-2">Status</span>
              <FaChevronDown className="absolute right-3 text-gray-400 dark:text-gray-500" />
            </div>
            {statusOpen && (
              <div className="absolute z-10 mt-1 w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg">
                {["All", "Pending", "Completed", "Cancelled"].map((item) => (
                  <div
                    key={item}
                    className="px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Apply button */}
          <button className="w-full bg-primary text-white px-4 py-2 rounded-md text-sm hover:bg-teal-700 transition-colors duration-200 cursor-pointer">
            Apply
          </button>

          {/* Reset button */}
          <button className="w-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-md text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer">
            Reset
          </button>
        </div>

        <div className="w-full overflow-x-auto border border-gray-200 dark:border-gray-700 rounded-lg">
          <table className="w-full min-w-[600px] text-sm">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="p-3 text-left text-gray-600 dark:text-gray-300 border-b border-gray-200 dark:border-gray-600 cursor-pointer">
                  <div className="flex items-center group">
                    <span>Invoice ID</span>
                    <FaArrowUp className="ml-2 text-xs text-gray-400 dark:text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </th>
                <th className="p-3 text-left text-gray-600 dark:text-gray-300 border-b border-gray-200 dark:border-gray-600 cursor-pointer">
                  <div className="flex items-center group">
                    <span>Payment Method</span>
                    <FaArrowUp className="ml-2 text-xs text-gray-400 dark:text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </th>
                <th className="p-3 text-left text-gray-600 dark:text-gray-300 border-b border-gray-200 dark:border-gray-600 cursor-pointer">
                  <div className="flex items-center group">
                    <span>Date</span>
                    <FaArrowUp className="ml-2 text-xs text-gray-400 dark:text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </th>
                <th className="p-3 text-left text-gray-600 dark:text-gray-300 border-b border-gray-200 dark:border-gray-600 cursor-pointer">
                  <div className="flex items-center group">
                    <span>Time</span>
                    <FaArrowUp className="ml-2 text-xs text-gray-400 dark:text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </th>
                <th className="p-3 text-left text-gray-600 dark:text-gray-300 border-b border-gray-200 dark:border-gray-600 cursor-pointer">
                  <div className="flex items-center group">
                    <span>Table</span>
                    <FaArrowUp className="ml-2 text-xs text-gray-400 dark:text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </th>
                <th className="p-3 text-left text-gray-600 dark:text-gray-300 border-b border-gray-200 dark:border-gray-600 cursor-pointer">
                  <div className="flex items-center group">
                    <span>Paid Status</span>
                    <FaArrowUp className="ml-2 text-xs text-gray-400 dark:text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </th>
                <th className="p-3 text-left text-gray-600 dark:text-gray-300 border-b border-gray-200 dark:border-gray-600 cursor-pointer">
                  <div className="flex items-center group">
                    <span>Order Status</span>
                    <FaArrowUp className="ml-2 text-xs text-gray-400 dark:text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.length > 0 ? (
                tableData.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-gray-50 dark:hover:bg-gray-700 even:bg-gray-50 dark:even:bg-gray-700"
                  >
                    <td className="p-3 text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-600">
                      {item.id}
                    </td>
                    <td className="p-3 text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-600">
                      {item.name}
                    </td>
                    <td className="p-3 text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-600">
                      {item.email}
                    </td>
                    <td className="p-3 text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-600">
                      {item.phone}
                    </td>
                    <td className="p-3 text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-600">
                      {item.city}
                    </td>
                    <td className="p-3 text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-600">
                      {item.country}
                    </td>
                    <td className="p-3 text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-600">
                      {item.status}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="py-10 text-center">
                    <img
                      src="https://www.app.menutigr.com/static/media/emptyIcon.e5d5b5150b5e6208ac7a2f4dfbdf36a1.svg"
                      alt="No Records"
                      className="mx-auto w-24 sm:w-28 mb-4"
                    />
                    <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400">
                      No records available
                    </p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Orders;
