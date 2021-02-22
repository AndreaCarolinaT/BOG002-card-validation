const validator = {
  isValid: function (creditCardNumber) {
    // Convertir creditCardNumber a un array
    const arrNumbers = creditCardNumber.split("");
    //Invertir los elementos del arreglo arrNumbers
    const reversed = arrNumbers.reverse();
    let arrDigits = [];

    // Multiplicar por dos los números que se encuentran en posición par
    for (let i = 0; i < arrNumbers.length; i++) {
      if (i % 2 === 0) {
        arrDigits.push(reversed[i])
      }
      else {
        arrDigits.push(reversed[i] * 2);
      }
    }
    // Unir valores del arreglo de dígitos.
    let newDigits = arrDigits.join("");

    // Separar los digitos de newDigits
    const separateDigits = newDigits.split("");

    // Suma de los dígitos
    let addition = 0;
    for (let value of separateDigits) {
      addition += parseInt(value);
      // console.log(value)
    }
    //Verificar si la suma de los digitos es múltiplo de 10
    if ((addition % 10) === 0) {
      return true;
    }
    else { return false }
  },

  maskify: function (creditCardNumber) {

    // Pasar los números a un array
    let arrDigits = creditCardNumber.split("");
    // console.log(arrDigits);
    let arrResult = [];
    for (let i = 0; i < arrDigits.length; i++) {
      if (i < 12) {
        arrResult.push("#")
      }
      else {
        arrResult.push(arrDigits[i])
      }
    }
    // Unir números del arreglo
    let hideCreditCard = arrResult.join("");
    return hideCreditCard;
    // console.log(hideCreditCard)
  },
};

export default validator;
