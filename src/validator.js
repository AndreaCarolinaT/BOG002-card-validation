
const validator = {
  // La funcion isValid toma como argumento el número de la tarjeta
  isValid: function (creditCardNumber) {
    // Convertir creditCardNumber a un array
    const arrNumbers = creditCardNumber.split("");
    //Invertir los elementos del arreglo arrNumbers
    const reversed = arrNumbers.reverse();
    // Declaramos una variable como un arreglo vacío la cual almacenará los dígitos de acuerdo a la condición que cumplan
    let arrDigits = [];

    // Multiplicar por dos los números que se encuentran en posición par
    for (let i = 0; i < arrNumbers.length; i++) { 
      // Como las posiciones de los arreglos inician en 0 los números que se encuentren en positición impar serán multiplicados por dos
      if (i % 2 === 0) {
        // reversed[i] toma el valor del numero que se encuentra en la posición i del arreglo que se guarda en la variable reversed
        arrDigits.push(reversed[i]);
      }
      else {
        arrDigits.push(reversed[i] * 2); // 12 -> 1 + 2
      }
    }

    // Unir elementos del arreglo arrDigits sin espacios o algún seprador, se guarda como string
    let newDigits = arrDigits.join("");

    // Separar los digitos de newDigits, retorna un arreglo de números de tipo string
    const separateDigits = newDigits.split("");

    // Declaramos una variable que guardará la Suma de los dígitos
    let addition = 0;
    // Recorremos los elementos del arreglo separteDigits con un ciclo for of el cual toma cada elemento del arreglo separateDigits
    for (let value of separateDigits) {
      // Con parseInt convertimos cada elemento del arreglo separteDigits que viene de tipo string a tipo number
      addition += parseInt(value);
      // console.log(value)
    }
    //Verificar si la suma de los digitos es múltiplo de 10
    if ((addition % 10) === 0) {
      // Retornar un booleano que indica que la tarjeta es valida
      return true;
    }
    else { return false }
  },
  // La funcion isValid toma como argumento el número de la tarjeta
  maskify: function (creditCardNumber) {

    // Pasar los números a un array
    let arrDigits = creditCardNumber.split("");
    // Invertimos el orden de los elementos del arreglo arrDigits
    let arrDigitsReversed = arrDigits.reverse();
    // console.log(arrDigits);

    // Declaramos una variable como arreglo vacío
    let arrResultReversed = [];
    // Con este ciclo verificamos que las primeras tres posiciones mantengan el numero y las demás pasen a ser un #
    for (let i = 0; i < arrDigits.length; i++) {
      if (i > 3) {
        // Si cumple la condición se guardará un # en arrResultReversed
        arrResultReversed.push("#")
      }
      else {
        // Si no cumple la condición se guarda el número en arrResultReversed
        arrResultReversed.push(arrDigitsReversed[i])
      }
    }
    // Volvemos a invertir el número para que vuelva a estar en el orden inicial
    let arrResult = arrResultReversed.reverse();
    // Unir números del arreglo
    let hideCreditCard = arrResult.join("");
    // Retornarmos el número de la tarjeta con los primeros digitos ocultos
    return hideCreditCard;
    // console.log(hideCreditCard)
  },
};

export default validator;
