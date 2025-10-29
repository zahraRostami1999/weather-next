import React from 'react';

function Card({ day, degree, description, isDay }) {
    const weatherEmojis = {
        'clear sky': isDay ? '☀️' : '🌙',
        'few clouds': isDay ? '🌤️' : '☁️',
        'scattered clouds': '☁️',
        'broken clouds': '☁️',
        'overcast clouds': '☁️',
        'light rain': '🌧️',
        'moderate rain': '🌧️',
        'shower rain': '🌧️',
        'heavy intensity rain': '🌧️',
        'light snow': '🌨️',
        'snow': '❄️',
        'thunderstorm': '⛈️',
        'mist': '🌫️',
        'fog': '🌫️',
        'smoke': '💨',
        'haze': '🌫️',
        'dust': '💨',
        'sand': '💨',
        'volcanic ash': '🌋',
        'squalls': '🌬️',
        'tornado': '🌪️',
    };

    const selectedEmoji = weatherEmojis[description] || '❓';

    return (
        <div className='w-full flex justify-center flex-col pb-3 rounded-xl border border-white'>
            <p className='bg-[rgba(19,19,19,0.2)]
                py-1 mb-2 
                lg:text-lg text-sm font-semibold rounded-t-xl  text-white border-b border-white 
                flex items-center justify-center'>
                {day}
            </p>
            <p className='text-center text-lg font-mono font-bold'>
                {Math.round(degree)} <span className='text-sm font-normal'>°C</span>
            </p>
            <div className='lg:text-5xl text-4xl w-full flex justify-center mt-3'>
                {selectedEmoji}
            </div>
        </div>
    );
}

export default Card;