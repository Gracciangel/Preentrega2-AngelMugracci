import { useState } from 'react';
import Carrito from '../Carrito.png'

const CartWidget = () =>{
    const [valor , setValor] = useState(0)
    return <img className='cart' src={Carrito} alt="" />
}

export default CartWidget; 