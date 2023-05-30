/*Tooltip*/
$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});
/*Click y alerta*/
$(document).ready(function() {
    $('#enviarCorreo').click(function() {
        alert('El correo fue enviado correctamente...');
    });
});
/*Cambio de color por etiquetas */
$(document).ready(function() {
    $('#ingredientes, #preparacion').on('dblclick', function() {
        $(this).css('color', 'red');
    });
});
/**Desaparecer card */
$(document).ready(function() {
    $('.card-title').click(function() {
        $(this).siblings('.card-text').toggle();
    });
});