import { useState } from "react";
import Credits from "./components/Credits/Credits";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { WeatherCard } from "./components/WeatherCard/WeatherCard";
import type { WeatherData } from "./types/Weather";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

  async function handleSearch() {
    if (city.trim() === "") {
      setWeather(null);
      setError("Digite uma cidade.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const URL = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric&lang=pt_br`;
      const response = await fetch(URL);

      if (!response.ok) {
        setWeather(null);
        setError("Cidade não encontrada.");
        return;
      }

      const data: WeatherData = await response.json();

      setWeather(data);
    } catch {
      setWeather(null);
      setError("Erro ao consultar a API.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main>
      <SearchBar city={city} onCityChange={setCity} onSearch={handleSearch} />
      {loading && <p>Carregando...</p>}
      {error && <p>{error}</p>}
      {weather && (
        <WeatherCard
          cityName={weather.name}
          temperature={weather.main.temp}
          weatherDescription={weather.weather[0].description}
          humidity={weather.main.humidity}
          windSpeed={weather.wind.speed}
        />
      )}
      <Credits />
    </main>
  );
}

export default App;
