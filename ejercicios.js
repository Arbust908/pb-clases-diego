// Tablas Matematicas

// Hagamos una funcion que dado un numero nos de la tabla de ese numero, (del 1 al 10) en formato "x * 9 = 9x"

// Bonus: Usando esa funcion creemos otra funcion que tome dos numeros y nos devuelva las tablas de un numero al otro
// Tip: Para no repetir codigo podemos hacer una funcion que nos de la multiplicacion.

// El gran Asignador
// Con estos numeros hagamos una funcion que dado un numero te diga que nota te sacaste, en formato: "Con un x tu nota es un A"
// A de 100 a 90
// B de 90 a 80
// C de 80 a 70
// D de 70 a 60
// F el resto

// Bonus: Una funcion que nos debuelva una lista de evaluaciones dependiendo de la letra que le pasamos, en formato: "Con un x tu nota es un A"

// Ejercicio 2: masMenos
/*
Necesitamos una función masMenos que reciba un array y devuelva otro con los siguientes tres números:

en la primera posición, la fracción de números que son positivos
en la segunda posición, la fracción de números que son cero
en la última posición, la fracción de números que son negativos
Por ejemplo, masMenos([1, 2, 0, -1]) debería devolver [0.5, 0.25, 0.25], dado que hay 50% de positivos, 25% de ceros, y 25% de negativos.
*/

function masMenos(unArray) {
  console.log("Entra " + unArray);
  var final = [0, 0, 0];
  for (var i = 0; i < unArray.length; i++) {
    if (unArray[i] > 0) {
      final[0] += 1;
    } else if (unArray[i] < 0) {
      final[2] += 1;
    } else {
      final[1] += 1;
    }
  }
  console.log("Final " + final);
  for (i = 0; i < final.length; i++) {
    final[i] /= unArray.length;
  }
  return final;
}
// *** Pruebas
// masMenos([1]) es [1, 0, 0]
// masMenos([0, 0, 0, 0]) es [0, 1, 0]
// masMenos([0, 0, 0, 0, -2, -3, -4, -5]) es [0, 0.5, 0.5]
// masMenos([1, 2, 4]) es [1, 0, 0]
// masMenos([1, 0]) es [0.5, 0.5, 0]
// masMenos([1, 2, 0, -1]) es [0.5, 0.25, 0.25]

console.log(masMenos([1]));
console.log(masMenos([0, 0, 0, 0]));
console.log(masMenos([0, 0, 0, 0, -2, -3, -4, -5]));
console.log(masMenos([1, 2, 4]));
console.log(masMenos([1, 0]));
console.log(masMenos([1, 2, 0, -1]));
