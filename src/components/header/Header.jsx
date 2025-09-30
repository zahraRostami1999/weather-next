import React from 'react';

function Header({ condition }) {
  const now = new Date();
  const hours = now.getHours();
  const clearSky = condition.toLowerCase().includes('clear');

  return (
    <div className='font-bold text-right px-10 py-5 text-red-950 bg'>
      <span className='text-3xl absolute top-10 left-6'>☁️</span>

      {(hours >= 6 && hours < 18) && (
        <>
          <span className='text-3xl absolute top-10 right-22'>☁️</span>
          {clearSky &&
            <span className='text-5xl'>☀️</span>
          }
          {
            !clearSky &&
            <span className='text-4xl absolute top-10 right-10'>☁️</span>
          }
        </>
      )}
      {
        (hours <= 5 && hours >= 18) && (
          <>
            {clearSky &&
              <>
                <span className='text-xs absolute right-24'>⭐</span>
                <span className='text-[10px] absolute right-28 top-9'>⭐</span>
                <span className='text-5xl'>🌙</span>
              </>
            }
            {
              !clearSky &&
              <span className='text-4xl absolute top-10 right-10'>☁️</span>
            }
          </>
        )
      }
      <span className='text-3xl absolute top-12 left-20'>☁️</span>
      <span className='text-3xl absolute top-5 left-28'>☁️</span>

    </div>
  )
}

export default Header;
