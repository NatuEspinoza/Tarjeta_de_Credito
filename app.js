//Preguntar al usuario que ingrese su número de tarjeta

  do{
  var answer = prompt("Ingrese su número de tarjeta");

    if (typeof answer == 'string')
    isValidCard;

  }while (answer === "")


function isValidCard(){
  //generamos una variable que pasa la respuesta string del usuario a number con un parseInt
    var num = answer;
  //generamos otra variable de array vacío la cual contendra los números
    var arr = [];

  //Por medio de un for recorremos las posiciones de cada número
  for (var i = 0; i < num.length; i++) {
      num[i];
      //variable que nos quite y guarde el ultimo numero
      var item = answer.pop();
      /* Le damos a nuestra variable arr el valor de
      la respuesta del usuario además de decirle que
      vaya insertando el último numero al inicio sin
      eliminar ni un n°, con esto logramos invertir la posicion de los n°s*/
      arr = answer.splice(i, 0, item);

      //For que me recorra solo los números pares y los multiplique por 2
      for (var j = 1; i < arr.length; i += 2) {
        arr[j] * 2;
        //Si al * los pares por 2 el resultado es mayor o igual a 10, debemos sumar sus indices
        if (arr[j] * 2 >= 10) {

      }

    }
  return arr;
  }
