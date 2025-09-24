import React from 'react';

function Card({ day, degree, description }) {
    const weatherEmojis = {
        'clear sky': '☀️',
        'few clouds': '🌤️',
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
        <div className='w-full flex justify-center flex-col pb-3 rounded-lg border border-white'>
            <p className='bg-[rgba(19,19,19,0.5)] py-1 text-lg font-semibold text-white border-b border-white mb-2 flex items-center justify-center'>{day}</p>
            <p className='text-center text-lg font-mono font-bold'>
                {Math.round(degree)} <span className='text-sm font-normal'>°C</span>
            </p>
            <div className='text-5xl w-full flex justify-center mt-3'>
                {selectedEmoji}
            </div>
        </div>
    );
}

export default Card;