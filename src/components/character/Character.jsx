import React, { useState, useEffect } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

function Character({ condition, isDay, temp }) {
  const [animationUrl, setAnimationUrl] = useState("/animations/walking.json");

  useEffect(() => {
    const lowerCondition = (condition || "").toLowerCase();
    const t = Number(temp);

    if (!isDay) {
      setAnimationUrl("/animations/games.json");
      return;
    }

    if (lowerCondition.includes("rain")) {
      setAnimationUrl("/animations/Rain.json");
      return;
    }

    if (lowerCondition.includes("snow")) {
      setAnimationUrl("/animations/snow.json");
      return;
    }

    if (lowerCondition.includes("thunder")) {
      setAnimationUrl("/animations/danger.json");
      return;
    }

    if (!Number.isNaN(t) && t >= 30 && t <= 60) {
      setAnimationUrl("/animations/hot.json");
      return;
    }

    if (lowerCondition.includes("cloud") || lowerCondition.includes("clear")) {
      if (!Number.isNaN(t) && t < 30 && t >= 10) {
        setAnimationUrl("/animations/walking.json");
        return;
      }
    }

    setAnimationUrl("/animations/walking.json");
  }, [condition, isDay, temp]);

  return (
    <div className='w-full flex justify-center items-center'>
      <div className='lg:w-1/5 w-full lg:fixed flex justify-center 
  lg:-bottom-5 lg:right-0 
  bottom-[100px] 
'>
        <div style={{ width: '300px', height: '300px', margin: 'auto' }}>
          <Player
            key={animationUrl}
            autoplay
            loop
            src={animationUrl}
            style={{ height: '100%', width: '100%' }}
          />
        </div>
      </div>
    </div>

  );
}

export default Character;
