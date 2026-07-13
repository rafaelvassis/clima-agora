import "./WeatherCard.css";

type WeatherCardProps = {
  cityName: string;
  temperature: number;
  weatherDescription: string;
  humidity: number;
  windSpeed: number;
  icon: string;
};
export function WeatherCard({
  cityName,
  temperature,
  weatherDescription,
  humidity,
  windSpeed,
  icon,
}: WeatherCardProps) {
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <div className="weatherCard_container">
      <div>
        <h2>{cityName}</h2>
        <img src={iconUrl} alt={weatherDescription} />
      </div>
      <p>Temperatura: {Math.round(temperature)} ºC</p>
      <p>Condição do tempo: {weatherDescription}</p>
      <p>Umidade: {humidity}%</p>
      <p>Vento: {Math.round(windSpeed)} km/h</p>
    </div>
  );
}
