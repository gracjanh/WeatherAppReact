const SearchField = ({ input, handleInput, fetchData }) => {
    return (
        <div className="input-bar">
            <form>
                <input
                    className="input"
                    type="text"
                    value={input}
                    onChange={handleInput}
                    placeholder="Search..."
                />
                <button className="btn" onClick={fetchData}></button>
            </form>
        </div>
    );
};
export default SearchField;
