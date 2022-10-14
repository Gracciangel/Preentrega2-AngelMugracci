import { useState , useEffect } from 'react';
import AsyncProducts from '../components/Productos';
import ItemList from '../ItemList/ItemList';
import logo from '../logo.png'
import { useParams } from 'react-router-dom';



const ItemListContainer = ({greeting}) =>{
 
const {category} = useParams()
// console.log(valor)
    // estado del array importado en productos
const [items , setitems] = useState([])
const [cargando , setCargando] = useState(true)
    // asincronia mediante el uso de un efecto

useEffect(() => {

    const traerProductos = () => {
            return new Promise((res) => {
            const filtrados = AsyncProducts.filter(prod => prod.categoria === category )
            
            setTimeout(() => {
                res(category ? filtrados : AsyncProducts)
             
        },1000)
    
}, (error) => console.log(error))

}
setTimeout(() => {
    traerProductos().then(res => setitems(res))
        setCargando(false)
       }, 2000)

    }, [category])



// Spinner

if(cargando){
        return (
        <div className='load'>
            <img className='spinner' src={logo} />
            <h2>Cargando...</h2>
        </div>
        )
}

    // retorno del componente sicronico
    return (
    <>
              <div className='TitleItem'>
              <h1 >{greeting}</h1>
              </div>
        <div className='grid'>
              <ItemList items={items}/>
        </div>

    </>
    )
}

export default ItemListContainer ; 

