//====================================== Desafio Obligatorio 2 - Eventos ==================================================

// Constantes globales

//Lista de productos disponibles
const ARRAYPRODUCTOS = [
  { id: 1, categoria: "Clases", nombre: "Clase de Baile", detalle: "Jazz", precio: 2000, cantidad: 30 },
  { id: 2, categoria: "Clases", nombre: "Clase de Baile", detalle: "Clasico", precio: 2000, cantidad: 30 },
  { id: 3,  categoria: "Clases", nombre: "Clase de Baile", detalle: "Reggaeton", precio: 2000, cantidad: 30},
  { id: 4,  categoria: "Clases", nombre: "Clase de Baile", detalle: "Comedia Musical", precio: 2000, cantidad: 30},
  { id: 5, categoria: "Roperito", nombre: "Remera de Baile", detalle: "Talle S", precio: 2800, cantidad: 10 },
  { id: 6, categoria: "Roperito", nombre: "Remera de Baile", detalle: "Talle M", precio: 2800, cantidad: 15 },
  { id: 7, categoria: "Roperito", nombre: "Remera de Baile", detalle: "Talle L", precio: 2800, cantidad: 20 },
  { id: 8, categoria: "Roperito", nombre: "Remera de Baile", detalle: "Talle XL", precio: 2800, cantidad: 20 },
  { id: 9, categoria: "Roperito", nombre: "Zapatillas de Baile", detalle: "Talle 36", precio: 8900, cantidad: 5 },
  { id: 10, categoria: "Roperito", nombre: "Zapatillas de Baile", detalle: "Talle 37",precio: 8900, cantidad: 5 },
  { id: 11, categoria: "Roperito", nombre: "Zapatillas de Baile", detalle: "Talle 38", precio: 8900, cantidad: 10 },
  { id: 12, categoria: "Roperito", nombre: "Zapatillas de Baile", detalle: "Talle 39",precio: 8900, cantidad: 5 },
];

//=========================================================================================================================
// Clases

// Arma el pedido que despues va a ser pusheado al carrito
class Pedido {
  constructor(producto,cantidad) {
      this.producto = producto;
      this.cantidad = cantidad;
  }
  calcularMontoPedido() {
      let montoPedido = this.cantidad * this.producto.precio;
      return parseFloat(montoPedido.toFixed(2));
    }
}


//Clase que tiene metodos para llenar el carrito, actualizar las cantidades, borra productos del pedido
class Carrito{
  constructor(){
    this.pedidos = [];

  }
  agregar(pedido){
    //Actualizo la cantidad en arrayproductos, verifico si hay stock
    let count = 0;
    let producto;
    for (producto of ARRAYPRODUCTOS){
      if (producto.id === pedido.producto.id) {
        if ((ARRAYPRODUCTOS[count].cantidad - pedido.cantidad) <0){
          alert(`No hay suficiente stock. Stock disponible ${ARRAYPRODUCTOS[count].cantidad}`);
          break;
        }
        else {ARRAYPRODUCTOS[count].cantidad -= pedido.cantidad;

          //Chequeo si el pedido ya fue cargado anteriormente. Si lo fue, le sumo la cantidad nueva:
          let indexOfPedido = this.pedidos.map(e => e.producto.id).indexOf(pedido.producto.id)
          console.log(`${indexOfPedido}`)
          if (indexOfPedido === -1){
            this.pedidos.push(pedido);
            break;
          }
          else {
            this.pedidos[indexOfPedido].cantidad += pedido.cantidad;  
            break;
          }

        }
      }
    else{
        count++
        continue
    }
    }
  }
  //Elimina items del pedido y restaura la cantidad en ARRAYPRODUCTOS
  eliminarPedido (id) {
    console.log(`Se elimina pedido ${id}`)
    console.log(`${ARRAYPRODUCTOS.map(e => e.id)}`)
    let indexOfPedido = ARRAYPRODUCTOS.map(e => e.id).indexOf(id)
    for (let pedido of this.pedidos) {
      if (pedido.producto.id === id) {
        let indiceBorrar = this.pedidos.findIndex(
          (pedido) => Number(pedido.producto.id) === Number(id)
        );
        ARRAYPRODUCTOS[indexOfPedido].cantidad += this.pedidos[indiceBorrar].cantidad;   
        this.pedidos.splice(indiceBorrar, 1);
        break;
      } else {
        continue;
      }
    }
    
  }

  totalCarrito () {
    //alert('aca3')
    console.log(this.pedidos)
    let total = 0;
    let pedido
    for (pedido of this.pedidos) {
      total = total + pedido.calcularMontoPedido();
    }
    console.log(total)
    return total;
  }
}

//=========================================================================================================================
// Variables globales

let categoriaTodos;
let categoriaClases;
let categoriaRoperito;
let contenedorProductos;
let carrito = new Carrito()

//=========================================================================================================================
// Funciones 

// Funcion para filtrar objetos por categorias 
// Como input toma un string y devuelve una lista de objetos (productos)
function arrayFiltrarProductoPorCategoria (nombreCategoria) {
    let arrayObjetosCategoria = ARRAYPRODUCTOS.filter(producto => producto.categoria === nombreCategoria);
    return arrayObjetosCategoria;
}

function inicializarElementos() {
  categoriaTodos = document.getElementById("btnTodos");
  categoriaClases = document.getElementById("btnClases");
  categoriaRoperito = document.getElementById("btnRoperito");
  contenedorProductos = document.getElementById("contenedor-productos");
}

function inicializarEventos() {
  categoriaTodos.onclick = () => pintarProductos(ARRAYPRODUCTOS);
  categoriaClases.onclick = () => pintarProductos(arrayFiltrarProductoPorCategoria("Clases"));
  categoriaRoperito.onclick = () => pintarProductos(arrayFiltrarProductoPorCategoria("Roperito"));
}

function menuCarrito(){
  let totalCompra = document.getElementById("contenedor-carrito");
  let pedidos = carrito.pedidos
  totalCompra.innerHTML = "";
  pedidos.forEach((pedido) => {
    let column = document.createElement("div");
    column.className = "col-md-3 mt-3";
    column.id = `contenedor-pedido-${pedido.producto.id}`
    column.innerHTML = `
    <div class="card"> 
      <div class="card-body">
        <p class="card-text">Categoría: ${pedido.producto.categoria}</p>
        <p class="card-text">Nombre: <b>${pedido.producto.nombre}</b></p>
        <p class="card-text">Detalle: <b>${pedido.producto.detalle}</b></p>
        <p class="card-text">Cantidad: <b>${pedido.cantidad}</b></p>
        <p class="card-text">Precio Unitario: <b>$ ${pedido.producto.precio}</b></p>
      </div>
      <div class="card-footer">
      <button class="btn btn-danger" id="botonEliminar-${pedido.producto.id}">ELIMINAR</button>
      </div>
    </div>
    `
  totalCompra.append(column)
   // alert("Poducto agregado exitosamente")
})
  let totalCarrito = document.createElement("div")
  totalCarrito.innerHTML= `<h4 id="contenedor-monto-total"> MONTO TOTALisimo: ${carrito.totalCarrito()} </h4>` 
  totalCompra.append(totalCarrito)
}

function eliminarDelCarrito(){
  let pedidos = carrito.pedidos
  // console.log('ACA')
  pedidos.forEach((pedido) => {
    let botonEliminar = document.getElementById(`botonEliminar-${pedido.producto.id}`);
    
    botonEliminar.addEventListener('click',function(){borrarOnClick(pedido.producto.id)})
    // console.log('HOLA')

  })
}

function borrarOnClick(id){
  carrito.eliminarPedido(id)
  let productoABorrar = document.getElementById(`contenedor-pedido-${id}`)
  productoABorrar.remove()
  let contenedorMontoTotal = document.getElementById("contenedor-monto-total")
   contenedorMontoTotal.innerHTML = `MONTO TOTAL: ${carrito.totalCarrito()}`
}

// function clearMenuCarrito(){
//   let totalCompra = document.getElementById("contenedor-carrito")
//   totalCompra.innerHTML = ""
// }

function agregarAlCarrito (producto) {
  //clearMenuCarrito()
  let pedido = new Pedido(producto, 1)
  // console.log(pedido)
  carrito.agregar(pedido);

  menuCarrito();
  // console.log(carrito.pedidos);
  eliminarDelCarrito();
  // console.log(carrito.pedidos)
  // console.log(carrito.totalCarrito())
}

function pintarProductos(arrayProd) {
  contenedorProductos.innerHTML = "";
  arrayProd.forEach((producto) => {
    let column = document.createElement("div");
    column.className = "col-md-3 mt-3";
    column.id = `columna-${producto.id}`;
    column.innerHTML = `
            <div class="card">
                <div class="card-body">
                  <p class="card-text">ID:
                    <b>${producto.id}</b>
                  </p>
                  <p class="card-text">Nombre:
                    <b>${producto.nombre}</b>
                  </p>
                  <p class="card-text">Detalle:
                    <b>${producto.detalle}</b>
                  </p>
                  <p class="card-text">Precio:
                    <b>$ ${producto.precio}</b>
                  </p>
            
                </div>
                <div class="card-footer">
                    <button class="btn btn-dark" id="botonAgregar-${producto.id}">AGREGAR</button>
                </div>
            </div>`;

    contenedorProductos.append(column);

    let botonAgregar = document.getElementById(`botonAgregar-${producto.id}`);
    botonAgregar.onclick = () => agregarAlCarrito(producto);
   
  });  
}

function mainTest(){
  inicializarElementos();
  inicializarEventos();
  pintarProductos(ARRAYPRODUCTOS);
  //console.log(carrito.pedidos)
}

//Llamado a la funcion mainTest
mainTest();

//=========================================================================================================================


//Definicion de funciones para distintas formas de pago (parte del desafio anterior)

// //  Calculo con descuento del 10% por pago en efectivo o transferencia
//   function calculareEectivoTransferencia (montoCarrito) {
//     let monto = montoCarrito * 0.9;
//     return monto.toFixed(2);
// }

// //Calculo por pago en 3 cuotas sin interes
// function calcularTresCuotas (montoCarrito) {
//     let montoCuota = montoCarrito / 3;
//     return montoCuota.toFixed(2);
// }

// //Calculo por pago en 6 cuotas con interes
// function calcularSeisCuotas (montoCarrito) {
//     let montoCuota = montoCarrito / 6;
//     return montoCuota.toFixed(2);
// }

// //Calculo por pago con 12 cuotas con interes del 30%
// function calcularDoceCuotas (montoCarrito) {
//     let montoCuota = (montoCarrito * 1.3) /12; 
//     return montoCuota.toFixed(2);
// }

// //Calculo del nuevo precio por el pago en 12 cuotas (con interes del 30%)
// function nuevoPrecioDoceCuotas (montoCarrito) {
//     let montoCuota = calcularDoceCuotas(montoCarrito);
//     let montoTotal = montoCuota * 12;
//     return montoTotal.toFixed(2);
// }

// //=========================================================================================================================
// // Clases

// // Menu para elegir las categorias que se quieren ver
// class MenuCategorias{
//   constructor(mensajeEntrada){
//       let mensaje = mensajeEntrada;
//       let count = 1;   
//       let categoria; 
//       for (categoria of MENUCATEGORIAS) {
//           mensaje += `\n${count}. ${categoria}`;
//           count++;
//       }

//       this.salir = false;
//       this.incorrecto = false;
//       switch (parseInt(prompt(mensaje))) {
//           case 1 : this.nombreCategoriaElegida = "Clases";
//           break;
//           case 2 : this.nombreCategoriaElegida = "Roperito";
//           break;
//           case 3: this.nombreCategoriaElegida =  "Todos";
//           break;
//           case 4: this.finalizar = true;
//           break;
//           case 5: this.salir =  true;
//           break;  
//           default: this.incorrecto = true;     
//           break; 
//       }
//   }

//   arrayProductosFiltrados(){
//       if (this.nombreCategoriaElegida != "Todos"){
//           return arrayFiltrarProductoPorCategoria(this.nombreCategoriaElegida);
//       } 
//       else if (this.nombreCategoriaElegida === "Todos") {
//           return ARRAYPRODUCTOS;
//       }
//   }
// }

// // Menu de los productos disponibles en la categoria elegida
// class MenuProductosDeCategoria{
//   constructor(mensajeEntrada, arrayProdsFiltrados){ // arrayProdsFiltrados es el return de la funcion arrayProductosFiltrados de la clase MenuCategorias
//       let mensaje = mensajeEntrada
//       let count =1
//       for(let producto of  arrayProdsFiltrados) {
//           mensaje += `\n${count}. ${producto.nombre} - ${producto.detalle} - $ ${producto.precio}`
//           count++
//        }
//        mensaje += `\n${count}. Volver al menu inicial`
       
//       this.volver = false
//       let opcionDeproductoElegido = parseInt(prompt(mensaje))
//       if (opcionDeproductoElegido > (arrayProdsFiltrados.length +1)) {
//         alert("No ha igresado una opcion correcta, intente nuevamente");
//         this.volver = true;
//       }
//       else if (opcionDeproductoElegido == (arrayProdsFiltrados.length +1)) {
//         this.volver = true;
//       } else {
//          this.productoElegido = arrayProdsFiltrados[opcionDeproductoElegido -1]; 
//       }
//   }
// }


// //=========================================================================================================================
// // Main

// function main (){
//   carrito = new Carrito()
//   while(true) {
//     menuCategorias = new MenuCategorias(`Bienvenido a la tienda del Instituto de Danzas Time Step, qué categoría desea ver? :`);

//     if(menuCategorias.salir == true) {
//       // alert(`Gracias por visitarnos`)
//       let titulo = document.getElementById("contenedor-titulo")
//       titulo.innerHTML = "<h3 class='titulo'>Gracias por visitarnos!</h3>";
//       break;
//     } 

//     else if (menuCategorias.finalizar == true) {
//       let titulo = document.getElementById("contenedor-titulo")
//       titulo.innerHTML = "<h3 class='titulo'>Resumen de su pedido: </h3>";
//       let parrafoTotal = document.createElement("p");
//       parrafoTotal.innerHTML= `<h3 class= 'titulo'>El monto total de su compra es de $ ${carrito.totalCarrito()}</h3>`;
//       document.body.append(parrafoTotal);
//       // alert(`El monto total de su compra es de $ ${carrito.totalCarrito()}`);
//       break;
//     }
//     else if (menuCategorias.incorrecto == true) {
//       alert("No ha igresado una opcion correcta, intente nuevamente");
//       continue;
//     } 
//     else {
//       menuProductosDeCategoria = new MenuProductosDeCategoria(`Que producto desea sumar al carrito:`, menuCategorias.arrayProductosFiltrados());

//       if (menuProductosDeCategoria.volver == false) {
//         let cantidad = parseInt(prompt(`Que cantidad de ${menuProductosDeCategoria.productoElegido.nombre + " " + menuProductosDeCategoria.productoElegido.detalle} queres comprar?`));
//         pedido = new Pedido(menuProductosDeCategoria.productoElegido, cantidad);
//         carrito.agregar(pedido);
//         alert(`El subtotal de su compra es $ ${carrito.totalCarrito()}`)
//       } 
//       else {
//         continue;
//       }  
//     }
//   }

//   //Me muestra en el DOM el resumen de la compra
//   const CARRITOPRODUCTOS = document.getElementById("contenedor-productos")
//   let pedidos = carrito.pedidos
//   pedidos.forEach((pedido) => {
//     let column = document.createElement("div");
//     column.className = "col-md-3 mt-3";
//     column.id = `columna-${pedido.producto.id}`
//     column.innerHTML = `
//     <div class="card"> 
//       <div class=""card-body>
//         <p class="card-text">Categoría: ${pedido.producto.categoria}</p>
//         <p class="card-text">Nombre: <b>${pedido.producto.nombre}</b></p>
//         <p class="card-text">Detalle: <b>${pedido.producto.detalle}</b></p>
//         <p class="card-text">Cantidad: <b>${pedido.cantidad}</b></p>
//         <p class="card-text">Precio Unitario: <b>$ ${pedido.producto.precio}</b></p>
//       </div>
//     </div>
//     `
//     CARRITOPRODUCTOS.append(column)
// });

//   }

  // main()


    // ========================================================================================================
  // let pedidos
  // pedidos = main();
  // const CARRITOPRODUCTOS = document.getElementById("contenedor-productos")
  
  // pedidos.forEach((producto) => {
  //   console.log(producto)
  // });

  
  // pedidos.forEach((pedido) => {
  //       let column = document.createElement("div");
  //       column.className = "col-md-3 mt-3";
  //       column.id = `columna-${pedido.producto.id}`
  //       column.innerHTML = `
  //       <div class="card"> 
  //         <div class=""card-body>
  //           <p class="card-text">Categoría: ${pedido.producto.categoria}</p>
  //           <p class="card-text">Nombre: <b>${pedido.producto.nombre}</b></p>
  //           <p class="card-text">Detalle: <b>${pedido.producto.detalle}</b></p>
  //           <p class="card-text">Precio: <b>$ ${pedido.producto.precio}</b></p>
  //         </div>
  //       </div>
  //       `
  //       CARRITOPRODUCTOS.append(column)
  // });

// Me muestra todos los productos en el DOM
// const CONTENEDORPRODUCTOS = document.getElementById("contenedor-productos")

//   ARRAYPRODUCTOS.forEach((producto) => {
//     let column = document.createElement("div");
//     column.className = "col-md-4 mt-3";
//     column.id = `columna-${producto.id}`
//     column.innerHTML = `
//     <div class="card"> 
//       <div class=""card-body>
//         <p class="card-text">Categoría: ${producto.categoria}</p>
//         <p class="card-text">Nombre: <b>${producto.nombre}</b></p>
//         <p class="card-text">Detalle: <b>${producto.detalle}</b></p>
//         <p class="card-text">Precio: <b>$ ${producto.precio}</b></p>
//       </div>
//     </div>
//     `
//     CONTENEDORPRODUCTOS.append(column)
//   });



// ========================================================================================================

//Desafio de distintas formas de pago disponibles.

// montoCarrito = carrito.totalCarrito();

// while (true) {
//     if (montoCarrito > 0) {
   
//     const FORMASDEPAGO = parseInt(prompt("Elige la opcion de pago que quieres conocer: \n 1. Efectivo o transferencia bancaria (-10%) \n 2. Tarjeta de credito 3 cuotas sin interes \n 3. Tarjeta de credito 6 cuotas sin interes \n 4. Tarjeta de credito 12 cuotas con interes (+30%)"));
    
//     switch (FORMASDEPAGO) {
//         case 1 :
//             alert("El monto por pago en efectivo o transferencia es de " + calculareEectivoTransferencia(montoCarrito) + " pesos.-");
//             break;
                
//         case 2 :
//             alert("Ud podra abonar en 3 cuotas sin interes de " + calcularTresCuotas(montoCarrito) + " pesos cada una.-");
//             break;
        
//             case 3 :
//                 alert("Ud podra abonar en 6 cuotas sin interes de " + calcularSeisCuotas(montoCarrito) + " pesos cada una.-");
//                 break; 
                    
//             case 4 :
//                 alert("Ud podra abonar en 12 cuotas de " + calcularDoceCuotas(montoCarrito) + " pesos cada una. Abonando un total de " + nuevoPrecioDoceCuotas(montoCarrito) + " pesos.-");
//                 break; 
    
//             default :
//                 alert("No ha ingresado una opcion correcta");
//                 break; 
//             }
    
//             alert("Gracias por su consulta");
//             break;
//         } else {
//              alert("Monto de carrito invalido");
//              break;
//             }
//     };

