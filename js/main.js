const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");

const inputSearch = document.querySelector("#inputSearch")

const URL='bbdd/productos.json'
productos=[]



fetch(URL)
.then((response)=> data = response.json())
.then ((data)=>productos.push(...data))
.then(()=> cargarProductos(productos))




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
                       <p class="producto-talle">${producto.talle}.</p>
                       <p class="producto-precio">${producto.precio}</p>
                       <div class="icon-comprar">
                           <button class="producto-agregar"   id="${producto.id}" >Agregar <img  src="./image/carrito-de-compras.png" alt="" class="img-carrito"></button>
                       </div>
                    </div>
       `;

       contenedorProductos.append(div);
   })

   actualizarBotonesAgregar();
   
}




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
   toast(` Se agrego el producto al carrito` , 'lightbrown')
   
}



function actualizarNumerito() {
   let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
   numerito.innerText = nuevoNumerito;
}


//FILTRAR PRODUCTOS. 


function filtrarProductos() {
    let resultado = productos.filter(producto => producto.nombre.toUpperCase().includes(inputSearch.value.toUpperCase().trim()))

    if (resultado.length > 0) {
            cargarProductos(resultado)
        } else {
            console.warn("No se han encontrado coincidencias.")
        }
}


inputSearch.addEventListener("keypress", (e)=> {
    if (e.key === 'Enter' && inputSearch.value.trim() !== "") {
         filtrarProductos()
             } else {
         cargarProductos(productos)
    }
 })

inputSearch.addEventListener("search", ()=> {
if (inputSearch.value.trim() !== "") {
    filtrarProductos()
} else {
    cargarProductos(productos)
}
})


// LIBRERIAS

Swal.fire({
    title: 'Bienvenido!',
    text: 'Aprovecha nuestras ofertas de fin de año.',
    imageUrl: 'image/img-libreria.png',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
    confirmButtonText:"Aceptar",
    customClass: 'swal-wide',
})



const toast=(text,bgcolor)=>{
Toastify({
    text: text,
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "botton", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: bgcolor,
    },
    onClick: function(){} // Callback after click
  }).showToast()
}
