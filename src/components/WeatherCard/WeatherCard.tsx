import "./WeatherCard.css";

type WeatherCardProps = {
  cityName: string;
  temperature: number;
  weatherDescription: string;
  humidity: number;
  windSpeed: number;
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
      <p>Temperatura: {temperature} ºC</p>
      <p>Condição do tempo: {weatherDescription}</p>
      <p>Umidade: {humidity}%</p>
      <p>Vento: {windSpeed} km/h</p>
    </div>
  );
}
