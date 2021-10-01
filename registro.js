    const RegisterForm = document.querySelector('#form-registro');
    const formdata= [];
    var correos_filtrados = [];
    let counter =0;

    RegisterForm.addEventListener('submit',agregarRegistro);


function agregarRegistro(){
        if (typeof arreglocompuesto === 'undefined'){
            globalThis.arreglocompuesto = new Array();
        }
        let valorNombre = document.getElementById("nombre");
        let valorCorreo = document.getElementById("correo").value;
        let arreglo = [document.getElementById("nombre").value, document.getElementById("apellido").value,document.getElementById("telefono").value,document.getElementById("correo").value,document.getElementById("password").value];
        
        formdata.push(arreglo);

       
        let dataObject = {
            'correo':       valorCorreo,
        };
   
     
        RegisterForm.reset();
        globalThis.arreglocompuesto.push(arreglo);
        console.log(arreglocompuesto);
       
        filtrarCorreo(dataObject);

        }


//funcion filtrar correo
function filtrarCorreo(arreglo) {
    
    let filtro = "gmail.com";
    
    let mail = arreglo["correo"];
    
 
    
    if (mail.includes(filtro)) {
        correos_filtrados.push(mail);
        alert(correos_filtrados);
       
    }

    console.log(correos_filtrados);

}

//export

module.exports = {
    agregarRegistro,
    filtrarCorreo
}