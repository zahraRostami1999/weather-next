import React, { useEffect, useState } from 'react';

function ClothBox({ temp, description }) {
  const [suggestionList, setSuggestionList] = useState([]);

  const foodSuggestions = {
    cold: "☕",
    hot: "🍹",
    default: "🥤"
  };

  useEffect(() => {
    if (temp === null || description === null) {
      return;
    }

    const dangerousWeather = ["thunderstorm", "tornado", "heavy intensity rain", "volcanic ash"];
    const isDangerous = dangerousWeather.includes(description.toLowerCase());

    let newSuggestions = [];
    let foodItem = "";

    if (temp <= 0 || isDangerous || temp >= 50) {
      newSuggestions = ["🏡"];
    } else if (temp < 10) {
      newSuggestions = ["🧣", "🧤", "🧥", "🧦", "🥾"];
      foodItem = foodSuggestions.cold;
    } else if (temp >= 10 && temp < 20) {
      newSuggestions = ["🧥", "👖", "👟", "🎒"];
      foodItem = foodSuggestions.default;
    } else if (temp >= 20 && temp < 30) {
      newSuggestions = ["👕", "👖", "👟", "🕶️", "🧢"];
      foodItem = foodSuggestions.hot;
    } else if (temp >= 30 && temp < 40) {
      newSuggestions = ["🩴", "🕶️", "👒", "👛"];
      foodItem = foodSuggestions.hot;
    } else if (temp >= 40 && temp < 50) {
      newSuggestions = ["🩴", "🕶️", "🪭", "👒"];

    }

    if (description.includes("rain") || description.includes("shower")) {
      newSuggestions.push("☔");
    }
    if (description.includes("snow")) {
      newSuggestions.push("🧣");
    }

    if (newSuggestions.length > 0 && newSuggestions[0] !== "🏡") {
      newSuggestions.push(foodItem);
    }

    if (newSuggestions.length > 8) {
      setSuggestionList(newSuggestions.slice(0, 8));
    } else {
      setSuggestionList(newSuggestions);
    }

  }, [temp, description]);


  return (
    <div className='relative text-white rounded-lg p-4 bg-[rgba(19,19,19,0.5)] h-44 mx-10 flex items-center justify-center '>
      {/* <h1 className='font-bold text-xl'>Cloth Items</h1> */}
      <div className='flex justify-between items-center my-10 gap-10 w-full'>
        {suggestionList.map((item, index) => {
          const isLastItem = index === suggestionList.length - 1;

          return (
            <div
              key={index}
              className={`w-full flex justify-center items-center h-10 text-6xl ${isLastItem && 'text-6xl'}`}
              style={{
                filter: isLastItem ? '' : 'none'
              }}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ClothBox;