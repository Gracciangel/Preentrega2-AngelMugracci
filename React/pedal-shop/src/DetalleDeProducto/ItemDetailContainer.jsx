import { useEffect, useState} from "react";
import AsyncProducts from "../components/Productos";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";



const ItemDetailContainer = () =>{
    
const {id} = useParams()

const [item , setItem] = useState({})
useEffect(() => {

    const traerProductos = () => {
            return new Promise((res) => {
            const filtrados = AsyncProducts.find(prod => prod.id === +id )
            
            setTimeout(() => {
              setItem(id ? filtrados : AsyncProducts)
             
        },1000)

}, (error) => console.log(error))

}
traerProductos().then(res =>{
    setItem(res)
})

    })


    return (
    <div className="detail">
        <ItemDetail item={item}/>
         
         </div>
)
  

    

}

export default ItemDetailContainer; 