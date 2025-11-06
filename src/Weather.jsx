import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import {useState} from "react";
export default function Weather() {

    let [weatherInfo, setWeatherInfo] = useState(
        {
        City: "Delhi",
        feelsLike: 40,
        tempMin: 32,
        tempMax: 35.3,
        humidity: 42,
        WeatherDescription: "Haze",
        Main: "Clouds",
        }
    );
   let updateWeatherInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return(
        <div>
            <SearchBox updateWeatherInfo={updateWeatherInfo} />
            <br />
            <InfoBox Info={weatherInfo}/>
        </div>
    )
}