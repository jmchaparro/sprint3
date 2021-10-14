let registros = [
  {
    nombre: "juan",
    apellido: "chaparro",
    telefono: "5552222",
    correo: "aaa@gmail.com",
    contrasena: "123123",
  },
  {
    nombre: "manuel",
    apellido: "rueda",
    telefono: "2225555",
    correo: "bbb@yahoo.com",
    contrasena: "321321",
  },
];

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
    contrasena: inputs[4].value,
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

// module.exports.registros = registros;
// module.exports.filtrarCorreo = filtrarCorreo;
// module.exports.ordenarArreglo = ordenarArreglo;
// module.exports.agregarRegistro = agregarRegistro;
