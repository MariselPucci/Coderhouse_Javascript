// Simulador de opciones de pago 

// Funciones con calculo segun distintas formas de pago

//Calculo con descuento del 10% por pago en efectivo o transferencia
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


// Main 

while (true) {
    const MONTOCARRITO = parseFloat(prompt("Ingrese el monto total de su carrito para conocer las opciones de pago"));


    if (MONTOCARRITO > 0) {

        const FORMASDEPAGO = parseInt(prompt("Elige la opcion de pago que quieres conocer: \n 1. Efectivo o transferencia bancaria (-10%) \n 2. Tarjeta de credito 3 cuotas sin interes \n 3. Tarjeta de credito 6 cuotas sin interes \n 4. Tarjeta de credito 12 cuotas con interes (+30%)"));

        switch (FORMASDEPAGO) {
            case 1 :
                alert("El monto por pago en efectivo o transferencia es de " + calculareEectivoTransferencia(MONTOCARRITO) + " pesos.-");
                break;
            
            case 2 :
                alert("Ud podra abonar en 3 cuotas sin interes de " + calcularTresCuotas(MONTOCARRITO) + " pesos cada una.-");
                break;
    
            case 3 :
                 alert("Ud podra abonar en 6 cuotas sin interes de " + calcularSeisCuotas(MONTOCARRITO) + " pesos cada una.-");
                break; 
                
            case 4 :
                alert("Ud podra abonar en 12 cuotas de " + calcularDoceCuotas(MONTOCARRITO) + " pesos cada una. Abonando un total de " + nuevoPrecioDoceCuotas(MONTOCARRITO) + " pesos.-");
                break; 

            default :
                alert("No ha ingresado una opcion correcta");
                break; 
        }

        alert("Gracias por su consulta");
        break;
   
    }   else {
        alert("Lo siento no se ha ingresado un valor correcto, intentente nuevamente");
    }
};


