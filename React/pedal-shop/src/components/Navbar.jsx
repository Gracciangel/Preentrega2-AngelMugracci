import CartWidget from "./CartWidget";
import {Link ,  NavLink   } from "react-router-dom";
const Navbar = () =>{
    return(
        <ul>
          <div className="logo">
          <Link to="/">HOME</Link>
          </div>
            {/* pedales */}
            <li><NavLink className="item" to="/category/pedales">Pedales</NavLink>
            
            </li>
            {/* guitarras */}
            <li><NavLink className="item" to="/category/guitarras">Guitarras</NavLink>
            
            </li>
            {/* audio */}
            <li><NavLink className="item" to="/category/audio">Audio</NavLink>
            
            </li>
            {/* contacto */}
            <li><NavLink className="item" to="/category/contacto">Contacto</NavLink>
            
            </li>
           <div className="carrito">
           <CartWidget />
           </div>
        </ul>
    )

    }

 export default Navbar ;   