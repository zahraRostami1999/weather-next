import React from 'react';
import { useState, useEffect } from "react";

function MainBox() {
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
        <div className='w-2/5 flex justify-center items-center p-5 rounded-lg h-1/3 bg-[rgba(19,19,19,0.5)] text-white'>
            <div className='h-1/2'>
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
            </div>

            {weather && weather.list && (
                <div className="mt-4">
                    <h2 className="font-bold text-lg">
                        Weather in {weather.city.name}, {weather.city.country}
                    </h2>
                    <p>{weather.list[0].main.temp}°C, {weather.list[0].weather[0].description}</p>
                </div>
            )}
        </div>
    )
}

export default MainBox;
