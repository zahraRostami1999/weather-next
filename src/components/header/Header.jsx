import React from 'react'

function Header({ isDay }) {
  return (
    <div className='font-bold text-right px-10 py-5 text-red-950 bg'>
      <span className='text-3xl absolute top-10 left-6'>☁️</span>
      {isDay && (
        <>
          <span className='text-3xl absolute top-10 right-22'>☁️</span>
          <span className='text-5xl'>☀️</span>
        </>
      )}
      {
        !isDay && (
          <>
            <span className='text-sm absolute right-24'>⭐</span>
            <span className='text-xs absolute right-28 top-9'>⭐</span>
            <span className='text-5xl'>🌙</span>
          </>
        )
      }
      <span className='text-3xl absolute top-12 left-20'>☁️</span>
      <span className='text-3xl absolute top-5 left-28'>☁️</span>

    </div>
  )
}

export default Header
