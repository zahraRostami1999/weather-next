import React from 'react';


function Header({ condition }) {
  const now = new Date();
  const hours = now.getHours();
  const clearSky = condition.toLowerCase().includes('clear');  

  return (
    <div className='font-bold text-right lg:px-10 sm:px-5 px-2 py-2'>
      <span className='text-3xl absolute top-5 left-6'>☁️</span>

      {(hours >= 6 && hours < 17) && (
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
        (hours <= 5 || hours >= 17) && (
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
              <span className='text-4xl absolute top-6 right-10'>☁️</span>
            }
          </>
        )
      }
      <span className='text-2xl absolute top-8 left-20'>☁️</span>
      <span className='text-3xl absolute top-1 left-28'>☁️</span>

    </div>
  )
}

export default Header;
