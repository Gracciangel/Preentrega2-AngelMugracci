import Counter from "../counter/Counter";

const Item =({img , titulo , precio, stock}) =>{
    return (
        <div className="card">
            <img className="cardImg " alt="{titulo}" src={img}/>
            <h4 className="cardTitle">{titulo}</h4>
            <Counter  stock={stock}/> 
            <h5>{precio}</h5>
            <button className="btn-Primary">Comprar</button>
        </div>
    )
}

export default Item ; 

