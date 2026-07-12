import "./SearchBar.css";

export function SearchBar() {
  return (
    <div className="search_container">
      <label htmlFor="search_input">Cidade: </label>
      <input type="text" id="search_input" name="search_query"/>
      <button>Pesquisar</button>
    </div>
  );
}
