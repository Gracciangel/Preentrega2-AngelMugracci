import Item from "../Item/Item"


const ItemList = ({items}) =>{
        
return (
        <>
     {items.map(prod => 
  <Item key={prod.id} id={prod.id} img={prod.img} titulo={prod.titulo} precio={`$ ${prod.precio} .-`}/>
             )}

        </>
)
}


export default ItemList ;
