import { Link } from "react-router-dom";

const ItemDetail =({item}) => {
  
    return(
        <div>
           <Link to={'/detalle'}><img src={item.img} alt="" /></Link>
            <h1>{item.titulo}</h1>
            <h3>$ {item.precio}.-</h3>
        </div>
    )

}
export default ItemDetail; 