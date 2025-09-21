import { Geist, Geist_Mono } from "next/font/google";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState();
  const API_KEY = process.env.NEXT_PUBLIC_WEATHER_KEY;


  const getWeather = async () => {
    if (!city) return;
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
    );
    const data = await res.json();
    setWeather(data);
  };

  return (
    <>
      <div className="p-4">
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="border p-2 rounded"
        />
        <button onClick={getWeather} className="ml-2 p-2 bg-blue-500 text-white rounded">
          Get Weather
        </button>

        {weather && weather.list && (
          <div className="mt-4">
            <h2 className="font-bold text-lg">
              Weather in {weather.city.name}, {weather.city.country}
            </h2>
            <p>{weather.list[0].main.temp}°C, {weather.list[0].weather[0].description}</p>
          </div>
        )}
      </div>
    </>
  );
}
