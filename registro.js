let registros = [];

// const RegisterForm = document.querySelector("#form-registro");
// var correos_filtrados = [];

// RegisterForm.addEventListener("submit", agregarRegistro);

function ordenarArreglo(arreglo) {
  console.log(arreglo);
  arreglo.sort(function (a, b) {
    if (a.apellido > b.apellido) {
      return 1;
    }
    if (a.apellido < b.apellido) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
  console.log(arreglo);
  return arreglo;
}

//funcion filtrar correo
// function filtrarCorreo(arreglo) {
//   arreglo = arreglo[arreglo.length - 1];
//   let mail = arreglo.correo;
//   let index = mail.indexOf("gmail.com");
//   console.log(mail.indexOf("gmail.com"));
//   if (index < 0) {
//     index = -1;
//   } else if (index > -1) {
//     correos_filtrados.push(arreglo);
//   }
//   console.log(correos_filtrados);
//   return correos_filtrados;
// }

function filtrarCorreo(arreglo) {
  let regName = /[a-zA-Z0-9_.+-]+@gmail.com/;
  let correosOk = [];
  for (let i = 0; i < arreglo.length; i++) {
    correoOK = regName.test(arreglo[i]["correo"]);
    if (correoOK == true) {
      correosOk.push(arreglo[i]);
    }
  }

  console.log(correosOk);
  return correosOk;
}

function agregarRegistro() {
  if (typeof registros === "undefined") {
    globalThis.registros = new Array();
  }

  var inputs = document.getElementsByTagName("input");

  let arreglo = {
    nombre: inputs[0].value,
    apellido: inputs[1].value,
    telefono: inputs[2].value,
    correo: inputs[3].value,
    password: inputs[4].value,
  };

  // RegisterForm.reset();
  registros.push(arreglo);
  console.log(registros);

  // ordenarArreglo(registros);
  // filtrarCorreo(registros);
}

//export
// module.exports = {
//   agregarRegistro,
//   filtrarCorreo,
//   ordenarArreglo,
// };

module.exports.registros = registros;
module.exports.filtrarCorreo = filtrarCorreo;
module.exports.ordenarArreglo = ordenarArreglo;
module.exports.agregarRegistro = agregarRegistro;
