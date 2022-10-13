

const ItemDetail =({item}) => {
    console.log(item)
    return(
        <div>
            <img src={item.img} alt="" />
            <h1>{item.titulo}</h1>
            <h3>{item.precio}</h3>
        </div>
    )

}
export default ItemDetail; 