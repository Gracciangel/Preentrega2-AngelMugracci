import { useEffect, useState} from "react";
import AsyncProducts from "../components/Productos";
import Item from "../Item/Item";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () =>{
    
const {id} = useParams()

const [item , setItem] = useState({})
useEffect(() => {

    const traerProductos = () => {
            return new Promise((res) => {
            const filtrados = AsyncProducts.find(prod => prod.id === id )
            
            setTimeout(() => {
              setItem(res)
             
        },1000)
    
}, (error) => console.log(error))

}


    })


    return (
    <div className="grid">
        <Item item={item}/>
    </div>
)
  

    

}

export default ItemDetailContainer; 