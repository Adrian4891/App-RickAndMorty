import style from "./notFound.module.css";

const NotFound=()=>{
  return(
    <div className={style.container}>
      <div className={style.message}>
        <h1>Not Found Error 404 </h1>
      </div>
    </div>
  );
}

export default NotFound;