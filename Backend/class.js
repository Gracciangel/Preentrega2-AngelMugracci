const { faGrinTongue } = require("@fortawesome/free-solid-svg-icons")

class Usuario {
    constructor (name , surname, books , pets ) {
        this.name= name
        this.surname = surname
        this.books = books
        this.pets = pets
    }
    getFullName (){
        return `${this.name} ${this.surname}`
    }
    addPets (pet){
         this.pets.push(pet)
    }
    countPet (){
        return this.pets.length
    }
    addBook (name , author) {
        this.books.push({name , author})
    }
    getBookNames () {
    const bookNames = []
    for(let book of this.books){
        bookNames.push(book.name)
    }
    return bookNames; 
    }
}

const usuario = new Usuario('pepe', 'perez' , books=[] , pets=[]) ;
console.log(usuario.getFullName())
usuario.addPets('perro');
usuario.addPets('gato') 
console.log(usuario.countPet())
usuario.addBook('titulo1', 'autor1'); 
usuario.addBook('titulo2', 'autor2'); 
usuario.addBook('titulo3', 'autor3');
console.log(usuario.getBookNames())


