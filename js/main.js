
$(document).ready(function(){

    function reset(){
        $('#btnTramitazioaFin').hide()
        $('.rowCanal').hide()
        $('.rowRemitente').hide()
        $('.rowPersona').hide()
        $('.rowEdad').hide()
        $('.rowNacionalidad').hide()
        $('.rowIdioma').hide()
        $('.rowDistrito').hide()
        $('.rowAdministracion').hide()
        $('.rowTramiteak').hide()
    }

    reset()
    
    $('#btnTramitazioaFin').click(function(){
        reset()
        $('#btnTramitazioaHasi').show()
    });

    $('#btnTramitazioaHasi').click(function(){
        $('#btnTramitazioaFin').show()
        $('.rowCanal').show()
        $('.rowRemitente').show()
        $('.rowPersona').show()
        $('.rowEdad').show()
        $('.rowNacionalidad').show()
        $('.rowIdioma').show()
        $('.rowDistrito').show()
        $('.rowAdministracion').show()
        $('.rowTramiteak').show()
        $('#btnTramitazioaHasi').hide();
    });
    
    $("input:radio[name='optCanal']").change(function() {
        $('.rowRemitente').show()
    });

    $("input:radio[name='optCanal']").change(function() {
        $('.rowRemitente').show()
    });

    var rmt;

    $("input:radio[name='optRemitente']").change(function () {

        if ($("input[name='optRemitente']:checked").val() == '0') {
            rmt = "persona"
            $('.rowPersona').show()
            $('.rowEdad').show()
            $('.rowNacionalidad').hide()
        }
        if ($("input[name='optRemitente']:checked").val() == '1') {
            rmt = "admin"
            $('.rowPersona').hide()
            $('.rowEdad').hide()
            $('.rowNacionalidad').hide()
            $('.rowIdioma').show()
        }
    });

    $("input:radio[name='optEdad']").change(function() {
        $('.rowDistrito').show()
    });

    $("input:radio[name='optIdioma']").change(function() {
        $('.rowDistrito').show()
    });

    $("input:radio[name='optDistrito']").change(function() {
        $('.rowAdministracion').show()
    });

    $("input:radio[name='optAdministracion']").change(function() {
        $('.rowTramiteak').show()
    });
    

    $('#cmbselect1').change(function() {
        $('#cmbselect2').append('<option value="Biztanleen errolda: ziurtagiriak eta historikoa">Biztanleen errolda: ziurtagiriak eta historikoa</option>');
        $('#cmbselect2').append('<option value="SARRERA-ERREGISTROA: Udalari agiriak ematea edo emandakoak kontsultatzea">SARRERA-ERREGISTROA: Udalari agiriak ematea edo emandakoak kontsultatzea</option>');
        $('#cmbselect2').append('<option value="Obra txikia egiteko lizentzia">Obra txikia egiteko lizentzia</option>');
        $('#cmbselect2').append('<option value="Erreklamazioak, kexak, iradokizunak eta esker onak">Erreklamazioak, kexak, iradokizunak eta esker onak</option>');
        $('#cmbselect2').append('<option value="Zergak helbideratzea">Zergak helbideratzea</option>');
        $('#cmbselect2').append('<option value="Ordainagirien xehetasunak kontsultatu">Orrdainagirien xehetasunak kontsultatu</option>');
        $('#cmbselect2').append('<option value="Aurretiazko komunikazioa beharrezkoa duten jarduerekin lotutako obra-lizentzia">Aurretiazko komunikazioa beharrezkoa duten jarduerekin lotutako obra-lizentzia</option>');
        $('#cmbselect2').append('<option value="Sailkatutako jardueren aurretiazko komunikazioa">Sailkatutako jardueren aurretiazko komunikazioa</option>');
        $('#cmbselect2').append('<option value="Lizentzia behar duten jardueren jarduera-lizentzia eta obra lizentzia (hala badagokio)">Lizentzia behar duten jardueren jarduera-lizentzia eta obra lizentzia (hala badagokio)</option>');
        $('#cmbselect2').append('<option value="Jardueraren titulartasun aldaketa">Jardueraren titulartasun aldaketa</option>');
        $('#cmbselect2').append('<option value="Izen-ematea Elkarteen Erregistroan">Izen-ematea Elkarteen Erregistroan</option>');
        $('#cmbselect2').append('<option value="Barrakak eta atrakzioak jartzea">Barrakak eta atrakzioak jartzea</option>');
        $('#cmbselect2').append('<option value="Bide publikoan terrazak eta mahaitxoak jartzea">Bide publikoan terrazak eta mahaitxoak jartzea</option>');
        $('#cmbselect2').append('<option value="Kaleko salmenta-postuarako baimena">Kaleko salmenta-postuarako baimena</option>');
    })

    $('.btnModal').click(function() {
        $('#nireModal').modal()
    });

    $('#cmdGorde').click(function(){
        
        var mitr = '<tr><td>2</td><td>';
        mitr = mitr + $('#cmbselect2').val() + '</td>';
        mitr = mitr + '<td><label><input type="radio">Solucionado</label>&nbsp;&nbsp;<label><input type="radio">Redirigido</label>&nbsp;&nbsp;<label><input type="radio">Cancelado</label></td>';
        mitr = mitr + '<td><a class="btnEzabatu" href="#"><i class="glyphicon glyphicon-trash"></i></a></td>';
        $('#nireTable').append(mitr);
        $('#nireModal').modal('hide')
    });

    $('#btnGerkud').click(function(){
        console.log("JAJAJ")
        var mitr = '<tr><td>4</td>';
        mitr = mitr + '<td>Geskud inzidentzia</td>';
        mitr = mitr + '<td><label><input type="radio">Solucionado</label>&nbsp;&nbsp;<label><input type="radio">Redirigido</label>&nbsp;&nbsp;<label><input type="radio">Cancelado</label></td>';
        mitr = mitr + '<td><a class="btnEzabatu" href="#"><i class="glyphicon glyphicon-trash"></i></a></td>';
        $('#nireTable').append(mitr);
    })

    $('#btnInformacion').click(function(){
        var mitr = '<tr><td>3</td>';
        mitr = mitr + '<td>Petición información</td>';
        mitr = mitr + '<td><label><input type="radio">Solucionado</label>&nbsp;&nbsp;<label><input type="radio">Redirigido</label>&nbsp;&nbsp;<label><input type="radio">Cancelado</label></td>';
        mitr = mitr + '<td><a class="btnEzabatu" href="#"><i class="glyphicon glyphicon-trash"></i></a></td>';
        $('#nireTable').append(mitr);
    })

    $(document).on('click', '.btnEzabatu', function(){
        $(this).parents("tr").remove();
    })
})