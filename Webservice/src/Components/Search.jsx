const Search = (props) =>{
    return(
        <div>
            <label htmlFor="search">Search by author</label>
            <input type="text" id="search"  placeholder="Search..." onChange={(e) => props.onSearch(e.target.value)}/>  
        </div>
    )
}
export default Search; // This is a functional component