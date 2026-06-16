import React from "react";
import { Bell, Search } from "lucide-react";

export const Topbar = () => {
  return (
    <div className="flex items-center justify-between mb-8">

      <div>
        <h1 className="text-5xl font-bold leading-tight text-purple-950">
          Welcome <br /> Back Pritam!
        </h1>
      </div>

      <div className="flex items-center gap-4">

        {/* Search */}
        <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-2xl border border-gray-200">

          <Search size={20} className="text-gray-400" />

          <input
            type="text"
            placeholder="Search"
            className="outline-none bg-transparent"
          />
        </div>

        {/* Notification */}
        <button className="w-14 h-14 bg-white rounded-2xl border border-gray-200 flex items-center justify-center">

          <Bell />

        </button>
      </div>
    </div>
  );
};

export default Topbar;