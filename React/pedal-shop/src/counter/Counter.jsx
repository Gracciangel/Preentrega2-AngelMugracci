import { useState } from "react";

const Counter = ({stock})=>{
    const [valor , setValor] = useState(0)
 
const sumar = () =>{
    setValor(valor +1)

}
const restar = () =>{
    if(valor > 0){
        setValor(valor -1)
    }
}
    return (
        <div className="counter">
            <span className="span">{valor}</span>
            <button className="cBtn" onClick={sumar}>+</button>
            <button  className="cBtn" onClick={restar}>-</button>
        </div>
    )
}

export default Counter ; 