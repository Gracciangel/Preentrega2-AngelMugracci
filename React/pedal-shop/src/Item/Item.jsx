import Counter from "../counter/Counter";
import { Link } from "react-router-dom";


const Item =({img , titulo , precio , id, stock }) =>{
    return (
        <div className="card">
            {/* link para ver detalle */}
         <Link to={`/item/${id}`}><img className="cardImg " alt="{titulo}" src={img}/></Link>

            <h4 className="cardTitle">{titulo}</h4>
            <Counter  stock={stock}/> 
            <h5>{precio}</h5>
            <button className="btn-Primary">Comprar</button>
        </div>
    )
}

export default Item ; 

