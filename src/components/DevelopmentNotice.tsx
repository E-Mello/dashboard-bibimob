"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const img =
  "https://zrohxlcjhxpnojvxpcju.supabase.co/storage/v1/object/public/dashboard.images/maintenance.png";

const DevelopmentNotice = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-800">
      <div className="max-w-md p-8 bg-gray-200 rounded shadow-lg">
        <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">
          Under Development
        </h1>
        <p className="text-gray-700 mb-8 text-center">
          This part of the code is currently under development. We apologize for
          the inconvenience.
        </p>
        <div className="flex justify-center mb-8">
          <Image alt="maintenance" src={img} width="1980" height="1080" />
        </div>
        <div className="flex justify-center">
          <Link
            href="/"
            className="inline-block px-6 py-3 rounded-full bg-blue-500 text-white font-bold hover:bg-blue-600"
          >
            Go back to the homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentNotice;
