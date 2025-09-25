"use client";
import React, { useState } from "react";
import WeatherBackground from "@/components/lazy/WeatherBackground";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import MainBox from "@/components/main/MainBox";

export default function Home() {
  const [weatherInfo, setWeatherInfo] = useState(null);

  return (
    <WeatherBackground
      condition={weatherInfo?.description || "Clear"}
      isDay={true} 
    >
      <div className="fixed top-0 w-full">
        <Header />
      </div>
      <div className="p-4 flex justify-center mt-20 w-full h-4/5">
        <MainBox onWeatherChange={(info) => setWeatherInfo(info)} />
      </div>
      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </WeatherBackground>
  );
}
