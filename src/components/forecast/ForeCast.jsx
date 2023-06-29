import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./forecast.css";

const WEEK_DAYS = [
  "Monday",
  "Tueday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const ForeCast = ({ data }) => {
  const dayInaWeek = new Date().getDay();

  const forecastDays = WEEK_DAYS.slice(dayInaWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInaWeek)
  );
  console.log(forecastDays);

  return (
    <>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img
                    className="icon-small"
                    alt="weather"
                    src={`icons/${item.weather[0].icon}.png`}
                  />
                  <label className="day">{forecastDays[idx]} </label>
                  <label className="description">
                    {item.weather[0].description}{" "}
                  </label>

                  <label className="min-max">
                    {Math.round(item.main.temp_min)}°C /{" "}
                    {Math.round(item.main.temp_max)}°C{" "}
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>

            <AccordionItemPanel>
              <div className="daily-details-grid">
                <div className="daily-details-grid-item">
                  <label className="">Pressure</label>
                  <label className="">{item.main.pressure}hPa</label>
                </div>

                <div className="daily-details-grid-item">
                  <label className="">Humidity</label>
                  <label className="">{item.main.humidity}%</label>
                </div>

                <div className="daily-details-grid-item">
                  <label className="">Coulds</label>
                  <label className="">{item.clouds.all}%</label>
                </div>

                <div className="daily-details-grid-item">
                  <label className="">Wind Speed:</label>
                  <label className="">{item.wind.speed} m/s</label>
                </div>

                <div className="daily-details-grid-item">
                  <label className="">Sea level:</label>
                  <label className="">{item.main.sea_level} m</label>
                </div>

                <div className="daily-details-grid-item">
                  <label className="">Feels like:</label>
                  <label className="">{item.main.feels_like} °C</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default ForeCast;
