// BUSCA UN PRODUCTO POR MARCA

function buscarProducto(){
let productoBuscado=prompt("Ingrese el producto que busca por marca:")

let productoEncontrado= zapasMujer.filter((zapas)=> zapas.marca=== productoBuscado)

console.log(productoEncontrado)

}


// ACTUALIZA LA LISTA DE PRECIOS 
function actualizarPrecios(){
    let nuevoPrecio=(prompt("Ingrese el porcentaje para actualizar el precio."))

    let precioActualizado= zapasMujer.map((zapas)=>{
        return{
            id:zapas.id,
            marca:zapas.marca,
            precio:(zapas.precio*nuevoPrecio).toFixed(2)
        }

    })
    
    console.table(precioActualizado)

}

