import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWeather, searchWeatherAction } from '../pages/weather/action';
import WeatherForecast from './Forecast';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './weather.css'
export default function WeatherComp() {
  const weather = useSelector((state) => state?.weather);
  const condition = useSelector((state) => state?.weather.weather);
  const [weatherCondition, setWeatherCondition] = useState(null);
  const [weatherConditionBackground, setWeatherConditionBackground] = useState(null);
  const [currentDay, setCurrentDay] = useState('');
  const [searchValue, setSearchValue] = useState('');
  useEffect(() => {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date();
    const dayIndex = date.getDay();
    const day = daysOfWeek[dayIndex];
    setCurrentDay(day);
  }, []);
  const [lat, setLat] = useState();
  const [long, setLong] = useState();
  const dispatch = useDispatch();

  let coords = {
    latitude: lat,
    longitude: long,
  };

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          setLat(latitude);
          setLong(longitude);
        },
        function (error) {
          console.error("Error getting location:", error.message);
        }
      );
    } else {
      console.error("Geolocation is not available in this browser.");
    }
  }, []);

  useEffect(() => {
    if (lat && long) {
      dispatch(getWeather(coords));
    }
  }, [dispatch, lat, long]);

  useEffect(() => {
    if (condition) {

      if (condition[0].main === 'Clouds') {
        setWeatherCondition('https://img.icons8.com/?size=1x&id=4xttFVmp97nX&format=gif');
        setWeatherConditionBackground('https://img.freepik.com/free-vector/sky-background-video-conferencing_23-2148639325.jpg')
      } else if (condition[0].main === 'Haze') {
        setWeatherCondition('https://img.icons8.com/?size=1x&id=bwSCNnqn06bI&format=gif');
        setWeatherConditionBackground('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtBZz0yGYi7dHe5rADRlsV3iR7uAe5cinBxJs2ty3ungQOxssusGwJ4GlAceH7GeSTUpU&usqp=CAU')
      }
      else if (condition[0].main === 'Thunderstorm') {
        setWeatherCondition('https://img.icons8.com/?size=1x&id=NdiAp2ePuk20&format=gif')
        setWeatherConditionBackground('https://img.freepik.com/premium-photo/raindrops-fall-asphalt-close-up-deterioration-weather-conditions-precipitation-cooling_160152-6455.jpg')
      }
      else if (condition[0].main === 'Rain') {
        setWeatherCondition('https://img.icons8.com/?size=1x&id=uZEKm2OB54d1&format=gif')
        setWeatherConditionBackground('https://img.freepik.com/premium-photo/raindrops-fall-asphalt-close-up-deterioration-weather-conditions-precipitation-cooling_160152-6455.jpg')
      }
      else if (condition[0].main === 'Sunny') {
        setWeatherCondition('https://img.icons8.com/?size=1x&id=6Z2mGj6qDVv4&format=gif')
        setWeatherConditionBackground('https://media.istockphoto.com/id/947314334/photo/blue-sky-with-bright-sun.jpg?s=612x612&w=0&k=20&c=XUlLAWDXBLYdTGIl6g_qHQ9IBBw4fBvkVuvL2dmVXQw=')
      }
      else if (condition[0].main === 'Mist') {
        setWeatherCondition('https://img.icons8.com/?size=1x&id=EXzNOoFd761m&format=png')
        setWeatherConditionBackground('data:image/jpeg;base64,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')
      }
      else {
        setWeatherConditionBackground('https://i.redd.it/ihfnlpbze7o01.jpg')
      }
    }
  }, [condition]);


  useEffect(() => {
    if (weather.cod === '404') {
      toast.error(weather.message, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });

    }
  }, [weather])


  if (!weather || !condition) {
    return <div className="flex flex-col items-center justify-center h-screen">
      <div className="border-t-4 border-blue-500 border-solid rounded-full animate-spin h-12 w-12"></div>
      <h2>please wait</h2>
    </div>;
  }
  return (
    <div
      className="bg-gradient-to-br  from-blue-500 to-purple-600 min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${weatherConditionBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >  <div className="bg-gradient-to-r from-blue-300 to-blue-100 p-6 rounded-lg shadow-lg p-18 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
        <h1 className="text-4xl font-semibold mb-6 text-center text-blue-600">Weathernaut</h1>
        <div className="flex items-center justify-center mb-6" id='responsiveInput' >
          <input
            type="text"
            placeholder="Enter location"
            className="border rounded-l p-4 w-64 focus:outline-none text-gray-600"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button onClick={() => {
            console.warn('Input Value:', searchValue)
            dispatch(searchWeatherAction(searchValue))
            setSearchValue('')
          }} id='button' className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-r shadow-lg ml-2">
            Search
          </button>
        </div>
        <><div className="text-center">
          <h2 className="text-3xl font-semibold mb-2">{weather.name}</h2>
          <div className="flex items-center justify-center mb-4">
            <img src={weatherCondition} alt="Weather Icon" className="w-16 h-16 bg-transparent border rounded-xl" />
            <p className="text-5xl font-bold ml-2">{parseInt(weather.main.temp)}<sup>o</sup></p>
          </div>
          {condition && <p className="text-gray-600 text-lg">{condition[0].main}</p>}
          {condition && <p className="text-gray-600 text-lg font-bold">Feels like {parseInt(weather.main.feels_like)}</p>}
          {weather && <WeatherForecast data={weather.coord} />}
        </div>
          <div className="mt-6">
            {condition && <p className="text-red-700 text-lg text-center font-mono font-extrabold"> {weather.weather[0].description.toUpperCase()}</p>}
            <ul>
              <li className="flex items-center justify-between p-4 border-b border-gray-300" id='li1'>
                <span className="text-lg font-semibold">{currentDay}</span>
                <div className="flex flex-col items-center">
                  <span className="text-lg font-bold ml-2">Pressure</span>
                  <span className="text-lg text-gray-500 ml-2">{weather.main.pressure} hPa</span>
                </div>
              </li>
              <li className="flex items-center justify-between p-4 border-b border-gray-300" id='li2'>
                <span className="text-lg font-semibold">Wind Speed</span>
                <span className="text-lg text-gray-500 ml-2">{weather.wind.speed} km/h</span>
              </li>
              <li className="flex items-center justify-between p-4 border-b border-gray-300" id='li3'>
                <span className="text-lg font-semibold">Humidity</span>
                <span className="text-lg text-gray-500 ml-2">{weather.main.humidity}%</span>
              </li>
              <li className="flex items-center justify-between p-4 border-b border-gray-300" id='li4'>
                <span className="text-lg font-semibold">Visibility</span>
                <span className="text-lg text-gray-500 ml-2">{weather.visibility / 1000} km</span>
              </li>
              <li className="flex items-center justify-between p-4 border-b border-gray-300" id='li5'>
                <span className="text-lg font-semibold">Sunrise</span>
                <span className="text-lg text-gray-500 ml-2">{new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}</span>
              </li>
              <li className="flex items-center justify-between p-4 border-b border-gray-300" id='li6'>
                <span className="text-lg font-semibold">Sunset</span>
                <span className="text-lg text-gray-500 ml-2">{new Date(weather.sys.sunset * 1000).toLocaleTimeString()}</span>
              </li>
            </ul>
          </div>
        </>
      </div>
    </div>
  );
}
