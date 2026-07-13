import { useState } from "react";
import Credits from "./components/Credits/Credits";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { WeatherCard } from "./components/WeatherCard/WeatherCard";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=pt_br`;

  async function handleSearch() {
    console.log(`A chave deveria aparecer aqui: ${API_KEY}`);
    console.log(city);

    const response = await fetch(URL);

    console.log(response);

    const data = await response.json();

    console.log(data);

    console.log(data.main.temp);
    console.log(data.weather[0].description);
    console.log(data.wind.speed);
    console.log(data.name);
  }

  return (
    <main>
      <SearchBar city={city} onCityChange={setCity} onSearch={handleSearch} />
      <WeatherCard
        cityName="Teste"
        temperature="teste"
        weatherDescription="teste"
        humidity="teste"
        windSpeed="teste  "
      />
      <Credits />
    </main>
  );
}

export default App;
