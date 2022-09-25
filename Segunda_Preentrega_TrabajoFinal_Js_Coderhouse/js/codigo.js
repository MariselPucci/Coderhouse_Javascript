//====================================== Segunda Pre-entrega Trabajo Final Js==================================================

// Constantes globales

//Lista de productos disponibles
const ARRAYPRODUCTOS = [
  { id: 1, categoria: "Clases", nombre: "Clase de Baile", detalle: "Hip-Hop", precio: 2000, cantidad: 30, img: "../img/clases_1.jpg" },
  { id: 2, categoria: "Clases", nombre: "Clase de Baile", detalle: "Jazz Fusión", precio: 2300, cantidad: 30, img: "../img/clases_2.jpg" },
  { id: 3,  categoria: "Clases", nombre: "Clase de Baile", detalle: "Reggaeton Kids", precio: 1300, cantidad: 20,  img: "../img/clases_3.jpg"},
  { id: 4,  categoria: "Clases", nombre: "Clase de Baile", detalle: "Street Intermedio", precio: 2000, cantidad: 30,  img: "../img/clases_4.jpg"},
  { id: 5,  categoria: "Clases", nombre: "Clase de Baile", detalle: "Reggaeton Intermedio", precio: 2000, cantidad: 30,  img: "../img/clases_5.jpg"},
  { id: 6,  categoria: "Clases", nombre: "Clase de Baile", detalle: "Jazz Pop 9-12 años", precio: 1300, cantidad: 30,  img: "../img/clases_6.jpg"},
  { id: 7,  categoria: "Clases", nombre: "Clase de Baile", detalle: "Coreo Kids", precio: 2000, cantidad: 30,  img: "../img/clases_7.jpg"},
  { id: 8,  categoria: "Clases", nombre: "Clase de Baile", detalle: "Reggaeton Kids", precio: 2000, cantidad: 30,  img: "../img/clases_8.jpg"},
  { id: 9,  categoria: "Clases", nombre: "Clase de Baile", detalle: "Reggaeton Kids", precio: 2000, cantidad: 30,  img: "../img/clases_9.jpg"},
  { id: 10,  categoria: "Clases", nombre: "Clase de Baile", detalle: "Coreo Kids", precio: 2000, cantidad: 30,  img: "../img/clases_10.jpg"},
  { id: 11,  categoria: "Clases", nombre: "Clase de Baile", detalle: "Reggaeton Kids", precio: 2000, cantidad: 30,  img: "../img/clases_11.jpg"},
  { id: 12,  categoria: "Clases", nombre: "Clase de Baile", detalle: "Reggaeton Kids", precio: 2000, cantidad: 30,  img: "../img/clases_12.jpg"},
  { id: 13, categoria: "Roperito", nombre: "Remera de Baile", detalle: "Talle S", precio: 2800, cantidad: 10, img:"../img/remera_baile.jpg"  },
  { id: 14, categoria: "Roperito", nombre: "Remera de Baile", detalle: "Talle M", precio: 2800, cantidad: 15, img:"../img/remera_baile.jpg" },
  { id: 15, categoria: "Roperito", nombre: "Remera de Baile", detalle: "Talle L", precio: 2800, cantidad: 20, img:"../img/remera_baile.jpg" },
  { id: 16, categoria: "Roperito", nombre: "Remera La Realidad", detalle: "Talle XL", precio: 3200, cantidad: 20, img:"../img/remera_programacion.jpg" },
  { id: 17, categoria: "Roperito", nombre: "Zapatillas de Baile", detalle: "Talle 36", precio: 8900, cantidad: 5, img:"../img/zapatillas_baile.jpg" },
  { id: 18, categoria: "Roperito", nombre: "Zapatillas de Baile", detalle: "Talle 37",precio: 8900, cantidad: 5, img:"../img/zapatillas_baile.jpg" },
  { id: 19, categoria: "Roperito", nombre: "Zapatillas de Baile", detalle: "Talle 38", precio: 8900, cantidad: 10 , img:"../img/zapatillas_baile.jpg"},
  { id: 20, categoria: "Roperito", nombre: "Zapatillas de Baile", detalle: "Talle 39",precio: 8900, cantidad: 5, img:"../img/zapatillas_baile.jpg" },
];



//=========================================================================================================================
// Variables globales

let categoriaTodos;
let categoriaClases;
let categoriaRoperito;
let contenedorProductos;

//=========================================================================================================================
// Funciones 

function inicializarElementos() {
  categoriaTodos = document.getElementById("btnTodos");
  categoriaClases = document.getElementById("btnClases");
  categoriaRoperito = document.getElementById("btnRoperito");
  contenedorProductos = document.getElementById("contenedor-productos");
  
}

function inicializarEventos(carrito) {
  categoriaTodos.onclick = () => pintarProductos(ARRAYPRODUCTOS,carrito);
  categoriaClases.onclick = () => pintarProductos(arrayFiltrarProductoPorCategoria("Clases"),carrito);
  categoriaRoperito.onclick = () => pintarProductos(arrayFiltrarProductoPorCategoria("Roperito"),carrito);
}

// Funcion para filtrar objetos por categorias 
// Como input toma un string y devuelve una lista de objetos (productos)
function arrayFiltrarProductoPorCategoria (nombreCategoria) {
  let arrayObjetosCategoria = ARRAYPRODUCTOS.filter(producto => producto.categoria === nombreCategoria);
  return arrayObjetosCategoria;
}

function pintarProductos(arrayProd,carrito) {
  contenedorProductos.innerHTML = "";
  arrayProd.forEach((producto) => {
    let column = document.createElement("div");
    column.className = "col-sm-6 col-md-3 mt-3";
    column.id = `columna-${producto.id}`;
    column.innerHTML = `
            <div class="card">
              <div class="inner"> 
                <img src="${producto.img}" class="card-img-top"><img/>
              <div/>
                <div class="card-body">
                  <p class="card-text ">
                    <b>${producto.nombre}</b>
                  </p>
                  <p class="card-text">
                    <b>${producto.detalle}</b>
                  </p>
                  <p class="card-text">
                    <b>$ ${producto.precio}</b>
                  </p>
            
                </div>
                <div class="card-footer">
                    <button class="btn btn-dark" id="botonAgregar-${producto.id}">AGREGAR</button>
                </div>
            </div>`;

    contenedorProductos.append(column);

    let botonAgregar = document.getElementById(`botonAgregar-${producto.id}`);
    let carritoContador = document.getElementById(`carrito-contador`)
    
    botonAgregar.onclick = () => {let pedido = new Pedido (producto, 1);
                                  let value = carrito.agregar(pedido)
                                  // console.log(`value= ${value}`)
                                  let indexOfPedido = carrito.pedidos.map(e => e.producto.id).indexOf(pedido.producto.id)
                                  // console.log(`index of pedido ${indexOfPedido}`);
                                  if (indexOfPedido != -1 && carrito.productosStock.disponibilidadStock(pedido.producto.id,carrito.pedidos[indexOfPedido].cantidad)){
                                  carrito.actualizarCarrito()
                                  // console.log(`Seteando contadordelcarrito ${carrito.contadorDelCarrito}`)
                                  localStorage.setItem("contadorDelCarrito", `${carrito.contadorDelCarrito}`)
                                  carritoContador.innerHTML=`${carrito.contadorDelCarrito}`
                                }
                                else{
                                  if (value){
                                  carrito.eliminar(pedido)
                                  }
                                }
                                };
  });  
}

function mainTest(){
  let productosStock = new ProductosStock()
  let carrito = new Carrito(productosStock)
  inicializarElementos();
  inicializarEventos(carrito);
  carrito.actualizarCarrito()
  pintarProductos(ARRAYPRODUCTOS,carrito)
  mostrarCard()
}

function mostrarCard(){
    let productsId = document.getElementById("products-id")
    let iconoCarrito = document.getElementById("icono-card")
    let cerrarCard = document.getElementById("btn-cerrar")
    iconoCarrito.onmouseover = () => {productsId.classList.add("productsMostrar")}
    cerrarCard.onclick = () => {productsId.classList.remove("productsMostrar")}
}

//=========================================================================================================================
// Clases

// Clase que maneja el stock disponible - control de stock
class ProductosStock {
  constructor() {
    this.productosTotales = ARRAYPRODUCTOS
  }

  verificarStock(id) {
    let checkado = this.productosTotales.some(function(e){
      if (e.id==id){
        const cantidadDisponible=e.cantidad;
        if (cantidadDisponible>0){
          return true
        }
      }
    })
    return checkado
  }

  disponibilidadStock(id,cantidad) {
    let indexOfProducto = this.productosTotales.map(e => e.id).indexOf(id)
    const cantidadDisponible = this.productosTotales[indexOfProducto].cantidad
    if (this.verificarStock(id) && cantidadDisponible>=cantidad){
      return true
    } else{
      alert(`No hay suficiente stock. Stock disponible ${this.productosTotales[indexOfProducto].cantidad}`);
      return false
    }
  }

  aumentarStock (id,cantidad) {
    let indexOfProducto = this.productosTotales.map(e => e.id).indexOf(id)

    for (let producto of this.productosTotales) {
      if (producto.id === id) {
       //Esto aumenta la cantidad al stock 
       this.productosTotales[indexOfProducto].cantidad += cantidad; 
       break;
     } else {
       continue;
     }
    }
  }

  disminuirStock (id,cantidad) {
    let indexOfProducto = this.productosTotales.map(e => e.id).indexOf(id)

    for (let producto of this.productosTotales) {
      if (producto.id === id) {
       //Esto disminuye la cantidad al stock 
       this.productosTotales[indexOfProducto].cantidad -= cantidad; 
       break;
     } else {
       continue;
     }
    }
  }
}

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
  constructor(productosStock){
    if (localStorage.length != 0){
      for (let llaves in localStorage){
        // console.log(`llaves ${llaves}`)
      }
      this.contadorDelCarrito = parseInt(localStorage.getItem("contadorDelCarrito"))
      let listaDePedidosJSON = localStorage.getItem("pedidos")
      console.log(listaDePedidosJSON)
      let listaDePedidos = JSON.parse(listaDePedidosJSON)
      let pedidos =[]
      //Convierto la info de los pedidos en instancias de Pedido:
      for (let pedido of listaDePedidos){
        pedidos.push(new Pedido(pedido.producto,pedido.cantidad))
      }
      this.pedidos = pedidos
    } 
    else{
    this.pedidos = [];
    this.contadorDelCarrito = 0;
    }
    this.productosStock = productosStock
  }

  actualizarCarrito() {    
    let pedidosJSON = JSON.stringify(this.pedidos);
    localStorage.setItem("pedidos", pedidosJSON);
    localStorage.setItem("contadorDelCarrito",`${this.contadorDelCarrito}`)
    // console.log(`actualizarCarrito, ${this.pedidos.length}`)
    this.pintarCarrito()
  }

  eliminar(pedido){
    let indexOfPedido = this.pedidos.map(e => e.producto.id).indexOf(pedido.producto.id)
    if (indexOfPedido==-1){
      this.pedidos.splice(indexOfPedido,1)
    }
    else {this.pedidos[indexOfPedido].cantidad -= pedido.cantidad;
    }
    this.contadorDelCarrito--
  }

  agregar(pedido){
    //Verifico si hay stock y procede a agregar al carrito. 
    let indexOfPedido = this.pedidos.map(e => e.producto.id).indexOf(pedido.producto.id)
    const disponibilidadStock = this.productosStock.disponibilidadStock(pedido.producto.id, pedido.cantidad)

    if (disponibilidadStock){
      if (indexOfPedido==-1){
        this.pedidos.push(pedido)
      }
      else {this.pedidos[indexOfPedido].cantidad += pedido.cantidad;
      }
      this.contadorDelCarrito++
      return true
    }
    else{
      return false
    }
  }

  borrarOnClick(id){
    let indiceBorrar = this.pedidos.findIndex(
      (pedido) => Number(pedido.producto.id) === Number(id)
    );
    this.contadorDelCarrito = this.contadorDelCarrito - this.pedidos[indiceBorrar].cantidad
    this.pedidos.splice(indiceBorrar, 1);
    // Esto elimina del DOM el pedido eliminado del carrito
    let productoABorrar = document.getElementById(`contenedor-pedido-${id}`);
    productoABorrar.remove();
    let contenedorMontoTotal = document.getElementById("contenedor-monto-total");
    contenedorMontoTotal.innerHTML = `MONTO TOTAL: ${this.totalCarrito()}`;
    this.actualizarCarrito();
  }

  vaciarCarrito(){
    this.pedidos=[]
    let carritoContador = document.getElementById(`carrito-contador`)
    this.contadorDelCarrito = 0
    carritoContador.innerHTML = `${this.contadorDelCarrito}`
    localStorage.clear()
    this.actualizarCarrito()
  }

  totalCarrito () {
    let total = 0;
    for (let pedido of this.pedidos) {
      total = total + pedido.calcularMontoPedido();
    }
    return total;
  }

  //Muestra los pedidos del carrito
  pintarCarrito(){
    let carritoContador = document.getElementById("carrito-contador")
    carritoContador.innerHTML = this.contadorDelCarrito
    let totalCompra = document.getElementById("card-items-id");
    let pedidos = this.pedidos
    totalCompra.innerHTML = "";
    let vaciarCarrito = document.createElement("div")
    vaciarCarrito.className = "container p-3 d-flex justify-content-between"
    vaciarCarrito.innerHTML = `
    <h3 class="">Mi carrito<h3/>
    <a id ="eliminar-carrito" href="#">
    <img src="img/icono_papelera.png" alt="">
    <a>
    `
    totalCompra.append(vaciarCarrito)
   
    let eliminarCarrito = document.getElementById("eliminar-carrito")
    eliminarCarrito.onclick = () => this.vaciarCarrito()

    pedidos.forEach((pedido) => {
      let row = document.createElement("div");
      row.className = "row mt-3";
      row.id = `contenedor-pedido-${pedido.producto.id}`
      row.innerHTML = `
      <div class="item"> 
          <img src="${pedido.producto.img}"></img>
          <div class="item-content"
            <h5><b>${pedido.producto.nombre}</b></h5>
            <h5><b>${pedido.producto.detalle}</b></h5>
            <h5>Cantidad: <b>${pedido.cantidad}</b></h5>
            <h6>Precio Unitario: <b>$ ${pedido.producto.precio}</b></h6>
          </div>
          <span id="botonEliminar-${pedido.producto.id}" class="btn-eliminar">X</span> 
      </div>
      `
    totalCompra.append(row)
    
    let botonEliminar = document.getElementById(`botonEliminar-${pedido.producto.id}`);
    botonEliminar.onclick = () => this.borrarOnClick(pedido.producto.id);
    //  alert("Poducto agregado exitosamente")
  }) 


    let totalCarrito = document.createElement("div")
    totalCarrito.innerHTML= `<h4 id="contenedor-monto-total" class="mt-3"> MONTO TOTAL: $ ${this.totalCarrito()} </h4>` 
    totalCompra.append(totalCarrito)

     let finalizarCompra = document.createElement("div")
     finalizarCompra.innerHTML = `<button id= "boton-iniciar-compra" class="btn m-3">INICIAR COMPRA</button>`
     totalCompra.append(finalizarCompra)

     //Cuando se finaliza una compra se limpia el storage/carrito y actualiza las cantidades que fueron compradas en el stock disponible
     let botonFinalizar = document.getElementById("boton-iniciar-compra")
     botonFinalizar.onclick = () => { alert(`Gracias por su compra en Instituto de Danzas Time Step \n Total: $ ${this.totalCarrito()}`)
                                      this.iniciarCompraCarrito()
                                    }
  }

  iniciarCompraCarrito () {
    // Disminuye la cantidad de productos comprados en el stock disponible
    for (let pedido of this.pedidos) {
      this.productosStock.disminuirStock(pedido.producto.id, pedido.cantidad)
    }
    this.vaciarCarrito()
  }
} //Fin de clase Carrito

//=========================================================================================================================
//Llamado a la funcion mainTest

mainTest()



