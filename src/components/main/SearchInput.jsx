import React, { useState, useEffect } from 'react';
import { FaSearch, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { searchCity } from '@/services/cities';

function SearchInput({ onCityChange }) {
  const [city, setCity] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (city === "") {
      setSuggestions([]);
      setSelectedCity(null);
      return;
    }

    if (city === selectedCity) {
      setSuggestions([]);
      return;
    }

    if (city.length < 1) {
      setSuggestions([]);
      return;
    }

    let mounted = true;
    const timer = setTimeout(async () => {
      try {
        const results = await searchCity(city);
        if (!mounted) return;
        setSuggestions(results && results.length > 0 ? results.slice(0, 50) : []);
      } catch (err) {
        console.error(err);
        if (mounted) setSuggestions([]);
      }
    }, 500);
    return () => {
      mounted = false;
      clearTimeout(timer);
    };
  }, [city, selectedCity]);

  const handleSelect = (name) => {
    setCity(name);
    setSelectedCity(name);
    setSuggestions([]);
    onCityChange(name);
  };

  return (
    <>
      <div
        className={`h-12 lg:w-1/2 w-11/12 
          relative pl-6 pr-2 flex justify-between items-center
          border-2 rounded-3xl
          transition-all duration-500 ease-in-out
          ${isFocused ? 'border-yellow-400 shadow-[0_0_10px_rgba(255,255,0,0.4)]' : 'border-white'}
          bg-transparent`}
      >
        <input
          type="text"
          placeholder="city name..."
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
            setSelectedCity(null);
          }}
          className="text-xl w-full focus:outline-none bg-transparent text-white placeholder:text-white"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSelect(city);
          }}
        />

        <button
          onClick={() => handleSelect(city)}
          className={`ml-2 p-2 text-white text-xl transition-all duration-500 ease-in-out 
          ${city ? 'rotate-180 text-yellow-400' : 'rotate-0'}
          ${isFocused ? "text-yellow-400 placeholder:text-white" : "text-white"}
          `}

        >
          {city ? <FaArrowLeft /> : <FaSearch />}
        </button>
      </div>

      {suggestions && suggestions.length > 0 && (
        <div className="absolute lg:bottom-[80px] bottom-0 lg:left-96 left-0 lg:w-[600px] w-[100px] mt-3 bg-[rgba(165,152,77,0.1)] text-stone-100 rounded-3xl shadow-lg max-h-52 overflow-hidden z-10">
          <div className="overflow-y-auto max-h-60 scrollbar-thin scrollbar-thumb-yellow-300 scrollbar-track-transparent">
            {suggestions.map((sug, index) => (
              <div
                key={sug.id || index}
                className="px-4 py-2 hover:bg-yellow-100 hover:text-stone-900 cursor-pointer transition-colors duration-200"
                onClick={() => handleSelect(sug.name)}
              >
                {sug.name}, {sug.country}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default SearchInput;
