// // Desafio Complementario 2 - Incoporar arrays a nuestro simulador

// const CARRITO = [];

// const PRECIOREMERA = 2400;
// const PRECIOGORRA = 850;
// const PRECIOBUZO = 4600;

// class Pedido {
//     constructor(nombreProducto, cantidadProducto){
//         this.nombreProducto = nombreProducto.toUpperCase();
//         this.cantidadProducto = cantidadProducto;
//     }

//     calcularMontoPedido(precioProducto) {
//         let montoPedido = this.cantidadProducto * precioProducto;
//         return parseFloat(montoPedido.toFixed(2));
//     }
// }

// let eleccion = "";

// //Agregar pedidos al carrito

// while(eleccion != 4) {
//     let eleccion = parseInt(prompt(`Seleccione el producto que desea agregar a su pedido: \n 1.Remera (${PRECIOREMERA} pesos) \n 2.Gorra(${PRECIOGORRA} pesos)\n 3.Buzo(${PRECIOBUZO} pesos) \n 4.Finalizar Pedido`)); 
//     if (eleccion === 4) {
//         break;
//     } else if (eleccion < 4 && eleccion >= 1) {
//         let cantidadP = parseInt(prompt("Ingrese la cantidad del producto seleccionado que quiere sumar a su pedido: "));

//         switch(eleccion) {
//             case 1: CARRITO.push(new Pedido("Remera", cantidadP));
//             break;
//             case 2: CARRITO.push(new Pedido("Gorra", cantidadP));
//             break;
//             case 3: CARRITO.push(new Pedido("Buzo", cantidadP));
//             break; 
//         }
//     } else {
//         alert("No ha ingresado una opcion correcta");
//     }
// }

// console.log(CARRITO);

// let montoCarrito = 0;
// let montoPedidoP = 0;

// //Calcular monto total del carrito

// for (pedido of CARRITO){

//     switch (pedido.nombreProducto) {
//         case "REMERA": montoPedidoP = pedido.calcularMontoPedido(PRECIOREMERA);
//         // alert(montoPedidoP);
//         break;
//         case "GORRA": montoPedidoP = pedido.calcularMontoPedido(PRECIOGORRA);
//         // alert(montoPedidoP);
//         break;
//         case "BUZO": montoPedidoP = pedido.calcularMontoPedido(PRECIOBUZO);
//         // alert(montoPedidoP);
//         break;
//     }
//    montoCarrito = montoCarrito + montoPedidoP;
// }

// //Definicion de funciones para distintas formas de pago (esto era parte del desafio anterior que le cambie el ingreso del monto total del carrito)

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

// alert(`El monto total de su pedido es: ${montoCarrito} pesos.-`)
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




//==================== Otra forma =============================

let productos = [
    {
      nombre: 'Remera',
      precio: 2400
    },
    {
      nombre: 'Gorra',
      precio: 850
    },
    {
      nombre: 'Buzo',
      precio: 4600
    }
  ]
  
  function crearMensaje (){
    let mensaje = 'Que producto desea comprar?'
    let count = 1
  
    for(let producto of productos){
      mensaje += `\n${count}. ${producto.nombre} - $ ${producto.precio}`
      count++
    }
  
    mensaje += `\n${count}. Salir`
  
    return mensaje
  }
  
  // prompt(crearMensaje())
  
  function cantidad (producto){
    return prompt(`Cuantas unidades de ${producto.nombre} desea comprar.`)
  }
  
  function subtotal (cantidad, producto){
    alert(`Compro ${cantidad} unidad de ${producto.nombre} por $ ${cantidad * producto.precio}`)
    return cantidad * producto.precio
  }
  
  function calcularTotal (arr){
    return arr.reduce((acc, el) => acc + el, 0)
  }
  
  let opcion = 0
  let total = []
  
  do {
    opcion = parseInt(prompt(crearMensaje()))
  
    if(opcion === productos.length + 1){
      alert(`Su total fue de $ ${calcularTotal(total)}.`)
      break
    }
  
    total.push(subtotal(cantidad(productos[opcion - 1]), productos[opcion - 1]))
  
  } while (true)


//   Definicion de funciones para distintas formas de pago (esto era parte del desafio anterior que le cambie el ingreso del monto total del carrito)

//  Calculo con descuento del 10% por pago en efectivo o transferencia
  function calculareEectivoTransferencia (montoCarrito) {
    let monto = montoCarrito * 0.9;
    return monto.toFixed(2);
}

//Calculo por pago en 3 cuotas sin interes
function calcularTresCuotas (montoCarrito) {
    let montoCuota = montoCarrito / 3;
    return montoCuota.toFixed(2);
}

//Calculo por pago en 6 cuotas con interes
function calcularSeisCuotas (montoCarrito) {
    let montoCuota = montoCarrito / 6;
    return montoCuota.toFixed(2);
}

//Calculo por pago con 12 cuotas con interes del 30%
function calcularDoceCuotas (montoCarrito) {
    let montoCuota = (montoCarrito * 1.3) /12; 
    return montoCuota.toFixed(2);
}

//Calculo del nuevo precio por el pago en 12 cuotas (con interes del 30%)
function nuevoPrecioDoceCuotas (montoCarrito) {
    let montoCuota = calcularDoceCuotas(montoCarrito);
    let montoTotal = montoCuota * 12;
    return montoTotal.toFixed(2);
}

let montoCarrito = calcularTotal(total);

//==========================================================



while (true) {
    if (montoCarrito > 0) {
   
    const FORMASDEPAGO = parseInt(prompt("Elige la opcion de pago que quieres conocer: \n 1. Efectivo o transferencia bancaria (-10%) \n 2. Tarjeta de credito 3 cuotas sin interes \n 3. Tarjeta de credito 6 cuotas sin interes \n 4. Tarjeta de credito 12 cuotas con interes (+30%)"));
    
    switch (FORMASDEPAGO) {
        case 1 :
            alert("El monto por pago en efectivo o transferencia es de " + calculareEectivoTransferencia(montoCarrito) + " pesos.-");
            break;
                
        case 2 :
            alert("Ud podra abonar en 3 cuotas sin interes de " + calcularTresCuotas(montoCarrito) + " pesos cada una.-");
            break;
        
            case 3 :
                alert("Ud podra abonar en 6 cuotas sin interes de " + calcularSeisCuotas(montoCarrito) + " pesos cada una.-");
                break; 
                    
            case 4 :
                alert("Ud podra abonar en 12 cuotas de " + calcularDoceCuotas(montoCarrito) + " pesos cada una. Abonando un total de " + nuevoPrecioDoceCuotas(montoCarrito) + " pesos.-");
                break; 
    
            default :
                alert("No ha ingresado una opcion correcta");
                break; 
            }
    
            alert("Gracias por su consulta");
            break;
        } else {
             alert("Monto de carrito invalido");
             break;
            }
    };






