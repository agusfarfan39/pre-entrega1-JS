const productos = [
    {
        id: "palo-brabo",
        titulo: "Palo brabo elite 3 80% carbono",
        imagen: "./img/palo.brabo.jpg",
        precio: 300500,

    },

    {
        id: "palo-grays",
        titulo: "Palo grays dynabow 80% carbono",
        imagen: "./img/palo.grays.azul.jpg",
        precio: 410300,

    },

    {
        id: "palo-grays-naranja",
        titulo: "Palo grays ultrabow 90% carbono",
        imagen: "./img/palo.grays.jpg",
        precio: 460600,

    },

    {
        id: "botines-adidas",
        titulo: "Botines adidas divox",
        imagen: "./img/botines.adidas.jpg",
        precio: 195000,

    },

    {
        id: "botines-adidas-negros",
        titulo: "Botines adias fabela rise-negro",
        imagen: "./img/botines.negros.jpg",
        precio: 105900,

    },

    {
        id: "botines-vlack",
        titulo: "Botines vlack-aqua",
        imagen: "./img/botines.vlack.jpg",
        precio: 105900,

    },

    {
        id: "casco-obo",
        titulo: "Casco obo robo",
        imagen: "./img/casco.obo.jpg",
        precio: 145000,

    },

    {
        id: "kickers-obo",
        titulo: "Kickers obo hi-rebound",
        imagen: "./img/kickers.obo.jpg",
        precio: 100000,

    },

    {
        id: "legguards",
        titulo: "Legguards obo hi-rebound",
        imagen: "./img/legguards.obo.jpg",
        precio: 250000,

    },

    {
        id: "bolso-obo",
        titulo: "Bolso mochila obo",
        imagen: "./img/bolso.obo.jpg",
        precio: 270000,

    },

    {
        id: "bolso-osaka",
        titulo: "Funda osaka xl",
        imagen: "./img/bolso.osaka.jpg",
        precio: 240000,

    },

    {
        id: "canilleras",
        titulo: "Canilleras vlack-celeste",
        imagen: "./img/canilleras.vlack.jpg",
        precio: 300500,

    },

];

localStorage.setItem("productos", JSON.stringify(productos));
const productosEnLS = JSON.parse(localStorage.getItem("productos"));
console.log(productosEnLS);


const contenedorProductos = document.querySelector("#contenedor-productos");



function cargarProductos() {

    productos.forEach(producto => {

        const div = document.createElement("div");

        div.classList.add("producto");
        div.innerHTML = `
        <img loading="lazy" class="card-img-top producto-imagen" src="${producto.imagen}" alt="palo hockey sobre cesped marca brabo color naranja y negro">
      <div class="card-body">
        <h5 class="card-title producto-titulo">${producto.titulo}
        </h5>
        <p class="card-text producto-precio">${producto.precio}</p>
        <a href="#" class="btn btn-black" id=${producto.id}>COMPRAR</a>
      </div>
        `;

        contenedorProductos.append(div);

    })

}

cargarProductos();








































