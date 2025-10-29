import React from 'react';
import { useState, useEffect } from 'react';
import WeatherBackground from '@/components/lazy/WeatherBackground';
import Header from '@/components/header/Header';
import MainBox from '@/components/main/MainBox';
import Character from "@/components/character/Character";
import SearchInput from '@/components/main/SearchInput';
import Footer from '@/components/footer/Footer';

function index() {
  const now = new Date();
  const hours = now.getHours();
  const [city, setCity] = useState("");
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [isDay, setIsDay] = useState(true);

  useEffect(() => {
    if (hours >= 17 || hours <= 6) {
      setIsDay(false);
    } else if (hours < 17 || hours > 6){
      setIsDay(true);
    }
  }, [hours])

  const handleCityChange = (newCity) => {
    setCity(newCity);
  }

  return (
    <WeatherBackground condition={weatherInfo?.description || "Clear"} isDay={isDay}>
      <div>
        <Header condition={weatherInfo?.description || "Clear"} />
      </div>
      <div className='h-[250px] lg:mt-3 mt-48'>
        <MainBox city={city}
          onWeatherChange={(info) => setWeatherInfo(info)}
          isDay={isDay} />
      </div>
      <div className='h-[200px] w-full flex justify-end'>
        <Character condition={weatherInfo?.description || "Clear"} isDay={isDay} temp={weatherInfo?.temp} />      </div>
      <div className='flex justify-center lg:mt-0 mt-64'>
        <SearchInput onCityChange={handleCityChange} />
      </div>
      <div>
        <Footer />
      </div>
    </WeatherBackground >
  );
}

export default index;
