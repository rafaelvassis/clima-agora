import "./WeatherCard.css";

type WeatherCardProps = {
  cityName: string;
  temperature: string;
  weatherDescription: string;
  humidity: string;
  windSpeed: string;
};
export function WeatherCard({
  cityName,
  temperature,
  weatherDescription,
  humidity,
  windSpeed,
}: WeatherCardProps) {
  return (
    <div className="weatherCard_container">
      <h2>{cityName}</h2>
      <p>{temperature} ºC</p>
      <p>{weatherDescription}</p>
      <p>Umidade: {humidity}%</p>
      <p>Vento: {windSpeed} km/h</p>
    </div>
  );
}
