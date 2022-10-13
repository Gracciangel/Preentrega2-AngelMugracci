import { useEffect, useState} from "react";
import Productos from "../components/Productos";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () =>{
const [item , setItem] = useState({})

useEffect(()=> {
Productos().then((res)=> {
setTimeout(() => {
    setItem(res)
 
}, 2000)



}, (error) => console.log(error))

    })

    return (
    <div className="grid">
        <ItemDetail item={item}/>
    </div>
)
  

    

}

export default ItemDetailContainer; 