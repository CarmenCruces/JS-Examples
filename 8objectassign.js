const campo1 = {nombreError: true, nombreTexto: "El nombre no puede estar vacio"};
const campo2 = {emailError: true, emailTexto: "El email no tiene un formato correcto"};

const validacion = Object.assign( campo1, campo2, { hayErrores: true });
console.log(validacion);
