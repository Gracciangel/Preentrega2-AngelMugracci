import { useState , useEffect } from 'react';
import Productos from '../components/Productos'
import ItemList from '../ItemList/ItemList';
import logo from '../logo.png'

const ItemListContainer = ({greeting}) =>{
    // estado del array importado en productos
const [items , setitems] = useState([])
const [cargando , setCargando] = useState(true)
    // asincronia mediante el uso de un efecto

useEffect(() => {

        Productos().then((res , rej ) => {
            setitems(res);
        }).finally(() => {
            setCargando(false)
        })

    }, [])



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


// el padre de un componented es el que recibe el componente...