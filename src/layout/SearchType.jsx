function SearchType({ searchType, onSearchTypeChange }) {
    const handleChange = (e) => {
        onSearchTypeChange( e.target.value );
    };

    return (
        <form>
            <p>
            <label>
                <input class="with-gap" name="group1" type="radio" value="" onChange={handleChange} checked={searchType === ""} />
                <span>all</span>
            </label>
            </p>
            <p>
            <label>
                <input name="group1" type="radio" value="movie" onChange={handleChange} checked={searchType === "movie"} />
                <span>movie</span>
            </label>
            </p>
            <p>
            <label>
                <input name="group1" type="radio" value="series" onChange={handleChange} checked={searchType === "series"} />
                <span>series</span>
            </label>
            </p>
        </form>
    )
}

export { SearchType };