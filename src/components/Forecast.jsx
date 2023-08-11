import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { forecastWeatherAction } from '../pages/weather/action';

const WeatherForecast = (props) => {
  const { data } = props;
  const list = useSelector((state) => state.weather.list);
  const [show, setShow] = useState(false)
  const [display, setDisplay] = useState('none')
  const dispatch = useDispatch();
  const showfunc = () => {
    setShow(!show)
  }
  useEffect(() => {
    if (show) {
      setDisplay('block')
    }
    else {
      setDisplay('none')
    }
  }, [show, display])

  console.warn(display);

  useEffect(() => {
    dispatch(forecastWeatherAction(data));
  }, [data, dispatch]);

  let nlist = {};
  for (let i = 0; i < list.length; i++) {
    const data = new Date(list[i].dt * 1000).toDateString();
    nlist[data] = list[i];
  }
  const filteredList = Object.values(nlist);

  return (
    <div className="bg-gray-100 w-96 p-4 m-auto mt-3 box-border" id='forecast'>
      <h2 className="text-xl font-bold mb-4 cursor-pointer" onClick={showfunc}>5-Day Forecast</h2>
      <div className="overflow-x-auto" style={{ display: display }} >
        <div className="flex  space-x-4">
          {filteredList.map((data, index) => (
            <div
              key={index}
              className="bg-white p-4 shadow-md rounded-md text-gray-700"
            >
              <p className="text-lg font-semibold mb-2">{new Date(data.dt * 1000).toDateString().slice(0, 10)}</p>
              <p className="text-gray-600 mb-2">{data.weather[0].description}</p>
              <p className="text-blue-600">
                Temperature: {parseInt(data.main.temp - 273)}°C
              </p>
              <div className="flex items-center justify-between mt-4">
                <p className="text-xs text-gray-400">Min Temp: {parseInt(data.main.temp_min - 273)}°C</p>
                <p className="text-xs text-gray-400">Max Temp: {parseInt(data.main.temp_max - 273)}°C</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeatherForecast;
