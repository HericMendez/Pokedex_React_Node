import './searchbar.css'

const SearchBar = () => (
    <form className="input-search" action="/" method="get">
        <label htmlFor="input-search">
            <span className="visually-hidden"></span>
        </label>
        <input
            type="text"
            id="input-field"
            
            placeholder="Search Pokémon name..."
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
);

export default SearchBar;