
$(document).ready(function(){

    $('.divPersona').hide()

    $("input:radio[name='optRemitente']").change(function () {

        if ($("input[name='optRemitente']:checked").val() == '0') {
            $('.divPersona').show()
        }
        if ($("input[name='optRemitente']:checked").val() == '1') {
            $('.divPersona').hide()
        }
    });
})