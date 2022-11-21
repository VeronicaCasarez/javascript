const productos=[
                {id:0,
                item:"New",
                marca:"New Balance", 
                genero:"mujer", 
                categoria:{nombre:"zapasmujer", 
                            id:"mujeres"}, 
                talle:35,
                imagen:"./image/zapatillas-mujer-new-balance.jpg",
                texto:"New Balance de mujer, del 35 al 37",   
                modeloProveedor:1625,  
                precio:6000},

                {id:1,
                item:"New",
                marca:"New Balance", 
                genero:"mujer", 
                categoria:{nombre:"zapasmujer", 
                            id:"mujeres"}, 
                talle:36, 
                imagen:"./image/zapatillas-mujer-new-balance.jpg",
                modeloProveedor:1626, 
                
                precio:7000 },

                {id:2,
                item:"Sale",
                marca:"Converse", 
                genero:"hombre", 
                categoria:{nombre:"zapashombre", 
                id:"hombres"},
                talle:35, 
                imagen:"./image/zapatillas-mujer-new-balance.jpg",
                modeloProveedor:1645, 
                
                precio:5000 },

                {id:3,
                item:"Sale",
                marca:"Converse", 
                genero:"mujer", 
                categoria:{nombre:"zapashombre", 
                id:"hombres"},
                talle:35, 
                imagen:"./image/zapatillas-mujer-new-balance.jpg",
                modeloProveedor:1686, 
                
                precio:5000 },

]



// const contenedorProductos= document.querySelector("#contenedorProductos")
// const botonesCategorias=document.querySelectorAll(".botonCategoria")
// const tituloPrincipal=document.querySelectorAll(".botonCategoria")

// function cargarProductos(productosElegidos){

//     contenedorProductos.innerHTML=""
//     productosElegidos.forEach(producto => {

//         const div =document.createElement("div")
//         div.classList.add("producto")
//         div.innerHTML=`
//             <span class="textoNew">${producto.item}</span>
//             <img class="cardImg" src="${producto.imagen}" alt="${producto.marca}">
//             <div class="cardDetalles">
//               <h5 class="cardTitulo">${producto.marca} </h5>
//               <p class="cardTexto">${producto.texto}.</p>
//               <p class="cardPrecio">${producto.precio}</p>
//               <div class="iconComprar">
//                 <button  class="botonComprar" title="Agregar al carrito" id="${producto.id}" href="">Agregar <img  src="./image/carrito-de-compras.png" alt="" class="imgCarrito"></button>
//               </div>
//             </div>
//           `
//     })
//     contenedorProductos.append(div)
// }
// cargarProductos(productos)


// botonesCategorias.forEach(boton=>{
//     boton.addEventListener("click",(e)=>{

//         botonesCategoria.forEach(boton=>boton.classList.remove("active"))
//         e.currentTarget.classList.add("active")
        
//         if(e.currentTarget.id !="todos"){
//         const productosCategoria = productos.find(producto=>producto.categoria.id=== e.currentTarget.id)
//         tituloPrincipal.innerHTML="Todos los productos"

//         const productosBoton=productos.filter(producto=>producto.categoria.id=== e.currentTarget.id)
//             cargarProductos(productosBoton)
//         }else{
//             tituloPrincipal.innerHTML="Todos los productos"
//             cargarProductos(productos)
//         }
//     })

// })


const contenedorProductos = document.querySelector("#contenedorProductos");
const botonesCategorias = document.querySelectorAll(".botonCategoria");
const tituloPrincipal = document.querySelector("#tituloPrincipal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


function cargarProductos(productosElegidos) {

    // contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <span class="textoNew">${producto.item}</span>
                     <img class="cardImg" src="${producto.imagen}" alt="${producto.marca}">
                     <div class="cardDetalles">
                        <h5 class="cardTitulo">${producto.marca} </h5>
                        <p class="cardTexto">${producto.texto}.</p>
                        <p class="cardPrecio">${producto.precio}</p>
                        <div class="iconComprar">
                            <button  class="botonComprar" title="Agregar al carrito" id="${producto.id}" href="">Agregar <img  src="./image/carrito-de-compras.png" alt="" class="imgCarrito"></button>
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