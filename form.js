const checkNombre = () => {
  let validanombre = document.getElementById("nombre");

  if (!/^[a-zA-ZÀ-ÿ\s]{4,30}$/.test(validanombre.value)) {
    validanombre.style.border = "2px solid #f50808";
    console.log(
      "Nombre: Validar  el campo  nombre  evitando que se ingresen  caracteres numéricos, restringiendo  la longitud  entre 4 y 30 caracteres máximo  y que el campo  no se deje  vacío."
    );
    return false;
  } else {
    validanombre.style.border = "2px solid #dee2e6";
    console.log("Nombre correcto!");
    return true;
  }
}

const checkApellido = () => {
  let validaApellido = document.getElementById("apellido");
  if (!/^[a-zA-ZÀ-ÿ\s]{4,30}$/.test(validaApellido.value)) {
    validaApellido.style.border = "2px solid #f50808";
    console.log(
      "Apellido: Validar  el campo Apellido  evitando que se ingresen  caracteres numéricos, restringiendo  la longitud  entre 4 y 30 caracteres máximo  y que el campo  no se deje  vacío."
    );
    return false;
  } else {
    validaApellido.style.border = "2px solid #dee2e6";
    console.log("Apellido correcto!");
    return true;
  }
}

const checkTelefono = () => {
  let telefono = document.getElementById("telefono").value;
  let validartelefono = document.getElementById("telefono");
  if (!isNaN(telefono) && telefono.length === 7) {
    validartelefono.style.border = "2px solid #dee2e6";
    console.log("Teléfono correcto!");
    return true;
  } else {
    validartelefono.style.border = "2px solid #f50808";
    console.log(
      "Teléfono: Validar  el campo  teléfono, este campo  debe tener una longitud  de 7 dígitos únicamente,  solo puede contener caracteres numéricos  y no puede  dejarse vacío."
    );
    return false;
  }
}

const checkCorreo = () => {
  let email = document.getElementById("correo").value;
  let validaremail = document.getElementById("correo");
  let regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  if (email == null || email.length == 0) {
    validaremail.style.border = "2px solid #f50808";
    console.log("Campo correo es obligatorio");
    return false;
  } else if (regex.test(email) == false) {
    validaremail.style.border = "2px solid #f50808";
    console.log("ingrese un correo valido");
    return false;
  } else {
    validaremail.style.border = "2px solid #dee2e6";
    console.log("Correo correcto!");
    return true;
  }
}

function mostrarContrasena() {
  let tipo = document.getElementById("password");
  if (tipo.type == "password") {
    tipo.type = "text";
  } else {
    tipo.type = "password";
  }
}

const checkContrasena = () => {
  let validapass = document.getElementById("password");
  if (
    /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])([^\s]){8,25}$/gm.test(validapass.value)
  ) {
    document.getElementById("seguridad").innerHTML = "Clave segura!";
    validapass.style.border = "2px solid #dee2e6";
    console.log("Clave correcta!");
    return true;
  } else {
    validapass.style.border = "2px solid #f50808";
    document.getElementById("seguridad").innerHTML =
      "<div class='error'>Debe ingresar por lo menos  una letra mayúscula,  una minúscula, un número  y con una longitud  mayor o igual a 8 dígitos</div>";

    console.log(
      "Validación  de la contraseña, en donde el usuario deba  de ingresar por lo menos  una letra mayúscula,  una minúscula,  un número  y con una longitud  mayor  o igual a 8 dígitos. Este campo  es requerido,  por lo que, no se puede  dejar vacío. "
    );
    return false;
  }
}

const miFormulario = document.getElementById("form-registro");

miFormulario.addEventListener("submit", (e) => {
  e.preventDefault();
});

function validate() {
  console.clear();
  checkNombre();
  checkApellido();
  checkTelefono();
  checkCorreo();
  checkContrasena();
}

module.exports = {
  checkNombre,
  checkApellido,
  checkTelefono,
  checkCorreo,
  checkContrasena,
};
