const miData = [
  [
    {
      nombre: "juan1",
      apellido: "chaparro5",
      telefono: "123123",
      correo: "aaa@aaa.com",
      password: "123456",
    },
  ],
  [
    {
      nombre: "manuel",
      apellido: "rueda",
      telefono: "543321",
      correo: "bbb@gmail.com",
      password: "123123",
    },
  ],
  [
    {
      nombre: "juan2",
      apellido: "chaparro1",
      telefono: "123123",
      correo: "2aaa@aaa.com",
      password: "123456",
    },
  ],
];

console.log(miData);

function ordenar() {
  miData.sort(function (a, b) {
    if (a.apellido > b.apellido) {
      return 1;
    }
    if (a.apellido < b.apellido) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
}
ordenar();
console.log(miData);

function filterItems() {
  const fruits = ["apple", "juan@gmail.com", "grapes", "mango", "orange"];

  /**
   * Filtra la matríz en función de un criterio de búsqueda (query)
   */
  const filterItems = (query) => {
    return fruits.filter(
      (el) => el.toLowerCase().indexOf(query.toLowerCase()) > -1
    );
  };

  console.log(filterItems("@gmail.com")); // ['apple', 'grapes']
}

filterItems();
