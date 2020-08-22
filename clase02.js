//Punto 1 

var number1 = prompt("Ingrese un numero:");

if (number1 > 1000) {
  alert ("El numero ingresado es mayor a 1000.");
}


//Punto 2

var text1 = prompt ("Ingrese un texto:");
 
if (text1 == "Hola") {
  console.log ("Ingresaste Hola");
}

//Punto 3

var number2 = prompt("Ingrese otro numero:");

if (number2 >= 10 && number2 <= 50){
  alert ("El numero ingresado se encuentra entre 10 y 50, por lo tanto, es positivo.");
}

else if (number2 < 10 || number2 > 50){
  alert ("El numero ingresado no se encuentra entre 10 y 50, por lo tanto, es negativo.");
} 

