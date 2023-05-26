import style from "./paginated.module.css";

const Paginated = ({decrement, increment, page}) => {
     
    return(
        <div className={style.pages}>
            {page > 1 && <p onClick={decrement} className={style.icon}>...Prev</p>}
            <span>{page}</span>
            {page < 10 && <p onClick={increment} className={style.icon}>Next...</p>}
        </div>
    );
}

export default Paginated;