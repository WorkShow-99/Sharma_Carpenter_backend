import React from "react";

export const DashboardHome = () => {
  return (
    <div className="grid grid-cols-3 gap-5">

      <div className="bg-gradient-to-r from-purple-500 to-fuchsia-600 rounded-3xl p-6 text-white">

        <h2 className="text-lg">Total Clients</h2>

        <h1 className="text-5xl font-bold mt-3">
          3,248
        </h1>

      </div>

      <div className="bg-white rounded-3xl p-6 border border-gray-200">

        <h2 className="text-lg text-gray-500">
          Total Orders
        </h2>

        <h1 className="text-5xl font-bold mt-3">
          2,492
        </h1>

      </div>

      <div className="bg-white rounded-3xl p-6 border border-gray-200">

        <h2 className="text-lg text-gray-500">
          Total Revenue
        </h2>

        <h1 className="text-5xl font-bold mt-3">
          5,742
        </h1>

      </div>

    </div>
  );
};

export default DashboardHome;