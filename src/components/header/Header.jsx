import React from 'react';
import dynamic from 'next/dynamic';

const Player = dynamic(
  () => import('@lottiefiles/react-lottie-player').then(mod => mod.Player),
  { ssr: false }
);

function Header({ condition }) {
  const now = new Date();
  const hours = now.getHours();
  const clearSky = condition?.toLowerCase().includes('clear');
  const sunAnimationUrl = "/animations/sun.json";
  const moonAnimatedUrl = "/animations/moon.json";

  return (
    <div className='font-bold text-right lg:px-10 sm:px-5 px-2 py-2 relative lg:mb-12'>
      <span className='text-3xl absolute top-5 left-6'>☁️</span>

      {(hours >= 6 && hours < 17) && (
        <>
          <span className='text-3xl absolute top-10 right-22'>☁️</span>
          {clearSky ? (
            <div className='absolute -top-3 right-0'>
              <div style={{ width: '110px', height: '100px' }}>
                <Player
                  autoplay
                  loop
                  src={sunAnimationUrl}
                  style={{ height: '100%', width: '100%' }}
                />
              </div>
            </div>
          ) : (
            <span className='text-4xl absolute top-10 right-10'>☁️</span>
          )}
        </>
      )}

      {(hours <= 5 || hours >= 17) && (
        <>
          {clearSky ? (
            <>
              <span className='text-xs absolute right-24'>⭐</span>
              <span className='text-[10px] absolute right-28 top-9'>⭐</span>
              <div className='absolute -top-0 right-0'>
                <div style={{ width: '85px', height: '100px' }}>
                  <Player
                    autoplay
                    loop
                    src={moonAnimatedUrl}
                    style={{ height: '100%', width: '100%' }}
                  />
                </div>
              </div>
            </>
          ) : (
            <span className='text-4xl absolute top-6 right-10'>☁️</span>
          )}
        </>
      )}

      <span className='text-2xl absolute top-8 left-20'>☁️</span>
      <span className='text-3xl absolute top-1 left-28'>☁️</span>
    </div>
  );
}

export default Header;
