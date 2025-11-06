
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import {useState, useEffect} from "react";
import InfoBox from './InfoBox';

export default function SearchBox({updateWeatherInfo}) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    let URL = "https://api.openweathermap.org/data/2.5/weather";
    let API_KEY = "7c2ddc9c8dbca797f05e5a5308f94906";


    let getWeatherInfo = async() => {
        try {
             let response =  await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
       let data = await response.json();
       console.log(data);
       const result = {
           City: city,
          feelsLike: data.main.feels_like,
          tempMin: data.main.temp_min,
          tempMax: data.main.temp_max,
          humidity: data.main.humidity,
          WeatherDescription: data.weather[0].description,
          Main: data.weather[0].main,
       }
       console.log(result);
       return result;
        }catch(error) {
           throw error; 
        }
      
    }

    

    let handleChange = (event) => {
       let city =  event.target.value
       setCity(city);
    }


    let handleSubmit = async(event) => {
        try {
             event.preventDefault();
      console.log(city);
       let newInfo = await getWeatherInfo();
       updateWeatherInfo(newInfo);
       setCity("");
        }catch {
            setError(true);
            setCity("");
        }
     
    }
    return (
        <>
         <div className="SearchBox">
        <h1>Weather App</h1>
        <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name"  
            variant="outlined" onChange={handleChange} value={city} required/> <br /><br />
            <Button variant='contained' type="submit">Submit</Button>
            </form>
            {error && <p style={{color: "red"}}>City not found.please enter valid city</p>}
            </div>
             
        </>
    );
}