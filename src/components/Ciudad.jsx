import React from "react";
import "./Ciudad.css"

export default function Ciudad({city}) {
   if (city){
    return (
        <div>
            <div className="ciudadCard">
                    <h2 className = "titulo">{city.name}</h2>
                    <div>
                        <div>Temperature: {city.temp}°C</div>
                        <div>Weather: {city.weather}</div>
                        <div>Wind: {city.wind} km/h</div>
                        {/* <div>Clouds: {city.clouds}</div> */}
                        {/* <div>Latitude: {city.latitud}º</div>
                        <div>Longitude: {city.longitud}º</div> */}
                    </div>
            </div>
        </div>
    )

}
else return "";
}
