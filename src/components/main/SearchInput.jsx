import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { searchCity } from '@/services/cities';

function SearchInput({ onCityChange }) {
  const [city, setCity] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);

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

    if (city.length < 2) {
      setSuggestions([]);
      return;
    }

    let mounted = true;
    const timer = setTimeout(async () => {
      try {
        const results = await searchCity(city);
        if (!mounted) return;
        setSuggestions(results && results.length > 0 ? results.slice(0, 10) : []);
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
      <div className="h-14 w-4/5 relative border-2 rounded-lg flex justify-between px-2">
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
            setSelectedCity(null); 
          }}
          className="text-xl w-full focus:outline-none bg-transparent text-white"
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSelect(city);
          }}
        />
        <button
          onClick={() => handleSelect(city)}
          className="ml-2 p-2 text-white text-xl hover:text-orange-300"
        >
          <FaSearch />
        </button>
      </div>

      {suggestions && suggestions.length > 0 && (
        <div className="absolute top-16 w-[610px] mt-3 bg-white text-stone-900 rounded-lg max-h-60 overflow-y-auto z-10">
          {suggestions.map((sug, index) => (
            <div
              key={sug.id || index}
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleSelect(sug.name)}
            >
              {sug.name}, {sug.country}
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default SearchInput;
