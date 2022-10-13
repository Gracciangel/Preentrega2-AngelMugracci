import { useState } from 'react';
import Carrito from '../Carrito.png'
import { Link } from 'react-router-dom';
const CartWidget = () =>{
    const [valor , setValor] = useState(0)
    return <Link to="/carrito"><img className='cart' src={Carrito} alt="" /></Link>
}

export default CartWidget; 