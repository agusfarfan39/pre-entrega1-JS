const productos = [];

class Producto {
    constructor(nombre) {
        this.id = productos.length + 1;
        this.nombre = nombre;
    }
}



for (let i = 0; i < 5; i++) {

    let nombre = prompt("Que producto estas buscando?");
    let producto = new Producto(nombre);
    productos.push(producto);

}
console.log(productos);

let agregar = Number(prompt ("Si desea agregar mas productos pulse 1, si desea finalizar pulse 2"))

if (agregar == 1) {
    nombre = prompt("Que producto estas buscando?");
} else if (agregar == 2) {
    alert ("Muchas gracias por su visita")
}


    
        
    
    


































