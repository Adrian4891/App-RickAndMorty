import style from "./nav.module.css"
import SearchBar from "../searchBar/SearchBar";
import {Link, useLocation} from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import imgLogo from "../../images/menuLogo.svg";
import logoMobile from "../../images/logoR&M.svg";
import { useNavigate } from "react-router-dom";

const Nav =({onSearch,setAccess,menuHiden})=>{

    const location = useLocation();
    const navigate = useNavigate();

    const logOut =()=>{
        setAccess(false);
    }

    return(
        <nav className={location.pathname !=="/" ? style.navBar : style.navBarNone }>
            <img src={imgLogo} alt="imgLogo" className={style.imgDeskLogo}
                onClick={()=>navigate("/home")}
            />
            <div className={style.containerMobile}>
                <img src={logoMobile} alt="logo-Mobile" className={style.logoMobile} 
                    onClick={()=>navigate("/home")}
                />
                <BiMenuAltRight className={style.menuIcon} onClick={()=>menuHiden()}/>
            </div>
            <div className= {style.containerLinks}>
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/favorites">Favorites</Link>
                <Link onClick={()=>logOut()}>Log Out</Link>
            </div>
            <SearchBar onSearch={onSearch}/>
        </nav>
    );
}

export default Nav;
