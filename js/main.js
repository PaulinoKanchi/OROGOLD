var owl = $('.owl-carousel');
owl.owlCarousel({
    items: 4,
    loop: true,
    autoWidth: true,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true
});
$('.play').on('click', function() {
    owl.trigger('play.owl.autoplay', [1000])
})
$('.stop').on('click', function() {
    owl.trigger('stop.owl.autoplay')
})
$('#Reservar').click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 'slow');
    return false;
});
$('#GuardarNuevaCita').click(function() {
    nombre = $('#nombre').val();
    correo = $('#correo').val();
    telefono = $('#telefono').val();
    Reservar(nombre, correo, telefono);
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
                document.getElementById('nombre').value = "";
                document.getElementById('correo').value = "";
                document.getElementById('telefono').value = "";
                alertify.success("¡Cita creada exitosamente!");

            } else if (r == 2) {
                alertify.error("Complete todos los campos");
            } else if (r == 3) {
                alertify.error("¡Ya tiene una cita programada!");
            } else {
                alertify.error("Error");
            }
            console.log(r)
        }

    });
}