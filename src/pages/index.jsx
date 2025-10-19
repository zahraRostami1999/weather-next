"use client";
import React, { useState } from "react";
import WeatherBackground from "@/components/lazy/WeatherBackground";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import MainBox from "@/components/main/MainBox";
import Character from "@/components/character/Character";

export default function Home() {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [isDay, setIsDay] = useState(true);

  return (
    <WeatherBackground
      condition={weatherInfo?.description || "Clear"}
      isDay={isDay}
    >
      <div className="fixed top-0 w-full">
        <Header condition={weatherInfo?.description || "Clear"} />
      </div>
      <div className="p-4 flex justify-center mt-14 w-full h-4/5">
        <MainBox onWeatherChange={(info) => setWeatherInfo(info)} onTimeCheck={(flag) => setIsDay(flag)} isDay={isDay} />
      </div>
      <div>
          <Character />
      </div>
      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </WeatherBackground>
  );
}
