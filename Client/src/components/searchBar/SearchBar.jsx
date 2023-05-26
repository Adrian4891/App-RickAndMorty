import style from "./searchBar.module.css"
import {useState} from "react";

export default function SearchBar(props) {

  const [inpValue, setInputValue] = useState("");
  const {onSearch} = props;

  const inputChange=(e)=>{ 
     setInputValue(e.target.value);
   }

   return (
      <div className={style.searchaBar}>
         <input id="inp"type='search' className={style.inpSearch} 
           onChange={inputChange} value={inpValue}
           placeholder="Search for name"
         />
         <button onClick={()=>{onSearch(inpValue);setInputValue("")}}>Search</button>
      </div>
   );
}
