import "./nav.css"
import SearchBar from "../searchBar/SearchBar";
import {Link, useLocation} from "react-router-dom";

const Nav =({onSearch,setAccess})=>{

    const location = useLocation();

    const logOut =()=>{
        setAccess(false);
    }

    return(
        <div className={location.pathname!=="/" ? "navBar" : "navBarNone"}>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/favorites">Favorites</Link>
            <Link onClick={()=>logOut()}>Log Out</Link>
            <SearchBar onSearch={onSearch}/>
        </div>
      
    );
}

export default Nav;
