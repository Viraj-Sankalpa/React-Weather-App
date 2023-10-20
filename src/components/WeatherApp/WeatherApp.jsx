import React, { useState } from 'react';
import clear from '../Assets/clear.png';
import cloud from '../Assets/cloud.png';
import clouds from '../Assets/clouds.png';
import drizzle from '../Assets/drizzle.png';
import humidity from '../Assets/humidity.png';
import mist from '../Assets/mist.png';
import rain from '../Assets/rain.png';
import search_icon from '../Assets/search.png';
import snow from '../Assets/snow.png';
import thunderstorm from '../Assets/storm.png';
import wind from '../Assets/wind.png';
import './WeatherApp.css';

function WeatherApp() {

    let api_key = 'ca2f2c352e48ff98e0f6830f88658458';

    const [Wicon, setWicon] = useState();

    const search = async() =>{
        const element = document.getElementsByClassName('city-input');
        if(element[0].value===""){
            return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=metric&appid=${api_key}`;

        let response = await fetch(url);
        let data = await response.json();
        const humidity = document.getElementsByClassName('humidity-percent');
        const wind = document.getElementsByClassName('wind-speed');
        const temperature = document.getElementsByClassName('weather-temp');
        const location = document.getElementsByClassName('weather-location');
        const description = document.getElementsByClassName('weather-description');

        humidity[0].innerHTML = data.main.humidity + '%';
        wind[0].innerHTML = data.wind.speed +'m/s';
        temperature[0].innerHTML = data.main.temp + '°C';
        location[0].innerHTML = data.name + '  -  ' + data.sys.country;
        description[0].innerHTML = data.weather[0].description;


        if (data.weather[0].icon==='01d' || data.weather[0].icon==='01n'){
            setWicon(clear);
        }
        else if(data.weather[0].icon==='02d' || data.weather[0].icon==='02n'){
            setWicon(clouds);
        }
        else if(data.weather[0].icon==='03d' || data.weather[0].icon==='03n'){
            setWicon(cloud);
        }
        else if(data.weather[0].icon==='04d' || data.weather[0].icon==='04n'){
            setWicon(drizzle);
        }
        else if(data.weather[0].icon==='09d' || data.weather[0].icon==='09n'){
            setWicon(rain);
        }
        else if(data.weather[0].icon==='10d' || data.weather[0].icon==='10n'){
            setWicon(rain);
        }
        else if(data.weather[0].icon==='11d' || data.weather[0].icon==='11n'){
            setWicon(thunderstorm);
        }
        else if(data.weather[0].icon==='13d' || data.weather[0].icon==='13n'){
            setWicon(snow);
        }
        else if(data.weather[0].icon==='50d' || data.weather[0].icon==='50n'){
            setWicon(mist);
        }
    }

  return (
    <div className='container'>
        <div className="top-bar">
            <input className='city-input' type='text' placeholder='Search for a city'/>
            <div className="search-icon" onClick={()=>{search()}}>
                <img src={search_icon} alt=''/>
            </div>
        </div>

        <div className="weather-image">
            <img src={`${Wicon}`} alt="clear" />
        </div>
        <div className="weather-description"></div>
        <div className="weather-temp">24°C</div>
        <div className="weather-location">London</div>
        <div className="data-container">
            <div className="element">
                <img src={humidity} alt="" className='icon' />
                <div className="data">
                    <div className="humidity-percent">64%</div>
                    <div className="text">Himidity</div>
                </div>
            </div>

            <div className="element">
                <img src={wind} alt="" className='icon'/>
                <div className="data">
                    <div className="wind-speed">16 Km/h</div>
                    <div className="text">Wind Speed</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WeatherApp