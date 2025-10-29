import React, { useState, useEffect } from "react";

function DateAndTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 60000); 
    return () => clearInterval(timer);
  }, []);

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const dayName = days[time.getDay()];
  const day = time.getDate();
  const month = months[time.getMonth()];
  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");

  return (
    <div className="fixed w-1/4 ml-5 bottom-5 px-3 py-3 text-[rgba(19,19,19,0.6)] hover:text-[rgba(19,19,19,0.9)] font-semibold rounded-xl">
      <span className="text-lg">{dayName}, {month} {day}</span>
      <span className="text-2xl mt-1 ml-3">{hours}:{minutes}</span>
    </div>
  );
}

export default DateAndTime;