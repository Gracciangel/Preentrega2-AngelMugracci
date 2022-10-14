
import Counter from "../counter/Counter";

const ItemDetail =({item}) => {
  
    return(
        <>
                
                <img className="detailImg" src={item.img} alt={item.titulo} />
                <h1 className="titulo">{item.titulo}</h1>
                <h3 className="precio">$ {item.precio}.-</h3>
                <div><h5>{<Counter precio={item.precio}/>}</h5></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non aliquam quisquam possimus earum unde praesentium cumque sequi! Distinctio sit sequi, qui accusantium eligendi, dolorum facere amet eos saepe, culpa mollitia?</p>
                <button className="detailBtn">Agregar al Carrito</button>
        </>
        
    )

}
export default ItemDetail; 