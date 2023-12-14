function saludar() {
    let nombre = prompt("Ingrese el nombre");
    console.log("Hola", nombre);
    alert(`Hola ${nombre}`);
}

saludar();


let producto = prompt("Que producto estas buscando?");
let precio = Number;

while (producto != "casco") {
    if (producto == "canilleras" && precio || producto == "palos") {
        alert("Tenemos stock");
        pago = prompt ("Como queres ralizar el pago?")

    } else if (producto == "botines" || producto == "protecciones") {
        alert("Ultimas unidades en stock");
        pago = prompt ("Como queres ralizar el pago?")
    } else {
        alert("No se pudo encontrar el producto en nuestra tienda");
        producto = prompt("Que producto estas buscando?");
    }
} alert ("Producto fuera de stock momentaneamente");
producto = prompt("Que producto estas buscando?");


let pago = prompt ("Como queres ralizar el pago?") 




  





















