import validator from './validator.js';
// Buscar botones Ver detalles
const sDButton = document.getElementById("seeDetailsButton");
// Agregar evento click al botón ver detalles
if (sDButton) {
    sDButton.addEventListener("click", function () {
        // Redirigir a la vista de detalles del curso
        location.href = "detailsCourse.html";
    })
    const sDButton2 = document.getElementById("seeDetailsButton2");
    sDButton2.addEventListener("click", function () {
        // Redirigir a la vista de detalles del curso
        location.href = "detailsCourse2.html";
    })
    const sDButton3 = document.getElementById("seeDetailsButton3");
    sDButton3.addEventListener("click", function () {
        // Redirigir a la vista de detalles del curso
        location.href = "detailsCourse3.html";
    })
    const sDButton4 = document.getElementById("seeDetailsButton4");
    sDButton4.addEventListener("click", function () {
        // Redirigir a la vista de detalles del curso
        location.href = "detailsCourse4.html";
    })
}

// Buscar los div que contienen los formularios
const contentForm = document.getElementById("contentForm");

// Buscar botones de compra y agregarles evento click
const btnPay = document.getElementById("btnPay");

// Verificar que el botón de comprar ahora existe en la vista actual
if (btnPay) {
    btnPay.addEventListener("click", function () {
        contentForm.style.display = "flex";
    });
}

// Buscar input de número de tarjeta de crédito y código
const inputNumCreditCard = document.getElementById("creditCardNumber");
const inputCode = document.getElementById("code");

// Confirmar que el input está en la vista actual
if (inputNumCreditCard) {
    // Agregar evento input al input del número de la tarjeta de crédito. Este se acciona cada vez que el usuario cambie el valor en el input o vaya escribiendo el número
    inputNumCreditCard.addEventListener("input", function (e) {
        // Se pasa a la función el evento input y s obtiene el valor mediante target.value
        let value = e.target.value;
        // Se revisa si el valor de value es mayor a 16
        if (value.length > 16) {
            // Si value es mayor a 16 recortar el valor hasta los primeros 16 dígitos y reemplazar valor en el target.value
            e.target.value = value.slice(0, 16);
        }
    })
}

if (inputCode) {
    // Agregar evento input al input del codigo de seguridad 
    inputCode.addEventListener("input", function (e) {
        // Se pasa a la función el evento input y se obtiene el valor mediante target.value
        let value = e.target.value;
        // Se revisa si el valor de value es mayor a 4
        if (value.length > 4) {
            // Si value es mayor a 4 recortar el valor hasta los primeros 4 digitos y reemplazar el valor en el target.value
            e.target.value = value.slice(0, 4);
        }
    })
}

// Obtener boton de aceptar compra
const acceptPurchase = document.getElementById("acceptPurchase");
// Obtener botón de empezar curso
const startCourse = document.getElementById("startCourse");

// Verificar que el botón de aceptar compra existe en la vista actual
if (acceptPurchase) {
    acceptPurchase.addEventListener("click", function (e) {
        // Previene que la página se recargue después de aceptar compra
        e.preventDefault();
        // Obtener el valor de la tarjeta de crédito que el usuario ingresa en el input "creditCardNumber"
        const numCreditCard = document.getElementById("creditCardNumber").value;
        const name = document.getElementById("name").value;
        const month = document.getElementById("month").value;
        const year = document.getElementById("year").value;
        const code = document.getElementById("code").value;
        // Validar que el usuario haya ingresado su tarjeta de crédito
        if (!name && !numCreditCard && !month && !year && !code) {
            // Alertar al usuario de que ingrese sus datos
            alert("Por favor diligencie sus datos.");
            // Detener ejecución del código hasta que el usuario ingrese sus datos
            return;
        }
        if (!name) {
            // Alertar al usuario de que ingrese sus datos
            alert("Por favor ingresa el nombre del titular.");
            // Detener ejecución del código hasta que el usuario ingrese sus datos
            return;
        }
        if (!numCreditCard) {
            // Alertar al usuario de que ingrese sus datos
            alert("Por favor ingresa el número de tu tarjeta.");
            // Detener ejecución del código hasta que el usuario ingrese sus datos
            return;
        }
        if (!month) {
            // Alertar al usuario de que ingrese sus datos
            alert("Por favor ingresa el mes de vencimiento de tu tarjeta.");
            // Detener ejecución del código hasta que el usuario ingrese sus datos
            return;
        }
        if (!year) {
            // Alertar al usuario de que ingrese sus datos
            alert("Por favor ingresa el año de vencimiento de tu tarjeta.");
            // Detener ejecución del código hasta que el usuario ingrese sus datos
            return;
        }
        if (!code) {
            // Alertar al usuario de que ingrese sus datos
            alert("Por favor ingresa el código de verificación de tu tarjeta.");
            // Detener ejecución del código hasta que el usuario ingrese sus datos
            return;
        }
        // Guardar resultado que retorna la función isValid del validator
        const result = validator.isValid(numCreditCard);
        // Guardar resultados del número de la tarjeta de crédito con los primeros dígitos ocultos
        const maskifyNumber = validator.maskify(numCreditCard);
        // Validar que el resultado es true o false para emitir una alerta
        if (result) {
            alert(`Tu tarjeta ${maskifyNumber}.Tu compra fue exitosa. Empieza a disfrutar tu curso.`);
            contentForm.style.display = "none";
            btnPay.style.display = "none";
            startCourse.style.display = "inline";
        } else {
            alert(`Tu tarjeta ${maskifyNumber} no ha sido aceptada. Por favor, vuelve a intentarlo.`);
        }
    });
}
