function agregarRegistro()
        {
        if (typeof arreglocompuesto === 'undefined')
        {
            globalThis.arreglocompuesto = new Array();
        }
        let valorNombre = document.getElementById("nombre");
        let arreglo = [document.getElementById("nombre").value, document.getElementById("apellido").value,document.getElementById("telefono").value,document.getElementById("correo").value,document.getElementById("password").value];
        arreglocompuesto.push(arreglo);
        
        alert(arreglocompuesto);
        }
        module.exports = agregarRegistro;