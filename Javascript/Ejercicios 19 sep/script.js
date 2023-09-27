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

  if (peso <= 40) {
  let peso = prompt("Ingrese el peso de la persona: ");
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

/*7
let compra = prompt("Ingresa el valor de tu compra: ");

compra = parseInt(compra);

if (compra >= 1000) {

  descuento = 0.2 * compra;
} else {

  descuento = 0.05 * compra;
}

total = compra - descuento;

alert("El total a pagar es de " + total + " pesos.");*/
/*8
let horasTrabajadas = prompt("Ingresa las horas trabajadas: ");

horasTrabajadas = parseInt(horasTrabajadas);

if (horasTrabajadas <= 40) {

  salario = horasTrabajadas * 16000;
} else {

  salario = 40 * 16000 + (horasTrabajadas - 40) * 20000;
}

alert("El salario semanal es de " + salario + " pesos.");*/
/*9
let nombre1 = prompt("Ingresa el nombre de la primera persona: ");
let edad1 = prompt("Ingresa la edad de la primera persona: ");
let nombre2 = prompt("Ingresa el nombre de la segunda persona: ");
let edad2 = prompt("Ingresa la edad de la segunda persona: ");

edad1 = parseInt(edad1);
edad2 = parseInt(edad2);

if (edad1 > edad2) {

  alert("La persona con más edad es " + nombre1 + " con " + edad1 + " años.");
} else {

  alert("La persona con más edad es " + nombre2 + " con " + edad2 + " años.");
}*/
/*10
let precio = prompt("Ingresa el precio de la camisa: ");
let cantidad = prompt("Ingresa la cantidad de camisas compradas: ");

precio = parseInt(precio);

totalSinDescuento = cantidad * precio;

if (cantidad >= 3) {

  descuento = 0.2 * totalSinDescuento;
} else {

  descuento = 0.1 * totalSinDescuento;
}

total = totalSinDescuento - descuento;

alert("El total a pagar es de " + total + " pesos.");*/

/*11

let numero1 = prompt("Ingresa el primer número: ");
let numero2 = prompt("Ingresa el segundo número: ");

numero1 = parseInt(numero1);
numero2 = parseInt(numero2);

if (numero1 == numero2) {

  alert("Los números son iguales y su producto es " + numero1 * numero2);
} else if (numero1 > numero2) {

    alert("El primer número es mayor y su diferencia es " + numero1 - numero2);
} else {

    alert("El segundo número es mayor y su suma es " + numero1 + numero2);
} */

/*12. Realizar una calculadora con las operaciones bassicas

let opcion = prompt("1. suma 2. resta 3. division 4. multiplcacion");
let nume1 = prompt("digite el numero 1");
let nume2 = prompt("digite el numero 2");

if (opcion==1){
    suma=parseInt(nume1)+parseInt(nume2);
    alert(suma);
} else if(opcion==2){
    resta=parseInt(nume1)-parseInt(nume2);
    alert(resta);
} else if(opcion==3){
    division=parseInt(nume1)/parseInt(nume2);
    alert(division);
} else {
    multiplicacion=parseInt(nume1)*parseInt(nume2);
    alert(multiplicacion);
}*/

/*17.
*/

/*18. Escriba un programa que imprima "Es un número menor que 10." si el
número ingresado es menor que 10, "Es un número entre 10 y 20.", si el número ingresado está entre 10 y 20, y "Es un número
mayor que 20" si el número ingresado es mayor que 20.

let num=parseFloat(prompt("Ingrese un número."))

if (num<10){
  alert("Es un número menor que 10.");
}
else if (num>10 && num<20){
  alert("Es un número entre 10 y 20.");
}
else{
  alert("Es un número mayor que 20.");
}
*/

/*19. Diseñe un programa que solicite el nombre de un usuario y su contraseña,
si el nombre es "ADMIN", y la contraseña es "12345" muestra un mensaje de "Acceso
concedido.", de lo contrario, muestre un mensaje de "Acceso denegado"

let usuario=prompt("Ingrese usuario.")
let contraseña=parseInt(prompt("Ingrese contraseña."))

if (usuario=="ADMIN"){
                    if (contraseña=="12345"){
                    alert("Acceso concedido.");
                    }else{
                    alert("Contraseña incorrecta.");
}
}else{
  alert("Usuario no encontrado.");
}
*/

/*20. Realizar un programa que pida genero y edad, y si es hombre y es mayor de
18, que mande un mensaje que diga "Es elegible para el servicio militar"

let genero=prompt("Ingrese su genero solamente ingresando las letras M o F en mayúscula.")
let edad=parseInt(prompt("Ingrese su edad."))

if (edad>=18 && genero=="M") {
  alert("Es elegible para el servicio militar.")}
else
  alert ("No es elegible para el servicio militar.")
*/