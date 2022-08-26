// Adivina la palabra clave

const PALABRA= "JAVASCRIPT";
let expresion = "";

alert("Ordena la palabra clave, estas son las letras: TAJSVIACRP. Tenes 5 intentos para adivinarla, exitos!");

while (expresion != PALABRA) {
    for (i =1; i <=5; i++) {

        expresion = prompt("Ingresa la palabra clave");

        if (expresion.toUpperCase() === PALABRA) {
            alert("Felicitaciones encontraste la palabra clave: JAVASCRIPT");
            break;
        } else if (i == 5) {
            alert("Lo lamento, no encontraste la palabra correcta. Intenta nuevamente");
            break; 
        }else {
             alert("La palabra ingresada es incorrecta, ingresa una nueva palabra");
        }
    } 
    break;
}

