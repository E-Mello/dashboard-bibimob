"use client";

import { FaExclamationTriangle } from "react-icons/fa";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex items-center justify-center  bg-gradient-to-r h-full">
      <div className="flex flex-col justify-center text-center max-h-full items-center pt-20">
        <FaExclamationTriangle className="text-6xl text-yellow-500 mb-4" />
        <h2 className="text-3xl font-bold text-white mb-2">
          Oops, ocorreu um erro!
        </h2>
        <p className="text-gray-200 mb-4">
          Pedimos desculpas pelo inconveniente. Por favor, tente novamente mais
          tarde.
        </p>
        <button
          className="bg-white hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={reset}
        >
          Tentar novamente
        </button>
      </div>
    </div>
  );
}
