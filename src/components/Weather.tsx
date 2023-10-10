"use client";

import Image from "next/image";
import React from "react";

interface WeatherData {
  temperature: number;
  weatherCondition: string;
  location: string;
}

interface WeatherProps {
  data: WeatherData;
}

const Weather: React.FC<WeatherProps> = ({ data }) => {
  return (
    <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white rounded-lg p-4 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-3xl font-semibold">{data.location}</h2>
        <div className="flex items-center">
          <Image
            src={`/weather-icons/${data.weatherCondition}.svg`}
            alt={data.weatherCondition}
            className="w-12 h-12 mr-2"
          />
          <p className="text-2xl font-semibold">{data.temperature}&deg;C</p>
        </div>
      </div>
      <p className="text-lg">{data.weatherCondition}</p>
    </div>
  );
};

export default Weather;
