import React from 'react';
import { FaSun, FaCloud, FaCloudRain, FaSnowflake, FaBolt, FaSmog, FaTornado } from 'react-icons/fa';

function Card({ day, degree, description }) {
    const weatherIcons = {
        'clear sky': { icon: FaSun, color: "text-yellow-400" },
        'few clouds': { icon: FaCloud, color: "text-gray-100" },
        'scattered clouds': { icon: FaCloud, color: "text-gray-300" },
        'broken clouds': { icon: FaCloud, color: "text-gray-500" },
        'overcast clouds': { icon: FaCloud, color: "text-gray-500" },
        'light rain': { icon: FaCloudRain, color: "text-blue-300" },
        'moderate rain': { icon: FaCloudRain, color: "text-blue-400" },
        'shower rain': { icon: FaCloudRain, color: "text-blue-500" },
        'heavy intensity rain': { icon: FaCloudRain, color: "text-blue-700" },
        'light snow': { icon: FaSnowflake, color: "text-cyan-300" },
        'snow': { icon: FaSnowflake, color: "text-cyan-400" },
        'thunderstorm': { icon: FaBolt, color: "text-yellow-600" },
        'mist': { icon: FaSmog, color: "text-gray-400" },
        'fog': { icon: FaSmog, color: "text-gray-400" },
        'smoke': { icon: FaSmog, color: "text-gray-500" },
        'haze': { icon: FaSmog, color: "text-gray-500" },
        'dust': { icon: FaSmog, color: "text-orange-400" },
        'sand': { icon: FaSmog, color: "text-yellow-500" },
        'volcanic ash': { icon: FaSmog, color: "text-gray-700" },
        'squalls': { icon: FaTornado, color: "text-gray-700" },
        'tornado': { icon: FaTornado, color: "text-red-600" },
    };

    const selected = weatherIcons[description] || { icon: FaSun, color: "text-yellow-400" };
    const IconComponent = selected.icon;
    const iconColor = selected.color;

    return (
        <div className='w-full flex justify-center flex-col pb-3 rounded-lg border border-white'>
            <p className='bg-[rgba(19,19,19,0.5)] py-1 text-lg font-semibold text-white border-b border-white mb-2 flex items-center justify-center'>{day}</p>
            <p className='text-center text-lg font-mono font-bold'>
                {Math.round(degree)} <span className='text-sm font-normal'>°C</span>
            </p>
            <div className={`text-5xl ${iconColor} w-full flex justify-center mt-3`}>
                <IconComponent />
            </div>
        </div>
    );
}

export default Card;
