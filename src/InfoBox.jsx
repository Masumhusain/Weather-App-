import "./InfoBox.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';

 export default function InfoBox({Info}) {


    let HotWeather = "data:image/jpeg;base64,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";

    let ColdWeather = "https://plus.unsplash.com/premium_photo-1670275346849-b5e2d3f733be?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sZCUyMHdlYXRoZXIlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"

    let RainWeather = "https://png.pngtree.com/background/20230114/original/pngtree-hd-grassland-rainy-weather-picture-image_2008231.jpg";
  return (
    <Card  className="InfoBox" sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={Info.Main === "Rain" ? RainWeather : Info.Main === "Clouds" ? HotWeather : ColdWeather}
          alt="Weather images "
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          <h3 style={{textTransform: "capitalize"}}>
            {Info.Main === "Rain" ?  <ThunderstormIcon style={{color: "navy"}} /> : Info.Main === "Clouds" ? <SunnyIcon  style={{color: "orange"}}/> : <AcUnitIcon style={{color: "#87CEEB"}}/>}&nbsp;{Info.City}</h3>
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Feels_like:&nbsp;&nbsp;  {Info.feelsLike}<br></br>
            Temp_min:&nbsp;&nbsp;  {Info.tempMin}<br></br>
            Temp_max:&nbsp;&nbsp;  {Info.tempMax}<br></br>
            Humidity:&nbsp;&nbsp;  {Info.humidity}<br></br>
             Weather:&nbsp;&nbsp;  {Info.WeatherDescription}<br></br>
                Main:&nbsp;&nbsp;  {Info.Main}<br></br>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}