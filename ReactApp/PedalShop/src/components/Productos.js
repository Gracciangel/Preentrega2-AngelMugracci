// array de productos 

const AsyncProducts = [
    {
        id: 1 ,
        titulo: 'Gibson 335' ,
        img:'../images/335.jpg',
        precio: 2300 ,
        stock: 3
    },
    {
        id:2 ,
        titulo: 'Fender Telecaster',
        img: '../images/tele.jpg',
        precio: 1900,
        stock: 5
    },
    {
        id:3 ,
        titulo: 'Pedal overdrvie JHS', 
        img: '../images/jhs.jpg',
        precio: 650,
        stock: 10
    },
    {
        id:4,
        titulo: 'Pedal Reverb Strymon', 
        img: '../images/reverb.jpg',
        precio: 500,
        stock: 5
    },
    {
        id: 5,
        titulo: 'Controlador MIDI M-Audio' , 
        img: '../images/m-audio.jpg',
        precio: 550,
        stock:10
    },
    {
        id: 6,
        titulo: 'inear Shure e-215',
        img: '../images/shure.jpg',
        precio: 150,
        stock: 15
    }
]

// funcion asincronica para retornar la promesa que será recibida en ItemListContainer... 


const Productos = () =>{
  return new Promise((res , rej ) =>{
   setTimeout(() => {
    res(AsyncProducts)
   } , 2000)
  }, (error)=>{
    console.log(error)
  })
}

export default Productos ;