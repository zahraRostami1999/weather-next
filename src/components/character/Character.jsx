import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';


function Character({ condition, isDay, temp }) {
    let animationUrl = "/animations/walking.json";
    console.log(condition);

    if (condition) {
        const lowerCondition = condition.toLowerCase();
        if (temp >= 30 && temp <= 60 && isDay) {
            animationUrl = "/animations/hot.json";
        }
        if (lowerCondition.includes("rain")) {
            animationUrl = "/animations/Rain.json"
        }
        if (lowerCondition.includes("cloud") || lowerCondition.includes("clear") && temp < 30 && temp >= 10) {
            animationUrl = "/animations/walking.json";
        }
        if (lowerCondition.includes("snow")) {
            animationUrl = "/animations/snow.json";
        }
        if (lowerCondition.includes("thunder")) {
            animationUrl = "/animations/danger.json";
        }
    }


    return (
        <>
            <div className='w-1/5 fixed bottom-0'>
                <div style={{ width: '300px', height: '300px', margin: 'auto' }}>
                    <Player
                        autoplay
                        loop
                        src={animationUrl}
                        style={{ height: '100%', width: '100%' }}
                    />
                </div>
            </div>
        </>

    )
}

export default Character;
