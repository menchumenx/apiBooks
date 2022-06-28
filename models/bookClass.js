

class Libro {

    constructor(idlibro, idusuario, title, type, price, photo){
       this.id_libro = idlibro,
       this.id_usuario = idusuario,
       this.title = title,
       this.type = type,
       this.price = price,
       this.photo = photo 
    }
}

module.exports = {Libro}