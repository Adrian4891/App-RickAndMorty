import style from "./loginForm.module.css";
import {useState} from "react";
import {AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { validation } from "../../validation";
import logoForm from "../../images/logoForm.svg"

const Form =({login})=> {
    
    const [userData, setUserData] = useState({
        email:"",
        password:"",                   
    });

    const [errors, setErrors] = useState({
        email:"",
        password:"",
    });

    const handleChange =(event)=> {     // funcion manejadora del event change
        setUserData({
          ...userData,
          [event.target.name] : event.target.value,
        });
        
       setErrors(
         validation({
            ...userData,
            [event.target.name]: event.target.value
         })
       );
    }

    const handleSubmit =(event)=> {  // Funcion manejadora del evento submit 
      event.preventDefault();
      login(userData);
    }

  return(
    <div className={style.containerLoginPage}>
      <div className={style.containerForm}>
        <img src={logoForm} alt="logoImage"/>
        <form onSubmit={handleSubmit}>
          <div className={style.containerTextInput}>
            <label htmlFor="email"><AiOutlineMail className={style.icon}/></label>
            <input  
              type="email" 
              name="email" 
              placeholder="user@email.com" 
              value={userData.email} 
              onChange={handleChange}
            />
            <p>{errors.email}</p>
          </div>
          <div className={style.containerTextInput}>
            <label htmlFor="password"><RiLockPasswordLine className={style.icon}/></label>
            <input  
              name="password" 
              placeholder="password" 
              value={userData.password} 
              onChange={handleChange}
            />
            <p>{errors.password}</p>
          </div>
          <button>Submit</button>
        </form>
        <span> email: adrian@gmail.com </span> 
        <span> password: adrian38 </span> 
      </div>
    </div>
  );
}

export default Form;

