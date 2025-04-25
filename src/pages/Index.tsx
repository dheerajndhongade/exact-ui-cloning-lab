import React from "react";
import { Link } from "react-router-dom";

const Index: React.FC = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-[rgba(0,8,71,1)]">
        Welcome to the School Management System
      </h1>
      <p className="mt-4 text-gray-600">
        This application provides various modules for managing school
        operations.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link
          to="/fee-receipt"
          className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold text-[rgba(8,34,83,1)]">
            Fee Management
          </h2>
          <p className="mt-2 text-gray-600">
            Manage student fees, generate receipts, and process payments
          </p>
          <div className="mt-4 text-[rgba(3,18,156,1)] font-medium">
            Access Module →
          </div>
        </Link>

        <div className="block p-6 bg-white rounded-lg shadow-md opacity-70">
          <h2 className="text-xl font-semibold text-gray-700">
            Student Records
          </h2>
          <p className="mt-2 text-gray-500">
            Manage student information, attendance, and academic records
          </p>
          <div className="mt-4 text-gray-500 font-medium">Coming Soon</div>
        </div>

        <div className="block p-6 bg-white rounded-lg shadow-md opacity-70">
          <h2 className="text-xl font-semibold text-gray-700">
            Staff Management
          </h2>
          <p className="mt-2 text-gray-500">
            Manage teachers, administrative staff, and other personnel
          </p>
          <div className="mt-4 text-gray-500 font-medium">Coming Soon</div>
        </div>

        <div className="block p-6 bg-white rounded-lg shadow-md opacity-70">
          <h2 className="text-xl font-semibold text-gray-700">
            Academic Calendar
          </h2>
          <p className="mt-2 text-gray-500">
            Manage school events, holidays, and academic schedules
          </p>
          <div className="mt-4 text-gray-500 font-medium">Coming Soon</div>
        </div>
      </div>
    </div>
  );
};

export default Index;
