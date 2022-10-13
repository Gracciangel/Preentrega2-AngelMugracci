import Item from "../Item/Item"


const ItemList = ({items}) =>{
return (
        <>
             {items.map(prod => 
             <Item key={prod.id} img={prod.img} titulo={prod.titulo} precio={`$ ${prod.precio} .-`}/>
             )}

        </>
)
}


export default ItemList ;

// este componente se encargará de mapear los elementos para renderizar en itemListContainer.. 


// comp. A ===> envio al comp B el B ===> envio al C el comp C se envia al comp App.
//  el comp A 