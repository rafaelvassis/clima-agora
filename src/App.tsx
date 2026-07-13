import { useState } from "react";
import Credits from "./components/Credits/Credits";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { WeatherCard } from "./components/WeatherCard/WeatherCard";
import type { WeatherData } from "./types/Weather";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=pt_br`;

  async function handleSearch() {
    console.log(city);

    const response = await fetch(URL);

    console.log(response);

    const data: WeatherData = await response.json();

    setWeather(data);

    console.log(data);

    console.log(data.main.temp);
    console.log(data.weather[0].description);
    console.log(data.wind.speed);
    console.log(data.name);
  }

  return (
    <main>
      <SearchBar city={city} onCityChange={setCity} onSearch={handleSearch} />
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
