import SearchBar from "./SearchBar.jsx";

const Nav =({onSearch})=>{
    return(
        <div className="navBar">
            <SearchBar  onSearch={onSearch}/>
        </div>
      
    );
}

export default Nav;
