
export const validation =(userData)=>{
  const errors = {};

  if (!/^[a-zA-Z0-9._-]{1,35}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(userData.email)) {
      errors.email = "Debe ser un email valido";
  }
    
  else if(!/^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{6,8}$/.test(userData.password)){
    errors.password = "Entre 6 y 8 caracteres y al menos un numero";
  }

  return errors;
 
}
