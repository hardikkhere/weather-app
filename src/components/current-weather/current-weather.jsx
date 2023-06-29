import React from "react";
import "./current-weather.css";

const CurrentWeather = ({ data }) => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city"> {data.city} </p>
          <p className="weather-description">{data.weather[0].description} </p>
        </div>
        <img
          className="weather-icon"
          alt="weather"
          src={`icons/${data.weather[0].icon}.png`}
        />
      </div>

      <div className="bottom">
        <p className="temperature"> {Math.round(data.main.temp)}°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details </span>
          </div>

          <div className="parameter-row">
            <span className="parameter-label">Feels like </span>
            <span className="parameter-value">
              {Math.round(data.main.feels_like)}°C
            </span>
          </div>

          <div className="parameter-row">
            <span className="parameter-label">Wind </span>
            <span className="parameter-value">{data.wind.speed} </span>
          </div>

          <div className="parameter-row">
            <span className="parameter-label">Humiduty </span>
            <span className="parameter-value">{data.main.humidity}%</span>
          </div>

          <div className="parameter-row">
            <span className="parameter-label">Pressure </span>
            <span className="parameter-value">{data.main.pressure}hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
