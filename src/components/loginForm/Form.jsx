import "./loginForm.css";
import {useState} from "react";
import {AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { validation } from "../../validation";

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
        console.log(event.target.name);
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
    <div className="containerLoginPage">
       <div className="containerForm">
           <form onSubmit={handleSubmit}>
              <div className="containerTextInput">
                  <label htmlFor="email"><AiOutlineMail className="icon"/></label>
                  <input  
                    type="email" 
                    name="email" 
                    placeholder="user@email.com" 
                    value={userData.email} 
                    onChange={handleChange}
                  />
                  <p>{errors.email}</p>
              </div>
              <div className="containerTextInput">
                  <label htmlFor="password"><RiLockPasswordLine className="icon"/></label>
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
       </div>
    </div>
  );
}

export default Form;

