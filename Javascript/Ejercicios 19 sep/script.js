/* 1. Programa que dada la edad de una persona indique si es mayor o menor de edad.
let edad = prompt("Ingrese su edad: ");
if (edad >= 18) {
 alert("Usted es mayor de edad.");
} else {
  alert("Usted es menor de edad.");
}
*/

/*2. Dada las tres calificaciones que un estudiante tuvo en su curso:
A. Determina su promedio.
B. Indicar si el estudiante aprobó o no aprobó el curso.
(Las notas deben ser de 1 a 10 y aprueba con un promedio mayor a 6).

let claf1 = prompt ("Ingrese las calificacion:");
let claf2 = prompt ("Ingrese la calificación:");
let claf3 = prompt ("Ingrese la calificación:");
let tclaf = parseInt (claf1)+ parseInt(claf2)+ parseInt(claf3);
let prom = parseInt (tclaf/3);
alert("Su clasificación es de: "+prom)

if (prom>6){
  alert("Su calificación es de: " +prom+ ". Por lo tanto, aprobó el curso.");
}
  else{
    alert("Su calificación es de: " +prom+ ". Por lo tanto, NO aprobó el curso.");
}
*/

/* 3. Dado los números A y B, determinar si A es mayor, menor o igual que B.
function compararNumeros(a, b) {
    if (a > b) {
      return "A es mayor que B.";
    } else if (a < b) {
      return "A es menor que B.";
    } else {
      return "A es igual a B.";
    }
  }
  // Declaración de variables
  let a = prompt("Ingrese el número A: ");
  let b = prompt("Ingrese el número B: ");
  let resultado = compararNumeros(a, b); 
  alert(resultado);
*/

/* 4. Que lea dos números y los imprima en forma ascendente.
var A = prompt ("ingrese un numero:");
var B = prompt ("ingrese un numero:");

    if  (A<B){
        alert(A+" "+B);
} 
    else if (A>B){
        alert(B+" "+A);
}
    else{
        alert (A+''+B)
}
*/

/* 5. Dado el peso de una persona:
	A. Si el peso es menor o igual a 40 kilogramos. Muestre el mensaje persona baja de peso.
	B. Si el peso es entre 41 y 70 kilogramos. Muestre el mensaje persona peso promedio.
	C. Si el peso es mayor a 71 kilogramos. Muestre el mensaje persona con sobre peso.

let peso = prompt("Ingrese el peso de la persona: ");
if (peso <= 40) {
  alert("Persona baja de peso.");
} else if (peso >= 41 && peso <= 70) {
  alert("Persona peso promedio.");
} else {
  alert("Persona con sobre peso.");
}
*/

/*6. Dado un número entre el 1 y el 7 escriba su correspondiente día de de la semana:
Día 1 lunes, Día 2 martes, Día 3 miércoles, Día 4 jueves, Día 5 viernes, Día 6 sábado,
Día 7 domingo. Si se escribe otro número diferente debe salir el mensaje “ESCRIBIÓ UN NÚMERO
FUERA DEL RANGO, ESCRIBA UN NÚMERO ENTRE 1 Y 7”.

let dia = prompt("Ingrese un número entre 1 y 7:");
dia = parseInt(dia);
switch (dia) {
    case 1: (dia = 1)
      alert("Lunes.");
      break;
    case 2: (dia = 2)
      alert("Martes.");
      break;
    case 3: (dia = 3)
      alert("Miércoles.");
      break;
    case 4: (dia = 4)
      alert("Jueves.");
      break;
    case 5: (dia = 5)
      alert("Viernes.");
      break;
    case 6: (dia = 6)
      alert("Sábado.");
      break;
    case 7: (dia = 7)
      alert("Domingo.");
      break;
    
    default:
    alert("Escribió un número fuera del rango. Escriba un número entre 1 y 7.");
}
*/

/* 7. En un almacén se hace un 20% de descuento a los clientes cuya compra
supere los $1000 pesos. A los demás solo se les hace un 5% de descuento ¿Cuál
será la cantidad que pagará una persona por su compra?

let cantidad_total = prompt("Ingrese el monto de la compra: ");
cantidad_total = parseInt(cantidad_total);
if (cantidad_total > 1000) {
  let descuento = 0.2 * cantidad_total;
} else {
  let descuento = 0.05 * cantidad_total;
}
let total = parseInt (cantidad_total) - parseInt (descuento);
alert("La cantidad a pagar es de: $" + total + " pesos.");
*/