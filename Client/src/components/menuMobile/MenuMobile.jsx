 import style from "./menuMobile.module.css";
 import { Link } from "react-router-dom";

 const MenuMobile = ({setAccess, menuHiden, hiden}) => {
    
    const logOut =()=>{
        setAccess(false);
    }
    
    return (
        <div className={!hiden ? style.containerMenuMobileOut :style.containerMenuMobile}>
            <div className={style.closeMenu} onClick={()=>menuHiden()}>X</div>
            <div className={style.navBarMobile}>
                <div onClick={()=>menuHiden()}>
                    <Link to="/home" >Home</Link>
                    <Link to="/about" >About</Link>
                    <Link to="/favorites">Favorites</Link>
                    <Link onClick={()=>logOut()}>Log Out</Link>
                </div>
            </div>
        </div>
    );
 }

 export default MenuMobile;