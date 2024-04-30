import React, { useState } from "react";
import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/drizzle.png";
import humidity_icon from "../Assets/humidity.png";
import rain_icon from "../Assets/rain.png";
import search_icon from "../Assets/search.png";
import snow_icon from "../Assets/snow.png" ;
import wind_icon from "../Assets/wind.png"; 
import "./weather.css"

function WeatherApp(){
    const [cityName , setCityName] = useState("");
    const[humidity , setHumidity]= useState("");
    const[wind , setWind]= useState("");
    const[temprature,setTemprature]= useState("");
    const[location , setLocation]= useState("");


    let api_key = "ee379ebdd33cbc86137a2894a3a13dcd";
   async function search(){
       let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=Metric&appid=${api_key}`;
       
       let response = await fetch(url);
       let data = await response.json;

       setHumidity = data.main.humidity+"%";
       setWind = data.wind.speed+" km/hr";
       setTemprature = data.main.temp+"°C";
       setLocation = data.name;
       }



    return(<>
        <div className="container">
            <div className="top-bar">
                <input type="text" className="cityInput" placeholder="Search" onChange={(e)=>{ setCityName(e.target.value)}}/>
                <div className="search-icon" onClick={()=>search()}>
                    <img src={search_icon} alt=""/>
                </div>
            </div>
            <div className="weather-image">
                <img src={cloud_icon} alt=""/>
            </div>
           <div className="weather-temp" >{temprature}</div>
           <div className="weather-location">{location}</div>
           <div className="data-container">
            <div className="element">
             <img src={humidity_icon} alt="" className="icon" />
             <div className="data">
               <div className="humidity-present">{humidity}</div>
               <div className="text">Humidity</div>
             </div>
            </div>
            <div className="element">
             <img src={wind_icon} alt="" className="icon" />
             <div className="data">
               <div className="humidity-present">{wind}</div>
               <div className="text">Wind Speed</div>
             </div>
            </div>
           </div>

        </div>
    </>)
}

export default WeatherApp;