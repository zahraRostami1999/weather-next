import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Card from '../card/Card';
import ClothBox from '../cloth/ClothBox';

function MainBox({ onWeatherChange, onTimeCheck, isDay  }) {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [temp, setTemp] = useState(0);
    const [desc, setDesc] = useState("");
    const [time, setTime] = useState("");

    const API_KEY = process.env.NEXT_PUBLIC_WEATHER_KEY;

    const getWeather = async () => {
        if (!city) return;
        try {
            const res = await fetch(
                `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
            );
            const data = await res.json();
            if (data && data.list) {
                setWeather(data);
                setTime(data.list[0].dt_txt);
                const dailyData = getDailyData(data.list);
                if (dailyData.length > 0) {
                    const today = dailyData[0];
                    setTemp(today.displayTemp);
                    setDesc(today.description);
                    onWeatherChange?.({
                        temp: today.displayTemp,
                        description: today.description,
                    });
                }
            }
        } catch (error) {
            console.error("Error fetching weather:", error);
        }
    };

    useEffect(() => {
        const checkIsDayOrNight = (time) => {
            let num = time.split(" ")[1];
            if (num) {
                let hour = num.split(":")[0];
                let numHour = parseInt(hour);
                if (numHour >= 18 || numHour <= 6) {
                    onTimeCheck(false);
                } else {
                    onTimeCheck(true);
                }
            }
        }
        checkIsDayOrNight(time)
    }, [time])

    const getDayOfWeek = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { weekday: 'long' });
    };

    const groupByDate = (list) => {
        const grouped = {};
        list.forEach((item) => {
            const date = item.dt_txt.split(" ")[0];
            const hour = item.dt_txt.split(" ")[1];
            if (!grouped[date]) grouped[date] = [];
            grouped[date].push(item);
        });
        return grouped;
    };


    const findClosestToNow = (items) => {
        const now = new Date();
        let best = items[0];
        let bestDiff = Math.abs(new Date(items[0].dt_txt).getTime() - now.getTime());
        items.forEach((it) => {
            const diff = Math.abs(new Date(it.dt_txt).getTime() - now.getTime());
            if (diff < bestDiff) {
                bestDiff = diff;
                best = it;
            }
        });
        return best;
    };

    const getDailyData = (list) => {
        const grouped = groupByDate(list);
        const dates = Object.keys(grouped).sort((a, b) => new Date(a) - new Date(b));
        const todayStr = new Date().toISOString().split("T")[0];

        return dates.map((date) => {
            const items = grouped[date];
            if (date === todayStr) {
                const chosen = findClosestToNow(items);
                return {
                    date,
                    dt_txt: chosen.dt_txt,
                    displayTemp: Math.round(chosen.main.temp),
                    description: chosen.weather[0].description,
                };
            } else {
                let maxTemp = -Infinity;
                let chosen = items[0];
                items.forEach((it) => {
                    const t = it.main.temp_max ?? it.main.temp;
                    if (t > maxTemp) {
                        maxTemp = t;
                        chosen = it;
                    }
                });
                return {
                    date,
                    dt_txt: chosen.dt_txt,
                    displayTemp: Math.round(maxTemp),
                    description: chosen.weather[0].description,
                };
            }
        });
    };



    return (
        <div className='flex flex-col relative w-full items-center gap-20 h-full'>
            <div
                className={`w-3/5 flex justify-center items-center flex-col p-5 rounded-lg ${weather ? "h-1/2" : "h-1/3"
                    } bg-[rgba(19,19,19,0.5)] text-white transition-all duration-500`}
            >
                <div className="h-14 w-4/5 relative border-2 rounded-lg flex justify-between px-2">
                    <input
                        type="text"
                        placeholder="Enter city name..."
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="text-xl w-full focus:outline-none bg-transparent text-white"
                        onKeyDown={(e) => {
                            if (e.key === "Enter") getWeather();
                        }}
                    />
                    <button
                        onClick={getWeather}
                        className="ml-2 p-2 text-white text-xl hover:text-orange-300"
                    >
                        <FaSearch />
                    </button>
                </div>

                {weather && weather.list && (
                    <>
                        <div className="mt-4 relative">
                            <h2 className="text-xl font-semibold">
                                Weather in <span className="text-red-300">{weather.city.name}</span>,{" "}
                                {weather.city.country} for 3 Days
                            </h2>
                        </div>
                        <div className="relative flex flex-row w-4/5 justify-between gap-10 mt-5">
                            {getDailyData(weather.list).slice(0, 3).map((day, idx) => (
                                <Card
                                    key={day.date}
                                    day={idx === 0 ? "Now" : idx === 1 ? "Tomorrow" : getDayOfWeek(day.dt_txt)}
                                    degree={day.displayTemp}
                                    description={day.description}
                                    isDay={isDay}  
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>
            {/* {
                weather && (
                    <div className='w-full'>
                        <ClothBox temp={temp} description={desc} />
                    </div>
                )
            } */}
        </div>
    );
}

export default MainBox;