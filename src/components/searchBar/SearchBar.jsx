import "./searchBar.css"
import React from "react";

export default function SearchBar(props) {

  const [inpValue, setInputValue] = React.useState("");
  const {onSearch} = props;

  const inputChange=(e)=>{ 
     setInputValue(e.target.value);
   }

   return (
      <div className="searchaBar">
         <input id="inp"type='search' className="inpSearch" onChange={inputChange} value={inpValue}/>
         <button onClick={()=>{onSearch(inpValue);setInputValue("")}}>Agregar</button>
      </div>
   );
}
