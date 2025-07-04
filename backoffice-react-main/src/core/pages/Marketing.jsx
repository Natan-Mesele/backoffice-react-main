import React from "react";
import { FaBullhorn } from "react-icons/fa";

function Marketing() {
  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <div className="flex items-center gap-3">
          <FaBullhorn className="text-primary text-3xl" />
          <div>
            <h1 className="text-3xl font-bold">Marketing</h1>
            <p className="text-gray-600 dark:text-gray-300 mt-1">
              Promote your brand and engage your audience
            </p>
          </div>
        </div>
      </div>

      {/* Page content */}
      <div>
        <p>This is the marketing page content.</p>
      </div>
    </div>
  );
}

export default Marketing;
