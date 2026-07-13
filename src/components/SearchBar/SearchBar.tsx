import "./SearchBar.css";
type SearchBarProps = {
  city: string;
  onCityChange: (city: string) => void;
  onSearch: () => void;
  loading: boolean;
};

export function SearchBar({
  city,
  onCityChange,
  onSearch,
  loading,
}: SearchBarProps) {
  return (
    <div className="search_container">
      <label htmlFor="search_input">Cidade: </label>
      <input
        type="text"
        id="search_input"
        name="search_query"
        placeholder="Digite o nome da cidade"
        value={city}
        onChange={(e) => onCityChange(e.target.value)}
      />
      <button onClick={onSearch} disabled={loading}>
        {loading ? "Pesquisando..." : "Pesquisar"}
      </button>
    </div>
  );
}
