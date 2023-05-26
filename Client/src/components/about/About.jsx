import style from "./about.module.css";
import logo from "../../images/logoR&M.svg";
import foto from "../../images/venom.jpg";
import { Link } from "react-router-dom";

const About =()=> {
  return(
    <div className={style.containerAbout}>
      <img src={logo} alt={"Logo svg"} />
      <h1>Create by app Ernesto Barraza</h1>
      <img src={foto} alt={"imagePng"} className={style.imgfoto}/>
      <h3><Link to={"/outlook.com"}>ernestobarraza216@gmail.com</Link></h3>
    </div>
  );
}

export default About;