import CartWidget from "./CartWidget";

const Navbar = () =>{
    return(
        <ul>
            <li><a className="item" href="">Pedales</a></li>
            <li><a className="item" href="">Guitarras</a></li>
            <li><a className="item" href="">Audio</a></li>
            <li><a className="item" href="">Contacto</a></li>
            <CartWidget />
        </ul>
    )

    }

 export default Navbar ;   