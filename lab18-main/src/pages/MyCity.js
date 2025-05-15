import React, { useState, useEffect } from "react";
import { fetchWeather } from "../api/weatherApi";

const MyCity = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetchWeather("Kyiv").then(setWeather);
  }, []);

  return (
    <div>
      <h2>Моє місто — Боярка</h2>
      <p>
        Боярка, місто, яке знаходиться в Київській області. Має дуже цікаву
        історію та активно розвивається.
      </p>
      {weather ? (
        <div>
          <h3>Погода:</h3>
          <p>Температура: {weather.temperature}</p>
          <p>Опис: {weather.description}</p>
          <p>Вітер: {weather.wind}</p>
          <img src={weather.icon} alt="Погода" />
        </div>
      ) : (
        <p>Завантаження погоди...</p>
      )}
    </div>
  );
};

export default MyCity;
