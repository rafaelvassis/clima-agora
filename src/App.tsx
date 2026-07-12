import Credits from "./components/Credits/Credits";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { WeatherCard } from "./components/WeatherCard/WeatherCard";

function App() {
  return (
    <main>
      <SearchBar />
      <WeatherCard />
      <Credits />
    </main>
  );
}

export default App;
