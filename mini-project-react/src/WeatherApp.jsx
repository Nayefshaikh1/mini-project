import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city:'Wonderland',
        feelsLike: 37.32,
        humidity: 34,
        temp: 36.05,
        tempmax: 36.05,
        tempmin: 36.05,
        weather: "haze",
    });
    let updateInfo=(result)=>{
        setWeatherInfo(result);
    }
    return(
        
        <div style={{textAlign:"center"}}>
            <h1>Weather App by Delta React</h1>
            <SearchBox updateInfo={updateInfo}/>
          <InfoBox info={weatherInfo}/>
 
        </div>
    );
}