const productos = [

    // ZAPATILLAS SALE
    {
       id: "zapatillas-sale-01",
       titulo: "Zapatilla-sale-01",
       texto:"Sale",
       imagen: "./image/zapassale/01.jpg",
       categoria: {
           nombre: "Ofertas",
           id: "sale"
       },
       precio: 1000
   },
   {
       id: "zapatillas-sale-02",
       titulo: "Zapatilla-sale-02",
       texto:"Sale",
       imagen: "./image/zapassale/02.jpg",
       categoria: {
           nombre: "Ofertas",
           id: "sale"
       },
       precio: 1000
   },
   {
       id: "zapatillas-sale-03",
       titulo: "Zapatilla-sale-03",
       texto:"Sale",
       imagen: "./image/zapassale/03.jpg",
       categoria: {
           nombre: "Ofertas",
           id: "sale"
       },
       precio: 1000
   },
   {
       id: "zapatillas-sale-04",
       titulo: "Zapatilla-sale-04",
       texto:"Sale",
       imagen: "./image/zapassale/04.jpg",
       categoria: {
           nombre: "Ofertas",
           id: "sale"
       },
       precio: 1000
   },
   {
       id: "zapatillas-sale-05",
       titulo: "Zapatilla-sale-05",
       texto:"Sale",
       imagen: "./image/zapassale/05.jpg",
       categoria: {
           nombre: "Ofertas",
           id: "sale"
       },
       precio: 1000
   },

   // ZAPATILLAS HOMBRE
   
   {
       id: "zapatilla-hombre-01",
       titulo: "Zapatilla-hombre-01",
       texto:"Hombre",
       imagen: "./image/zapashombre/01.jpg",
       categoria: {
           nombre: "Hombres",
           id: "hombres"
       },
       precio: 1000
   },
   {
       id: "zapatilla-hombre-02",
       titulo: "Zapatilla-hombre-02",
       texto:"Hombre",
       imagen: "./image/zapashombre/02.jpg",
       categoria: {
           nombre: "Hombres",
           id: "hombres"
       },
       precio: 1000
   },
   {
       id: "zapatilla-hombre-03",
       titulo: "Zapatilla-hombre-03",
       texto:"Hombre",
       imagen: "./image/zapashombre/03.jpg",
       categoria: {
           nombre: "Hombres",
           id: "hombres"
       },
       precio: 1000
   },
   {
       
       id: "zapatilla-hombre-04",
       titulo: "Zapatilla-hombre-04",
       texto:"Hombre",
       imagen: "./image/zapashombre/04.jpg",
       categoria: {
           nombre: "Hombres",
           id: "hombres"
       },
       precio: 1000
   },
   {
       
       id: "zapatilla-hombre-05",
       titulo: "Zapatilla-hombre-05",
       texto:"Hombre",
       imagen: "./image/zapashombre/05.jpg",
       categoria: {
           nombre: "Hombres",
           id: "hombres"
       },
       precio: 1000
   },
   {
       id: "zapatilla-hombre-06",
       titulo: "Zapatilla-hombre-06",
       texto:"Hombre",
       imagen: "./image/zapashombre/06.jpg",
       categoria: {
           nombre: "Hombres",
           id: "hombres"
       },
       precio: 1000
   },
   {
       id: "zapatilla-hombre-07",
       titulo: "Zapatilla-hombre-07",
       texto:"Hombre",
       imagen: "./image/zapashombre/07.jpg",
       categoria: {
           nombre: "Hombres",
           id: "hombres"
       },
       precio: 1000
   },
   {
       id: "zapatilla-hombre-08",
       titulo: "Zapatilla-hombre-08",
       texto:"Hombre",
       imagen: "./image/zapashombre/08.jpg",
       categoria: {
           nombre: "Hombres",
           id: "hombres"
       },
       precio: 1000
   },
   {
       id: "zapatilla-hombre-09",
       titulo: "Zapatilla-hombre-09",
       texto:"Hombre",
       imagen: "./image/zapashombre/09.jpg",
       categoria: {
           nombre: "Hombres",
           id: "hombres"
       },
       precio: 1000
   },
   {
       id: "zapatilla-hombre-10",
       titulo: "Zapatilla-hombre-10",
       texto:"Hombre",
       imagen: "./image/zapashombre/10.jpg",
       categoria: {
           nombre: "Hombres",
           id: "hombres"
       },
       precio: 1000
   },

   // ZAPATILLAS MUJER
   {
       
       id: "zapatilla-mujer-01",
       titulo: "Zapatilla-mujer-01",
       texto:"Mujer",
       imagen: "./image/zapasmujer/01.jpg",
       categoria: {
           nombre: "Mujeres",
           id: "mujeres"
       },
       precio: 1000
   },
   {
       id: "zapatilla-mujer-02",
       titulo: "Zapatilla-mujer-02",
       texto:"Mujer",
       imagen: "./image/zapasmujer/02.jpg",
       categoria: {
           nombre: "Mujeres",
           id: "mujeres"
       },
       precio: 1000
   },
   {
       id: "zapatilla-mujer-03",
       titulo: "Zapatilla-mujer-03",
       texto:"Mujer",
       imagen: "./image/zapasmujer/03.jpg",
       categoria: {
           nombre: "Mujeres",
           id: "mujeres"
       },
       precio: 1000
   },
   {
       id: "zapatilla-mujer-04",
       titulo: "Zapatilla-mujer-04",
       texto:"Mujer",
       imagen: "./image/zapasmujer/04.jpg",
       categoria: {
           nombre: "Mujeres",
           id: "mujeres"
       },
       precio: 1000
   },
   {
       id: "zapatilla-mujer-05",
       titulo: "Zapatilla-mujer-05",
       texto:"Mujer",
       imagen: "./image/zapasmujer/05.jpg",
       categoria: {
           nombre: "Mujeres",
           id: "mujeres"
       },
       precio: 1000
   },
   {
       id: "zapatilla-mujer-06",
       titulo: "Zapatilla-mujer-06",
       texto:"Mujer",
       imagen: "./image/zapasmujer/06.jpg",
       categoria: {
           nombre: "Mujeres",
           id: "mujeres"
       },
       precio: 1000
   },
   
  
];


const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");




function cargarProductos(productosElegidos) {

   contenedorProductos.innerHTML = "";

   productosElegidos.forEach(producto => {

       const div = document.createElement("div");
       div.classList.add("producto");
       div.innerHTML = `
                   <span class="producto-texto">${producto.texto}</span>
                   <div>
                       <img class="producto-imagen" src="${producto.imagen}" alt="${producto.marca}">
                   </div>
                   <div >
                       <h5 class="producto-titulo">${producto.titulo} </h5>
                       <p class="producto-detalle">${producto.detalle}.</p>
                       <p class="producto-precio">${producto.precio}</p>
                       <div class="icon-comprar">
                           <button  class="producto-agregar" id="${producto.id}">Agregar <img  src="./image/carrito-de-compras.png" alt="" class="img-carrito"></button>
                       </div>
                    </div>
       `;

       contenedorProductos.append(div);
   })

   actualizarBotonesAgregar();
   
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
   boton.addEventListener("click", (e) => {

       botonesCategorias.forEach(boton => boton.classList.remove("active"));
       e.currentTarget.classList.add("active");

       if (e.currentTarget.id != "todos") {

           const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
           tituloPrincipal.innerText = productoCategoria.categoria.nombre;
           const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
           cargarProductos(productosBoton);
       } else {
           tituloPrincipal.innerText = "Todos los productos";
           cargarProductos(productos);
       }

   })
});




function actualizarBotonesAgregar() {
   botonesAgregar = document.querySelectorAll(".producto-agregar");

   botonesAgregar.forEach(boton => {
       boton.addEventListener("click", agregarAlCarrito);
   });
}




let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
   productosEnCarrito = JSON.parse(productosEnCarritoLS);
   actualizarNumerito();
} else {
   productosEnCarrito = [];
}

function agregarAlCarrito(e) {
   const idBoton = e.currentTarget.id;
   const productoAgregado = productos.find(producto => producto.id === idBoton);

   if(productosEnCarrito.some(producto => producto.id === idBoton)) {
       const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
       productosEnCarrito[index].cantidad++;
   } else {
       productoAgregado.cantidad = 1;
       productosEnCarrito.push(productoAgregado);
   }

   actualizarNumerito();

   localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
   let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
   numerito.innerText = nuevoNumerito;
}