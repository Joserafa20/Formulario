//Validar si es mayor de 18 años

/*const inputNacimeinto = document.querySelector("#birth");

inputNacimeinto.addEventListener("blur", (evento) => {
    validadNacimiento(evento.target)
});*/

export function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    if (validadores[tipoDeInput]) {
        validadores[tipoDeInput](input);
    }

    //Sombrear de Rojo el campo y cambiando el mensaje de error
    if (input.validity.valid) {
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = "";
    }else{
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    }
}

//Validando el mensaje de error

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patterMismatch",
    "customError"
];
    


const mensajeDeError = {
    nombre: {
        valueMissing: "Este campo no puede estar vacio"
    },
    email: {
        valueMissing: "Este campo no puede estar vacio",
        typeMismatch: "El correo no es valido"
    },
    password: {
        valueMissing: "Este campo no puede estar vacio",
        patterMismatch: "Al menos 6 caracteres, maximo 12, debe contener una letra minuscula, una letra mayuscula, un numero y no puede contener caracteres especiales."
    },
    nacimiento: {
        valueMissing: "Este campo no puede estar vacio",
        customError: "Debes tener al menos 18 años de edad"
    },
    numero: {
        valueMissing: "Este campo no puede estar vacio",
        patterMismatch: "El formato requerido es xxxxxxxxxx 10 numeros"
    },
    direccion: {
        valueMissing: "Este campo no puede estar vacio",
        patterMismatch: "La direccion debe contener entre 10 a 40 caracteres"
    },
    ciudad: {
        valueMissing: "Este campo no puede estar vacio",
        patterMismatch: "La ciudad debe contener entre 10 a 40 caracteres"
    },
    estado: {
        valueMissing: "Este campo no puede estar vacio",
        patterMismatch: "El estado debe contener entre 10 a 40 caracteres"
    }
}

const validadores = {
    nacimiento: input => validadNacimiento(input),
}

function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = "";
    tipoDeErrores.forEach( error => {
        if (input.validity[error]) {
            console.log(tipoDeInput, error);
            console.log(input.validity[error]);
            console.log(mensajeDeError[tipoDeInput][error]);
            mensaje = mensajeDeError[tipoDeInput][error];
        }
    })
    return mensaje
}
function validadNacimiento(input) {
    const fechaCliente = new Date(input.value);
    let mensaje ="";
    
    if(!mayorDeEdad(fechaCliente)){
        mensaje = "Debes tener al menos 18 años de edad"
    }

    input.setCustomValidity()
}

function mayorDeEdad(fecha) {
    const fechaActual = new Date();
    const diferenciaFechas = new Date(
        fecha.UTCFullYear() + 18,
        fecha.getUTCMonth(),
        fecha.UTCFullDate()
    );
        return diferenciaFechas <= fechaActual;
}