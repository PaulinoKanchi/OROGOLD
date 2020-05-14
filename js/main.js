function enviar() {
    nombre = $('#nombre').val();
    correo = $('#correo').val();
    telefono = $('#telefono').val();
    Reservar(nombre, correo, telefono);
    $("#GuardarNuevaCita").click();
}
$('#GuardarNuevaCita').click(function() {

});

function Reservar(nombre, correo, telefono) {

    cadena = "nombre=" + nombre +
        "&correo=" + correo +
        "&telefono=" + telefono;

    $.ajax({
        type: "POST",
        url: "formulario/nuevacita.php",
        data: cadena,
        success: function(r) {
            if (r == 1) {
                alertify.success("Agregado con exito");
            } else if (r == 2) {
                alertify.error("Complete todos los campos");
            } else if (r == 3) {
                alertify.error("El correo ya se encuentra registrado");
            } else {
                alertify.error("Error");
            }
            console.log(r)
        }

    });
}