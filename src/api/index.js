import { API_URL } from '../config';

export const weatherDataApi=async(coords)=>{
  console.warn(coords);
  const response=await fetch( `${API_URL.base}weather?lat=${coords.latitude}&lon=${coords.longitude}&units=metric&APPID=${API_URL.key}`)
return response.json();
}

export const searchWeatherDataApi=async(query)=>{
  const response=await fetch(`${API_URL.base}weather?q=${query}&units=metric&APPID=${API_URL.key}`)
return response.json();
}

export const forecast=async(weather)=>{
      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${weather.lat}&lon=${weather.lon}&appid=${API_URL.key}`)
    return  response.json()
}