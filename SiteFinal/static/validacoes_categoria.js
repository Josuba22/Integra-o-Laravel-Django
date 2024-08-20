$(document).ready(function() {
    
    $('#form_categoria').submit(function(event) {
        let tipo = $('#id_tipo').val()
        if(tipo == ''){
            alert('Tipo obrigatório')
            event.preventDefault();
        }
    });
});