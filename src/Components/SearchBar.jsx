import "./SearchBar.css";

const SearchBar=(props)=>{
	return(
		<div className="searchContainer">
			<input onChange={props.onInputChange} type="text" placeholder="Search Robots"/>
		</div>
	);
}

export default SearchBar;