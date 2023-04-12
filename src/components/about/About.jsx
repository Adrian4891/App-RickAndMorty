import "./about.css";
import logo from "../../images/logoR&M.svg"
import foto from "../../images/venom.jpg"
import { Link } from "react-router-dom";

const About =()=> {
  return(
    <div className="containerAbout">
      <img src={logo} alt={"Logo svg"} />
      <h1>Create by app Ernesto Barraza</h1>
      <img src={foto} alt={"imagePng"} className="imgfoto"/>
      <h4><Link to={""}>ernestobarraza216@gmail.com</Link></h4>
    </div>
  );
}

export default About;