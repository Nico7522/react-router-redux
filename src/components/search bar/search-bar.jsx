import { useCallback, useId, useState } from "react";

const SearchBar = ({ label, onSearch }) => {
  const id = useId();
  const [query, setQuery] = useState("");
  const handleSearchSubmit = (e => {
    e.preventDefault();

    onSearch(query);
    setQuery("");
  });

  return (
    <form onSubmit={handleSearchSubmit}>
      {label && <label htmlFor={id + "search"}>{label}</label>}
      <input
        type="text"
        id={id + "search"}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Rechercher</button>
    </form>
  );
};

SearchBar.defaultProps = {
  onSearch: () => {},
};

export default SearchBar;
